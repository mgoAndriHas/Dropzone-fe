import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = (props) => {
  let id = "";
  return (
    <div className="container">
      {/* <div className="navbar-component">
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>
      </div>
      <p>{props.isLogin ? "Anda Sudah Login" : "Anda Belum Login"}</p>
      <p>{props.isLike ? "Suka" : "Tidak Suka"}</p>

      <button onClick={props.handleLogin}>Login</button>
      <button onClick={props.handleLogout}>Logout</button> */}
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/product`}>
        <button>Product</button>
      </Link>
      <Link to={`/product/${id}`}>
        <button>Product id</button>
      </Link>
      <Link to={`/contact`}>
        <button>Hubungi Kami</button>
      </Link>
      <Link to={`/about`}>
        <button>About</button>
      </Link>
      <Link to={`*`}>
        <button>Not Found</button>
      </Link>
    </div>
  );
};

export default Navbar;
