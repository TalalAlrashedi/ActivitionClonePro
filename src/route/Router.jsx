import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Support from "../pages/Support";

const Layout = () => {
  return (
    <>

      <Navbar />
      <Outlet />
    </>
  );
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default Router;
