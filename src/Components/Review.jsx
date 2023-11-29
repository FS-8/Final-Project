import React from "react";

function Review() {
  return (
    <div className=" sm:flex sm:w-11/12 sm:mx-auto sm:justify-center">
      <div className=" mt-7 mx-20">
        <hr className=" m-3" />
        <span className=" text-xl">Recent Review</span>
        <hr className=" m-3" />
        <div className=" flex flex-row justify-between items-center">
          <button className=" text-xl">Submit Review</button>
          <input type="text" />
          <input type="text" />
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
              The product quality is amazing, it looks and feel even better than
              I had anticipated. Brilliant stuff! I would gladly recommend this
              store to my friends. And, now that I think of it... I actually
              have, many times!
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
              The product quality is amazing, it looks and feel even better than
              I had anticipated. Brilliant stuff! I would gladly recommend this
              store to my friends. And, now that I think of it... I actually
              have, many times!
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
              The product quality is amazing, it looks and feel even better than
              I had anticipated. Brilliant stuff! I would gladly recommend this
              store to my friends. And, now that I think of it... I actually
              have, many times!
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Review;
