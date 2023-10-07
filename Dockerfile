FROM node:alpine3.18


RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

RUN mkdir -p /app/node_modules && chown -R nodejs:nodejs /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV JWT_SECRET=nt5uQD2AnG6xXEsmN1olU1b062giie0TtpIy38lWwzg=
ENV DATABASE_URL=postgresql://xenos:esisba@22@xenos.postgres.database.azure.com:5432/junction?sslmode=require
EXPOSE 8055

RUN npx prisma generate 
RUN npx prisma db push 
CMD [ "npm", "run", "start:dev" ]


