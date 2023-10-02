import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

export const Product = () => {
  const serverUrl = "http://127.0.0.1:8000/api/product/product/"

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(serverUrl) 
      .then((res) => {
        setProduct(() => {
          return res.data.results;
        });
      }) 
      .catch((err) => {
        console.log(err);
      }); 
  }, [serverUrl]);

  return (
    <>
      <CardList product={product} />
    </>
  );
};