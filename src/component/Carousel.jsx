import Card from "./card";

import React from "react";

function Carousel() {
  return (
    <>
      <div className="px-16 bg-gradient-to-br from-ungu to-hitam mt-5 sm:px-0 mx-auto">
        <div className="pt-2">
          <h2 className="text-putih font-bold text-3xl text-center sm:text-2xl mb-2">Best Seller</h2>
        </div>
        <div className="flex overflow-auto gap-10 p-5 sm:p-2 sm:gap-2 sm:pb-5 ">
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
