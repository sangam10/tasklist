import {
  RouterProvider,
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {routers} from './routers/route.js'

export default function App() {
  return (<RouterProvider router={routers}></RouterProvider>)
}