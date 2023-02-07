import { DataSource } from "typeorm";
import { User, Post } from "../entities";

// conectando base de datos
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "ELGRANMICHAELCANALES16$",
  port: 5432,
  database: "typeorm_express",
  entities: [User, Post],
  // logging: true,
  synchronize: process.env.NODE_ENV === "production" ? false : true,
});
