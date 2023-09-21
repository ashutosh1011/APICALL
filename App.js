import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body.js";
import HeaderComponent from "./src/components/header.js";
import Footer from "./src/components/Footer.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/About.js";
import Error from "./src/components/Error";



const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoutes}/>);
