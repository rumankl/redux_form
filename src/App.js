import { RouterProvider } from "react-router-dom"
import { router } from "./app/appRoute"
import { useSelector } from "react-redux"



const App = () => {


  const { posts } = useSelector((state) => state.postSlice);
  console.log(posts);

  return <RouterProvider router={router} />
}
export default App