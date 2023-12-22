import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import App from "../../App";
import Login from "../Login";
import Register from "../Register";
import NotFound from "../NotFound";
import UserProfile from "../UserProfile";
import AddCourse from "../dashboard/AddCourse";
import ProductDetails from "../productDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/myprofile",
        element: <UserProfile />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/soon",
        element: <AddCourse />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <AllFood />,
  //       },
  //       {
  //         path: "/dashboard/add",
  //         element: <FromPage />,
  //       },
  //     ],
  //   },
]);
export default routes;
