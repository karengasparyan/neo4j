import { DataSource } from "typeorm";
import path from "path";
import config from '../config/config';

export default new DataSource({
  type: "postgres",
  host: config.HOST,
  port: 5432,
  username: config.USER,
  password: config.PASSWORD,
  database: config.DBNAME,
  synchronize: config.NODE_ENV === 'development',
  logging: false,
  entities: [path.join(__dirname, "../entities/**/*{.ts,.js}")],
  migrations: [path.join(__dirname, "../migrations/**/*.ts")],
  subscribers: [],
  migrationsRun: true, // Set this to true to automatically run migrations on application startup
});
