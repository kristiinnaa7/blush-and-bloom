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
  Footer,
  Register,
  LoginGuard,
  AuthGuard,
  EditProduct,
  Details,
  SingleFragranceDestination,
} from "../components";
import { Route, Routes } from "react-router-dom";
import Path from "../path";
import { AuthContextProvider } from "../components/context/AuthContext";

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
    path: Path.Details,
    element: <Details />,
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
    path: Path.Profile,
    element: <Profile />,
  },
  { path: Path.Error, element: <Page404 /> },
  {
    path: Path.Register,
    element: <Register />,
  },
  {
    path: Path.EditProduct,
    element: <EditProduct />,
  },
  {
    path: Path.FragranceDestination,
    element: <SingleFragranceDestination />,
  },
];

const generateRoutes = () => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} element={route.element} />;
  });
};

const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        {generateRoutes()}
        <Route element={<AuthGuard />}>
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.Profile} element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
};

export default AppRoutes;
