// import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import App from './App.jsx'

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LinkSpotify from './pages/LinkSpotify';
import CreatePlaylist from './pages/CreatePlaylist';
import ViewPlaylists from './pages/ViewPlaylists';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/LinkSpotify',
        element: <LinkSpotify />,
      },
      {
        path: '/CreatePlaylist',
        element: <CreatePlaylist />,
      },
      {
        path: '/ViewPlaylists',
        element: <ViewPlaylists />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

export default App;