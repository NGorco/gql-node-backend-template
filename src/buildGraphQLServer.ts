import { createSchema, createYoga, useLogger } from "graphql-yoga";
import express from "express";
import { UsersDefs } from "./resolvers/users";

export function buildApp(app: ReturnType<express>) {
  const yoga = createYoga({
    schema: createSchema({
      typeDefs: [
        `
        type Query {
          _empty: String
        }

        type Mutation {
          _empty: String
        }
      `,
        UsersDefs.schemas,
      ],
      resolvers: {
        Query: {
          ...UsersDefs.resolvers,
        },
      },
    }),
    plugins: [
      useLogger({
        logFn: (eventName, args) => {
          // Event could be execute-start / execute-end / subscribe-start / subscribe-end / etc.
          // args will include the arguments passed to execute/subscribe (in case of "start" event) and additional result in case of "end" event.
          if (eventName === "execute-start") {
            console.dir({ eventName, query: args.args.contextValue.params });
          }
        },
      }),
    ],
  });

  app.use("/graphql", yoga);

  return app;
}
