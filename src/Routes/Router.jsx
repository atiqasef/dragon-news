import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Categories from "../Components/Categories/Categories";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Layouts/AuthLayout/Login";
import Register from "../Layouts/AuthLayout/Register";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Provider/Loading";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register,
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute>  ,
        // loader: () => fetch('news.json')
        loader: async () => {
            const res = await fetch('/news.json');
            const json = await res.json();

            // return the array directly if json.news exists
            return json.news || json;
        },
        hydrateFallbackElement: <Loading></Loading>,
    }
]);