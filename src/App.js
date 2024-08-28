import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [umur, setUmur] = useState(17);
  console.log("isLogin", isLogin);
  // console.log("isLike", isLike);

  const handleLogin = () => {
    setIsLogin(true);
    console.log("isLogin", isLogin);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  // const handleLike = () => {
  //   setIsLike(true);
  // };

  // const handleDislike = () => {
  //   setIsLike(false);
  // };

  const ubahUmur = () => {
    setUmur(20);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Ini Halaman React Pertama</h1>
        <h2 className="red">Sub heading</h2>
      </header> */}
      {/* <Navbar
        isLogin={isLogin}
        isLike={isLike}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      /> */}

      {/* {isLogin ? (
        <ClassComponent umur={umur} />
      ) : (
        <FunctionComponent umur={umur} />
      )}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={ubahUmur}>Ubah umur menjadi 20</button> */}
      {/* <p>{isLike ? "Suka" : " "}</p> */}
      {/* {isLike ? (
        <button onClick={handleLike} style={{ color: "blue" }}>
          Like
        </button>
      ) : (
        <button onClick={handleDislike} style={{ color: "black" }}>
          Dislike
        </button>
      )} */}
      {/* <button
        onClick={isLike ? handleDislike : handleLike}
        style={isLike ? { color: "blue" } : { color: "black" }}
      >
        suka
      </button> */}
      {/* <Buttons
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleLike={handleLike}
        handleDislike={handleDislike}
        isLike = 
      /> */}
      {/* <Buttons
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleLike={handleLike}
        handleDislike={handleDislike}
        isLike={isLike}
      /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <ClassComponent /> */}
    </div>
  );
}

export default App;
