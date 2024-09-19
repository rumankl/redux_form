import { Outlet } from "react-router"
import Header from "../UI/Header"

const RootLayout = () => {
  return (
    <>

      <Header />

      <Outlet />
    </>
  )
}
export default RootLayout