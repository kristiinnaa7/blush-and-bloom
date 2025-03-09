import {
  About,
  AddProduct,
  Home,
  Login,
  Logout,
  Navbar,
  Products,
  Profile,
  Page404,
} from "../components";
import { Route, Routes } from "react-router-dom";
import Path from "../path";
import { Fragment } from "react";

const routes = [
  {
    path: Path.Home,
    element: <Home />,
  },
  {
    path: Path.About,
    element: <About />,
  },
  {
    path: Path.Products,
    element: <Products />,
  },
  {
    path: Path.AddProduct,
    element: <AddProduct />,
  },
  {
    path: Path.Login,
    element: <Login />,
  },
  {
    path: Path.Logout,
    element: <Logout />,
  },
  {
    path: Path.Profile,
    element: <Profile />,
  },
  {path: Path.Error,
     element: <Page404 />}
];

const generateRoutes = () => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} element={route.element} />;
  });
};

const AppRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>{generateRoutes()}</Routes>
    </Fragment>
  );
};

export default AppRoutes;
