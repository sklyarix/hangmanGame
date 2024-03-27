import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.scss';

//import App from './App.tsx'
import Home from "./pages/Home.tsx";
import Game from "./pages/Game/Game.tsx";

const router = createHashRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/game',
      element: <Game/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider  router={router}/>
  </React.StrictMode>,
)
