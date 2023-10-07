import {
  Body,
  Controller,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Post,
  Query,
  Get,
  Res,
  BadRequestException,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { materialDto } from './dto/material.dto';
import { AuthRequest } from 'src/interfaces/request';
import { AuthGuard } from '../auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { AllowedRoles } from 'src/decorators/roles.decorator';
@Controller('material')
@UseGuards(AuthGuard)
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${uuid()}${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async createMaterial(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 30 }),
          new FileTypeValidator({ fileType: '.pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body()
    body: materialDto,
    @Request() request: AuthRequest,
  ) {
    return await this.materialService.createMaterial(
      body,
      request.user.id,
      file.path,
    );
  }

  @Get()
  @AllowedRoles('ALL')
  async getFiles(@Query('courseId') courseId: string, @Res() res: Response) {
    if (!courseId) throw new BadRequestException('bad request');
    const materials = await this.materialService.getMaterials(courseId);
    for (const material of materials) {
      const file = createReadStream(material.url);
      file.pipe(res);
    }
  }
}
