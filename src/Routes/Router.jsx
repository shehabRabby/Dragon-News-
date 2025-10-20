import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/auth",
    element: <div>auth layout</div>,
  },
  {
    path: "/news",
    element: <div>news layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404 layout</div>,
  },
]);

export default router;
