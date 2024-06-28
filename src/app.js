import React, { lazy ,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//lazy loading of Grocery component

const Grocery = lazy ( () => import("./components/Grocery"));

const AppLayout = () =>{
  //state variable to maintain logged in user
  const[userName,setUserName] = useState();
  // dummy authenticcation code
  useEffect(() =>{
    //make api call to get username*
    const data ={
      name :"Priti"
    }
    setUserName(data.name);
  },[])
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser : userName}}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
     </Provider>

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
        path:"/cart",
        element:<Cart />
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