import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function FilterBrand() {
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);

  let { id } = useParams();

  console.log(id);
  const filterShoes = shoes.filter((item) => {
    return item.brand === id;
  });
  console.log(filterShoes);
  return (
    <>
      <div className="mt-28 ">
        <h1 className="text-3xl font-bold smrid:text-xl text-hitam text-center p-5">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
        <div className="flex flex-wrap justify-center gap-10 smrid:gap-5">
          {filterShoes.map((item, i) => (
            <Link className="text-hitam" to={`/detail/${item._id}`}>
              <div key={i} className="h-[25rem] smrid:h-[15rem] bg-white rounded-md cursor-pointer border border-hitam hover:shadow-md shadow-md shadow-hitam hover:shadow-ungu">
                <div className="w-60 bg-white rounded-t-md smrid:w-32">
                  <img className="w-full rounded-t-md border border-b-ungu" src={item.images[0]} alt="" />
                  <div className="p-2">
                    <h3 className="font-semibold text-lg smrid:text-[10px] m-0 smrid:leading-3">{item.name}</h3>
                    <span className="smrid:text-[10px] font-bold ">Rp.{item.price}</span>
                    <p className="font-ligh smrid:text-[10px] overflow-auto text-smrid smrid:leading-3 h-auto">{item.description.split(" ").slice(0, 5).join(" ")}</p>
                  </div>
                  <p className="font-ligh smrid:text-[10px] m-0 text-smrid px-2">Terjual 10</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterBrand;
