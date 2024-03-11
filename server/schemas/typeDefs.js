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
    tracks: String!
    owner: User!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser: User!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    createPlaylist(spotify_id: String!, name: String!, tracks: String!, owner: ID!): Playlist
  }, 
`;

module.exports = typeDefs;
