import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export const router = createBrowserRouter ([
    {
        path: "",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/product",
                element: <Product/>
            }
        ]
    }
])