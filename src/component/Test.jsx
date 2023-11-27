import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => setData(response.data.products));
  }, []);

  console.log(data);

  return (
    <>
      <div>
        {data.map((product) => (
          <img src={product.images[0]}></img>
        ))}
      </div>
    </>
  );
}

export default Test;
