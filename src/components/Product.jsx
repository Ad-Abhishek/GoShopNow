import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

export const Product = () => {
  const serverUrl = "https://jsonplaceholder.typicode.com/users"
  
  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(serverUrl) 
      .then((res) => {
        // console.log(res.data);
        setProduct(() => {
          return res.data;
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