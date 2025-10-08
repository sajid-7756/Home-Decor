import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";
import Chart from "../Pages/Chart";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/chart",
        Component: Chart,
      },
    ],
  },
  // {
  //   path: "*",
  //   Component: ErrorPage,
  // },
]);

export default router;
