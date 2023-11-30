import { useSelector } from 'react-redux';

function Carousel() {
  const { shoes, isLoading, status } = useSelector((state) => state.sepatu);
  return (
    <>
      <div className="px-16 bg-gradient-to-br from-ungu to-hitam mt-5 sm:px-0 mx-auto">
        <div className="pt-2">
          <h2 className="text-putih font-bold text-3xl text-center sm:text-2xl mb-2">Best Seller</h2>
        </div>
        <div className="overflow-auto ">
          <div className="flex gap-10 p-5 sm:p-2 sm:gap-2 sm:pb-5 w-full">
            {shoes.map((item, i) => (
              <div>
                <div className="w-60 bg-putih">
                  <img className="w-full" src={item.images[0]} alt="" />
                  <h3 className="font-semibold text-lg sm:text-[10px] m-0 sm:leading-3">{item.name}</h3>
                  <span className="sm:text-[10px] font-bold ">Rp.{item.price}</span>
                  <p className="font-ligh sm:text-[10px] overflow-auto text-sm sm:leading-3 h-auto">{item.description.split(' ').slice(0, 5).join(' ')}</p>
                  <p className="font-ligh sm:text-[10px] m-0 text-sm">Terjual 10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
