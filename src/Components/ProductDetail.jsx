import React from "react";
import MyImage from "../Assets/img-1 (1).jpg";
import MyImage2 from "../Assets/img-1 (2).jpg";
import MyImage3 from "../Assets/img-1 (3).jpg";
import MyImage4 from "../Assets/img-1 (4).jpg";
import MyImage5 from "../Assets/img-1 (5).jpg";

function ProductDetail() {
  return (
    <section className=" font-mono">
      <div className="flex w-11/12 mx-auto justify-center ">
        <main className="flex mt-20 mx-20 gap-10 ">
          <div className=" w-128 ">
            <img className=" rounded" src={MyImage} alt="" />
            <div className="flex w-24 gap-3 mt-3">
              <img className=" rounded" src={MyImage} alt="" />
              <img className=" rounded" src={MyImage2} alt="" />
              <img className=" rounded" src={MyImage3} alt="" />
              <img className=" rounded" src={MyImage5} alt="" />
            </div>
          </div>

          <div>
            <h2 className=" text-4xl font-bold">Sepatu Ventela Reborn</h2>
            <p>Terjual 100+ • ⭐ bintang 4.9 (105 rating)</p>
            <span className=" text-2xl">
              <h2>
                Rp. <span>379.000</span>
              </h2>
            </span>
            <hr />

            <h3>Color </h3>
            <div className="flex gap-4 my-3">
              <button className="rounded-full bg-slate-200 p-4 ring ring-slate-700 ring-offset-2"></button>
              <button className="rounded-full bg-gray-700 p-4"></button>
              <button className="rounded-full bg-black p-4"></button>
            </div>

            <h3>Size </h3>
            <div className="flex gap-4 mt-4 mb-5">
              <button className=" rounded bg-slate-200 py-2 px-8 ring ring-slate-700 ring-offset-2">
                37
              </button>
              <button className=" rounded bg-slate-300  py-2 px-8 ">37</button>
              <button className=" rounded bg-slate-400  py-2 px-8 ">38</button>
              <button className=" rounded  bg-slate-500 py-2 px-8 ">39</button>
              <button className=" rounded bg-slate-600 py-2 px-8 ">40</button>
              <button className=" rounded bg-slate-700  py-2 px-8 ">41</button>
            </div>

            <div className=" flex gap-5 items-center">
              <button className=" rounded py-2 px-5 bg-slate-400">-</button>
              <span>1</span>
              <button className=" rounded py-2 px-5 bg-slate-400">+</button>
            </div>

            <div className="flex text-white gap-4 my-4">
              <button className=" rounded py-3 px-7 bg-gray-700 ring ring-black ring-offset-1">
                Add To Whislist
              </button>

              <button className=" rounded py-3 px-7 bg-black">
                Add To Cart
              </button>
            </div>

            <hr />
            <h3 className=" font-bold text-xl">Deskripsi</h3>
            <hr />
            <p>
              Sepatu kanvas yang di desain elegan dengan kualitas kanvas terbaik
              dan insol empuk tidak kempes karena memakai ultralite foam.
            </p>
          </div>
        </main>
      </div>

      <div className=" w-11/12 mx-auto justify-center">
        <div className=" mt-7 mx-20">
          <hr className=" m-3" />
          <div className="flex items-center justify-between">
            <span className=" text-xl">Recent Review</span>
            <div>
              <form action="">
                <input className=" bg-slate-300 mx-3" type="text" />
                <input className=" bg-slate-300 mx-3" type="text" />
              </form>
            </div>
          </div>
          <hr className=" m-3" />

          <div className="flex gap-28 flex-row justify-between">
            <div className="w-56">
              <h2>Agaam</h2>
              <h2>17-02-2023</h2>
            </div>
            <div>⭐⭐⭐⭐⭐</div>
            <div className=" text-justify">
              <h2 className=" font-bold">Can't say enough good things</h2>
              <p>
                I was really pleased with the overall shopping experience. My
                order even included a little personal, handwritten note, which
                delighted me!
              </p>
              <p className=" mb-3">
                The product quality is amazing, it looks and feel even better
                than I had anticipated. Brilliant stuff! I would gladly
                recommend this store to my friends. And, now that I think of
                it... I actually have, many times!
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-28 flex-row justify-between">
            <div className="w-56">
              <h2>Agaam</h2>
              <h2>17-02-2023</h2>
            </div>
            <div>⭐⭐⭐⭐⭐</div>
            <div className=" text-justify">
              <h2 className=" font-bold">Can't say enough good things</h2>
              <p>
                I was really pleased with the overall shopping experience. My
                order even included a little personal, handwritten note, which
                delighted me!
              </p>
              <p className=" mb-3">
                The product quality is amazing, it looks and feel even better
                than I had anticipated. Brilliant stuff! I would gladly
                recommend this store to my friends. And, now that I think of
                it... I actually have, many times!
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-28 flex-row justify-between">
            <div className="w-56">
              <h2>Agaam</h2>
              <h2>17-02-2023</h2>
            </div>
            <div>⭐⭐⭐⭐⭐</div>
            <div className=" text-justify">
              <h2 className=" font-bold">Can't say enough good things</h2>
              <p>
                I was really pleased with the overall shopping experience. My
                order even included a little personal, handwritten note, which
                delighted me!
              </p>
              <p className=" mb-3">
                The product quality is amazing, it looks and feel even better
                than I had anticipated. Brilliant stuff! I would gladly
                recommend this store to my friends. And, now that I think of
                it... I actually have, many times!
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
