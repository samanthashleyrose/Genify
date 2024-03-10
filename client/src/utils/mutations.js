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

export const ADD_PLAYLIST = gql`
  mutation addPlaylist($name: String!, $tracks: [ID]!) {
    addPlaylist(name: $name, tracks: $tracks) {
      _id
      name
      tracks
      owner
      created_at
    }
  }
`;