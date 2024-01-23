import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layout/layout.jsx";
const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path: "about",
        element: <About />,
      },
      {
        path: "",
        // index:true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
