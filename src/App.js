import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Create from "./views/Create";
import Index from "./views/Index";
import Edit from "./views/Edit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path:'/create',
    element:<Create />
  },
  {
    path:'/edit/:id',
    element:<Edit />
  }
]);

export default function App() {
  return (<RouterProvider router={router}></RouterProvider>)
}