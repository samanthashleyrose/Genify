import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import App from './App'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Entrance from './pages/Entrance';
import Contact from './pages/Contact';
import Home from './pages/Home';
import CreatePlaylist from './pages/CreatePlaylist';
import ViewPlaylists from './pages/ViewPlaylists';
import SelectGenres from './pages/SelectGenres';
import SelectArtists from './pages/SelectArtists';
import SelectSongCount from './pages/SelectSongCount';
import SelectPlaylistName from './pages/SelectPlaylistName';
import GeneratePlaylist from './pages/GeneratePlaylist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Entrance />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/CreatePlaylist',
        element: <CreatePlaylist />,
      },
      {
        path: '/ViewPlaylists',
        element: <ViewPlaylists />,
      },
      {
        path: '/SelectGenres',
        element: <SelectGenres />,
      },
      {
        path: '/SelectArtists',
        element: <SelectArtists />,
      },
      {
        path: '/SelectSongCount',
        element: <SelectSongCount />,
      },
      {
        path: '/SelectPlaylistName',
        element: <SelectPlaylistName />,
      },
      {
        path: '/GeneratePlaylist',
        element: <GeneratePlaylist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
