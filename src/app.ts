import express from "express";

const SERVER_PORT = process.env.PORT || 3000;

function onInit() {
  const app: express.Application = express();

  app.listen(SERVER_PORT, () => {
    console.log(`api service is listening at port ${SERVER_PORT}!`);
  });
}

onInit();
