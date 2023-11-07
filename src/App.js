import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
import Home from "./P/Home";
import HomeI from "./P/HomeI";
import HomeT from "./P/HomeT";
import CreateT from "./P/CreateT";
import CreateI from "./P/CreateI";
import UpdateT from "./P/UpdateT";
import UpdateI from "./P/UpdateI";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "home_for_tracking", element: <HomeT /> },
  { path: "update_tracking/:id", element: <UpdateT /> },
  { path: "update_item/:id", element: <UpdateI /> },
  { path: "add_new_tracking", element: <CreateT /> },
  { path: "add_new_item", element: <CreateI /> },
  { path: "home_for_item", element: <HomeI /> },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
