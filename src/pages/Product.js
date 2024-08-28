import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <h1>{id ? `Product dengan id ${id}` : "Product"} </h1>
    </div>
  );
}
