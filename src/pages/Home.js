import React from "react";
import Navbar from "../components/Navbar";
import UploadFile from "../components/UploadFile";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <h1>Home</h1>
        <p>Ini Halaman Home</p>
        <UploadFile />
      </div>
    </>
  );
}
