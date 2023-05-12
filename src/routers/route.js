import { createBrowserRouter } from "react-router-dom";

import Create from ".././views/Create";
import Index from ".././views/Index";
import Edit from ".././views/Edit";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: '/create',
        element: <Create />
    },
    {
        path: '/edit/:id',
        element: <Edit />
    }
]); 