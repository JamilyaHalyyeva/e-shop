import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li><Link to="/">Product</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li> <Link to="/update">Updata Product</Link></li>
        <li><Link to="/delete">Delete Product</Link></li>
        <li><Link to="/logout">Logout Page</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
        </div>
  );
};

export default Nav;
