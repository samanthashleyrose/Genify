import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation 
  
  addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation 

  loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`;

export const CREATE_PLAYLIST = gql`
  mutation createPlaylist($spotify_id: String!, $name: String!, $tracks: String!, $owner: ID!) {
    createPlaylist(spotify_id: $spotify_id, name: $name, tracks: $tracks, owner: $owner) {
      playlist {
      _id
      spotify_id
      name
      tracks
      owner
      }
    }
  }
`;