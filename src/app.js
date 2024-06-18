import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";



//lazy loading of Grocery component

const Grocery = lazy ( () => import("./components/Grocery"));

const AppLayout = () =>{
    return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>

    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                 </Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restrarants/:resId",
        element: <RestraurantMenu />
      }
    ],
    errorElement:<Error/>,
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);