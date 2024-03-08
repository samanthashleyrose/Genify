const typeDefs = `#graphql
    type User {
    id: ID!
    username: String!
    email: String
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUserInfo: User!
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;