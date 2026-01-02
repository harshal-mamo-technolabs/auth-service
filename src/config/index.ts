import dotenv from "dotenv";

dotenv.config();

const { PORT, NODE_ENV } = process.env;

const Config = {
  PORT: Number(PORT) || 3000,
  NODE_ENV: NODE_ENV ?? "development",
};

export default Config;
