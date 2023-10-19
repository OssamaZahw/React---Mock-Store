import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbaar = () => {
  return (
    <nav className="nav d-flex justify-content-around align-items-center">
    <h3>Logo</h3>
    <ul className="d-flex justify-content-around align-items-center w-50">
      <Link to="/">
        <li className="list-item text-dark">Home</li>
      </Link>
       <Link to="/about">
        <li className="list-item text-dark">About</li>
      </Link>
      <Link to="/shop">
        <li className="list-item text-dark">Shop</li>
      </Link>
      <Link to="/lab1">
        <li className="list-item text-dark">Lab 1</li>
      </Link>
    </ul>
  </nav>
  );
};

export default Navbaar;
