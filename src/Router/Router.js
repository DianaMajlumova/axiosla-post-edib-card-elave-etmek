import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Post from "../Pages/Post/Post";
import Product from "../Pages/Product/Product";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/product/:id",
        element:<Product/> ,
      },
      {
        path: "/post",
        element:<Post/> ,
      },
  ]);

  export{router}