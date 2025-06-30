import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">Tutor Joe's</div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
      <button onClick={() => navigate("/login", {replace:true})}>Login</button>
    </div>
  );
};

export default Navbar;
