import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/browse" element={<App />} />));

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
