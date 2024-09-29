import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
// import AllPost from "../features/posts/AllPost";
import AddForm from "../features/posts/AddForm";
import EditForm from "../features/posts/EditForm";
import Todos from "../features/todos/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
          index:true,
          element:<Todos /> ///yesma 'element:<AllPosts />' ko thau ma haleko for the font page diplay ko lagi matra
        },
        {
          path: 'add-form',
          element: <AddForm />
        },
        {
          path: 'edit-form/:id',
          element: <EditForm />
        }

    ]
  },



]);