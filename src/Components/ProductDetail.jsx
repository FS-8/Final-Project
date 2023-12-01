import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../Redux/Action/productAction";
import { addToProductCart } from "../Redux/Action/cartAction";
import { useParams } from "react-router-dom";

function ProductDetail({}) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  let { productId } = useParams();
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    console.log(`Added ${quantity} product(s) to cart with color ${selectedColor} and size ${selectedSize}`);

    let newCart = {
      product: productId,
      name: products.name,
      images: products.images[0],
      basePrice: products.price,
      price: products.price * quantity,
      description: products.description,
      quantity,
      selectedColor,
      selectedSize,
    };

    dispatch(addToProductCart(newCart));
    console.log(newCart);
  };

  return (
    <section className=" font-mono mt-24">
      <div key={products._id} className="sm:flex sm:w-11/12 sm:mx-auto sm:justify-center flex flex-col  w-120 ml-5 mt-4">
        <main className="sm:flex sm:mt-16 sm:mx-20 sm:gap-10 ">
          <div className=" sm:basis-1/3 w-full  ">
            {Array.isArray(products.images) && products.images.length > 0 && <img className="rounded bg-auto object-cover w-full" src={products.images[0]} alt="" />}
            <div className="flex w-24 gap-3 mt-3 ">
              {Array.isArray(products.images) && products.images.length > 1 && <img className="rounded" src={products.images[0]} alt="" />}
              {Array.isArray(products.images) && products.images.length > 2 && <img className="rounded" src={products.images[1]} alt="" />}
              {Array.isArray(products.images) && products.images.length > 2 && <img className="rounded" src={products.images[2]} alt="" />}
            </div>
          </div>

          <div className="sm:basis-2/3 w-full">
            <h2 className=" sm:text-4xl sm:font-bold mt-2 text-4xl font-bold">{products.name}</h2>
            <p>Terjual 100+ • ⭐ bintang 4.9 (105 rating)</p>
            <span className=" text-2xl">
              <h2>
                Rp. <span>{products.price}</span>
              </h2>
            </span>
            <hr />

            <h3>Color </h3>
            <div className="flex gap-4 my-3">
              <button onClick={() => handleColorChange("White")} className="rounded-full bg-slate-200  p-4 ring ring-slate-700 ring-offset-2"></button>
              <button onClick={() => handleColorChange("Grey")} className="rounded-full bg-gray-700 p-4"></button>
              <button onClick={() => handleColorChange("Black")} className="rounded-full bg-black p-4"></button>
            </div>

            <h3>Size </h3>
            <div className="flex sm:gap-4 gap-3 mt-4 mb-5">
              <button onClick={() => handleSizeChange("39")} className=" rounded bg-slate-200 py-2 px-8 ring ring-slate-700 ring-offset-2">
                39
              </button>
              <button onClick={() => handleSizeChange("40")} className=" rounded bg-slate-300  py-2 px-8 ">
                40
              </button>
              <button onClick={() => handleSizeChange("41")} className=" rounded bg-slate-400  py-2 px-8 ">
                41
              </button>
              <button onClick={() => handleSizeChange("42")} className=" rounded  bg-slate-500 py-2 px-8 ">
                42
              </button>
              <button onClick={() => handleSizeChange("43")} className=" rounded bg-slate-600 py-2 px-8 ">
                43
              </button>
            </div>

            <div className=" flex gap-5 items-center">
              <button className=" rounded py-2 px-5 bg-slate-400" onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className=" rounded py-2 px-5 bg-slate-400" onClick={handleIncrement}>
                +
              </button>
            </div>

            <div className="flex text-white gap-4 my-4">
              <button onClick={addToCart} className=" rounded py-3 px-7 bg-black">
                Add To Cart
              </button>
            </div>

            <hr />
            <h3 className=" font-bold text-xl">Deskripsi</h3>
            <hr />
            <p>{products.description}</p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default ProductDetail;
