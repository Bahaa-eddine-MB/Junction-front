FROM node:alpine3.18


RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

RUN mkdir -p /app/node_modules && chown -R nodejs:nodejs /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV JWT_SECRET=nt5uQD2AnG6xXEsmN1olU1b062giie0TtpIy38lWwzg=

EXPOSE 8055


CMD [ "npm", "run", "start:dev" ]


