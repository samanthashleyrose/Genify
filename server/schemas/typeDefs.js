const typeDefs = `#graphql
    type User {
    _id: ID!
    username: String!
    email: String
  }

  type Playlist {
    _id: ID!
    spotify_id: String!
    name: String!
    owner: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    createPlaylist(spotify_id: String!, name: String!): Playlist
  }, 
`;

module.exports = typeDefs;
