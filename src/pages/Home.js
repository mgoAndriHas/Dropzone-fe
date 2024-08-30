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
        <p>Update Data</p>
        <p>Tambah data baru</p>
        <h2>Tambah Text 22.45</h2>
        <h2>Tambah Text 23.18 - Baru Update</h2>
        <UploadFile />
      </div>
    </>
  );
}
