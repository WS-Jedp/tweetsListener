FROM node

COPY [".", "/usr/src/"]

WORKDIR /usr/src
RUN npm install
EXPOSE 3000

CMD ["npx", "nodemon", "-L", "src/index.js"]
