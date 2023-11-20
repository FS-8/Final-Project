import Card from "./card";

import React from "react";

function Carousel() {
  return (
    <>
      <div className="px-16 bg-gradient-to-br from-ungu to-hitam mt-5">
        <div className="p-5">
          <h2 className="text-putih font-bold text-3xl text-center">Best Seller</h2>
        </div>
        <div className="flex overflow-auto gap-2 p-5">
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
