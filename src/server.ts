import Config from "./config/index.js";
import app from "./app.js";
import logger from "./config/logger.js";

function startHttpServer() {
  app.listen(Config.PORT, () => {
    logger.info(`Server is running on port ${Config.PORT}`, {
      port: Config.PORT,
      environment: Config.NODE_ENV,
    });
  });
}

startHttpServer();
