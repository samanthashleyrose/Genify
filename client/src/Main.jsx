import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import App from './App'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Entrance from './pages/Entrance';
// import Contact from './pages/Contact';
import Profile from './pages/Profile';
// import LinkSpotify from './pages/LinkSpotify';
// import CreatePlaylist from './pages/CreatePlaylist';
// import ViewPlaylists from './pages/ViewPlaylists';

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
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      {
        path: '/Profile',
        element: <Profile />,
      },
      // {
      //   path: '/LinkSpotify',
      //   element: <LinkSpotify />,
      // },
      // {
      //   path: '/CreatePlaylist',
      //   element: <CreatePlaylist />,
      // },
      // {
      //   path: '/ViewPlaylists',
      //   element: <ViewPlaylists />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);