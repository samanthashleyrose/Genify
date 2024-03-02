import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import App from './App.jsx'

import Login from './src/pages/Login.jsx';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Contact from './src/pages/Contact';
import Profile from './src/pages/Profile';
import LinkSpotify from './src/pages/LinkSpotify';
import CreatePlaylist from './src/pages/CreatePlaylist';
import ViewPlaylists from './src/pages/ViewPlaylists';
import Error from './src/pages/Error';

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
        path: '/Contact',
        element: <Contact />,
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