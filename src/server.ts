import Config from "./config/index.js";
import app from "./app.js";

function startHttpServer() {
  app.listen(Config.PORT, () => {
    console.log(`Server is running on port ${Config.PORT}`);
  });
}

startHttpServer();
