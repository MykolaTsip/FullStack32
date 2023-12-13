import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import User from './components/User';
import DefCont from './components/DefContent';
import Err from './components/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: DefCont,
        // lazy: () => import('./components/DefContent').then(file => ({Component: file.DefCont})),
        // lazy: async () => {
        //   const { DefCont } = await import('./components/DefContent');

        //   return {Component: DefCont}
        // }
      },
      {
        path: '/user',
        // element: <User/>
        lazy: () => import('./components/User').then(file => ({element: <file.default />}))
      },
      {
        path: 'any',
        element: <b> Hellow from ANY </b>
      },
      {
        path: '*',
        // Component: Err
        lazy: () => import('./components/Error').then(file => ({Component: file.default}))
      }
    ]
  },
  // {
  //   path: '/user',
  //   element: <User/>
  // },
  // {
  //   path: 'any',
  //   element: <b> Hellow from ANY </b>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
// <App />
