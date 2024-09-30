"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsUser = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsUser = (0, apollo_server_express_1.gql) `
  type User {
    id: String,
    fullName: String,
    email: String,
    token: String,
    code: Int,
    message: String
  }

  type Query {
    getUser(token: String): User
  }

  input RegisterInput {
    fullName: String,
    email: String,
    password: String
  }

  input LoginInput {
    email: String,
    password: String
  }

  type Mutation {
    register(user: RegisterInput): User,
    login(user: LoginInput): User
  }
`;
