import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainView from './components/ramez/MainView';
import Admin from './components/youssef/Admin'
import Resolution from './components/youssef/Resolution';
import System from './components/youssef/Sytem'
import Transaction from './components/youssef/Transaction';
import CreditCardHandle from './components/youssef/CreditCardHandle'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView/>,
  },
  {
    path:"Admin/",
    element:<Admin/>
  },
  {
    path:"Resolution/",
    element:<Resolution/>
  }  ,
  {
    path:"System/",
    element:<System/>
  },{
    path:"Transaction/",
    element:<Transaction/>
  }
  ,{
    path:"CreditCardHandle",
    element:<CreditCardHandle/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
