import knex, { Knex } from "knex";
import { Config } from "../config";

let cachedConnection: Knex;

const knexConnection = () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  const connection = knex({
    client: "pg",
    connection: {
      host: Config.DB_HOST,
      user: Config.DB_USER,
      password: Config.DB_PASSWORD,
      port: Config.DB_PORT,
      database: Config.DB_NAME,
    },
    searchPath: ["public"],
  });
  cachedConnection = connection;
  return connection;
};

export const knexDb = knexConnection();
