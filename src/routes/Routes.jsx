import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { NotFound } from "../components/Pages/NotFound";
import { LoadingScreen } from "../components/Pages/LoadingScreen";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    {React.createElement(Component, props)}
  </Suspense>
);

// Lazy loading components
const HomePage = Loadable(lazy(() => import("../components/Pages/HomePage").then(module => ({ default: module.HomePage }))));


export const routes = [
  {
    path: "/",
    element: <HomePage />
  },
  
  {
    path: '*',
    element: <NotFound />
  }
];

const createBrowserRouter = BrowserRouter;

export default createBrowserRouter;
