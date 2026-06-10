import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 40px;
            background: #111;
            color: white;
          }

          .navbar h2 {
            font-size: 22px;
          }

          .nav-links {
            display: flex;
            gap: 20px;
          }

          .nav-links a {
            color: white;
            text-decoration: none;
          }
        `}
      </style>

      <nav className="navbar">
        <h2>FashionHub</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;