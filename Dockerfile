FROM node:alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV JWT_SECRET=nt5uQD2AnG6xXEsmN1olU1b062giie0TtpIy38lWwzg=

EXPOSE 8055

RUN npm run build

CMD [ "node", "dist/main.js" ]