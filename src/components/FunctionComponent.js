import { useEffect, useState } from "react";
import styles from "./FunctionComponent.module.css";

const FunctionComponent = ({ umur }) => {
  const [umurAwal, setUmurAwal] = useState(17);

  useEffect(() => {
    setUmurAwal(umur);
    console.log("1. componentDidMount The Component -> Function Component");
  }, []);

  useEffect(() => {
    console.log("2. componentDidUpdate -> Function Component");
    console.log(umurAwal, umur);
    if (umurAwal !== umur) {
      console.log(
        `FunctinComponent - Umur berubah dari ${umurAwal} menjadi ${umur}`
      );
    }
  }, [umur]);

  useEffect(() => {
    window.addEventListener("mousemove", myFunction);
    return () => {
      window.removeEventListener("mousemove", myFunction);
      console.log("3. componentWillUnmount --> FunctionComponent");
    };
  }, []);

  function myFunction() {
    console.log("ini myFunction");
  }

  return (
    <div className={styles.functionComponent}>
      <h1>ini FunctionComponent</h1>
      <h2>umur adalah: {umur}</h2>
    </div>
  );
};

export default FunctionComponent;
