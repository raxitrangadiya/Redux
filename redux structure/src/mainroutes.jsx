import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccessStoreData from "./pages/AccessStoreData";
// console.log("Called router");
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<HomePage/>,
    },{
        path: "accessapi",
        element:<AccessStoreData/>,
    }
]);
export default MainRoutes;