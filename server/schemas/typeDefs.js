const typeDefs = `#graphql
    type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    getUserInfo: User!
  }
`;

module.exports = typeDefs;