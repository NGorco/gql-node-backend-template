import express from "express";
import { buildApp } from "./buildGraphQLServer";
import { Config } from "./config";

const app = express();

buildApp(app);

app.listen(Config.API_PORT, () => {
  console.log(
    `GraphQL API located at http://localhost:${Config.API_PORT}/graphql`
  );
});
