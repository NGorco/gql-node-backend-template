import { createServer } from '@graphql-yoga/node'
import express from 'express'
import { UsersDefs } from './resolvers/users';

export function buildApp(app: ReturnType<typeof express>) {
  const server = createServer({
    schema: {
      typeDefs: [`
        type Query {
          _empty: String
        }

        type Mutation {
          _empty: String
        }
      `,
        UsersDefs.schemas
      ],
      resolvers: {
        Query: {
          ...UsersDefs.resolvers
        },
      },
    },
  });

  app.use('/graphql', server);

  return app;
}