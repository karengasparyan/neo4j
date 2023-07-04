import { DataSource } from "typeorm";
import path from "path";
import config from '../config/config';

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../entities/**/*{.ts,.js}")],
  migrations: [path.join(__dirname, "../migrations/**/*.ts")],
  subscribers: [],
  migrationsRun: true, // Set this to true to automatically run migrations on application startup
});
