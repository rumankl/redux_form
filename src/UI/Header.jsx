import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white px-7 py-2 flex justify-between items-baseline">
      <h1 className="text-2xl">Logo</h1>
      <nav>
        <NavLink to={'/add-form'}>Add Post</NavLink>
      </nav>

    </div>
  )
}
export default Header