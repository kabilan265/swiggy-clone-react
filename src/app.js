import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Restuarant from "./components/Restuarant";
import ShimmerUI from "./components/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Search from "./components/Search";
const Grocery = lazy(() => import("./components/Grocery"));
const AppComponent = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />
        <div className='mt-[74px] p-3' >
        <Outlet />
        </div>
       
      </Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search-restuarant",
        element: <Search />,
      },
      {
        path: "/retuarant/:resId",
        element: <Restuarant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={ShimmerUI()}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
