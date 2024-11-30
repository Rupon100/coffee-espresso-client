import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Banner from "./Banner";
import AddCoffee from "./AddCoffee";
import Error from "./Error";
import Update from "./Update";
import Signin from "./Signin";
import Signup from "./Signup";
import User from "../Users/User";

const router = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout></MainLayout>,
       children: [
        {
            path: '/',
            element: <Banner></Banner>
        },
        {
            path: '/addcoffee',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/update/:id',
            element: <Update></Update>,
            loader: ({ params }) => fetch(`https://espresso-server-rho.vercel.app/coffee/${params.id}`)
        },
        {
            path: '/signin',
            element: <Signin></Signin>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/users',
            element: <User></User>,
            loader: () => fetch('https://espresso-server-rho.vercel.app/users')
            // loader: () => fetch('https://espresso-server-rho.vercel.app//users/users')
        },

       ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;