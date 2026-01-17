import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Categories from "../Components/Categories/Categories";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
]);