import { knexDb } from "../database/connection";
import { BasicResolver } from "./basicResolver";

class UsersResolverBuilder extends BasicResolver {
  _schemaUser = `
    type User {
      user_id: String
      user_name: String
      user_description: String
      user_password: String
      user_verification_code: String
      user_status: Int
      user_email: String
    }`;

  _qGetUser = `getUser: User!`;
  async getUser() {
    return (await knexDb('users')
      .where('user_id', 1))[0];
  }
}

const Resolver = new UsersResolverBuilder();

export const UsersDefs = {
  resolvers: {
    getUser: Resolver.getUser
  },
  schemas: Resolver.getShemas(Resolver)
};
