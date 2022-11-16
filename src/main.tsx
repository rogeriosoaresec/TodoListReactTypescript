import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home } from './assets/pages/Home';
import { Login } from './assets/pages/Login';
import { Profile } from './assets/pages/Profile';
import { Register } from './assets/pages/Register';
import { Todo } from './assets/pages/Todo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/todo",
    element: <Todo />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/user/register",
    element: <Register />,
  },{
    path: "/user/profile",
    element: <Profile />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
