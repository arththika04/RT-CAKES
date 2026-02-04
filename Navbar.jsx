import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="active">HOME</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
         <li><Link to="/products">PRODUCTS</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
      <button className="nav-btn">SHOP NOW</button>
    </nav>
  );
}