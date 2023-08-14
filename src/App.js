import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Hotel } from "./pages/hotel/Hotel";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/hotels",
      element: <List/>,
    },
    {
      path: "/hotels/:id",
      element: <Hotel/>,
    },
  ]);
  
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
