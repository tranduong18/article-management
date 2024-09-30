import { gql } from "apollo-server-express";

export const typeDefsUser = gql`
  type User {
    id: String,
    fullName: String,
    email: String,
    token: String,
    code: Int,
    message: String
  }

  type Query {
    getUser(id: String): User
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