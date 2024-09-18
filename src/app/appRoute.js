import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AllPost from "../features/posts/AllPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
          index:true,
          element:<AllPost />
        }

    ]
  },



]);