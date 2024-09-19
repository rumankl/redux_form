import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AllPost from "../features/posts/AllPost";
import AddForm from "../features/posts/AddForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
          index:true,
          element:<AllPost />
        },
        {
          path: 'add-form',
          element: <AddForm />
        }

    ]
  },



]);