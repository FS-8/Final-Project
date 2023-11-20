import Card from "./card";

import React from "react";

function Carousel() {
  return (
    <>
      <div className="px-16 bg-gradient-to-br from-ungu to-hitam mt-5 sm:px-1">
        <div className="pt-5">
          <h2 className="text-putih font-bold text-3xl text-center sm:text-lg mb-5">Best Seller</h2>
        </div>
        <div className="flex overflow-auto gap-10 p-5 sm:p-1 sm:gap-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default Carousel;
