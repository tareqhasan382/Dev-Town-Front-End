import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApi";
import { IProducts } from "../types/common";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data;
  console.log("data:", data?.data);
  console.log("isLoading:", isLoading);
  return (
    <div className=" bg-gray-100 px-1 lg:flex gap:[1%] justify-between h-full rounded-md ">
      <div className=" lg:w-[18%]  ">
        <div className=" px-1 hidden md:block ">
          {/* sort by */}
          <div className=" py-2 ">
            <label htmlFor="sort" className="font-semibold">
              Sort By
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              id="sort"
            >
              <option value="">Default sorting </option>
              <option value="asc">Price (Low to High)</option>
              <option value="desc">Price (Hign to Low)</option>
            </select>
          </div>
          <h3 className=" font-semibold ">Price Range</h3>
          {/* price Range */}
          <div className=" flex gap-2 items-center py-2 ">
            <input
              type="number"
              placeholder="min"
              className=" p-2 w-[70px] rounded "
            />
            <p className=" text-xl font-bold ">-</p>
            <input
              type="number"
              placeholder="max"
              className=" p-2 w-[70px] rounded "
            />
          </div>
          {/* ram */}
          <div>
            <label htmlFor="ram" className="font-semibold py-2 ">
              RAM
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              id="ram"
            >
              <option value="">Default</option>
              <option value="2GB">2GB</option>
              <option value="3GB">3GB</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="6GB">8GB</option>
              <option value="6GB">12GB</option>
              <option value="6GB">16GB</option>
            </select>
          </div>
          {/* Internal Storage */}
          <div className=" py-2 ">
            <label htmlFor="memor" className="font-semibold py-2 ">
              Internal Storage
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              id="memorySize"
            >
              <option value="">Default</option>
              <option value="2GB">32GB</option>
              <option value="3GB">64GB</option>
              <option value="4GB">128GB</option>
              <option value="6GB">256GB</option>
              <option value="6GB">512GB</option>
            </select>
          </div>
          {/* Battery */}
          <div className=" py-2 ">
            <label htmlFor="battery" className="font-semibold py-2 ">
              Battery
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              id="memorySize"
            >
              <option value="">Default</option>
              <option value="2GB">2000 to 2999 mAh</option>
              <option value="2GB">3000 to 3999 mAh</option>
              <option value="2GB">4000 to 4999 mAh</option>
              <option value="2GB">5000 to 5999 mAh</option>
              <option value="2GB">6000 to 6999 mAh</option>
            </select>
          </div>
        </div>
        <details className=" px-1 md:hidden transition duration-150 ease-in ">
          <summary>Sort and Filtering</summary>
          <div className=" flex gap-2 ">
            {/* sort by */}
            <div className=" py-2 ">
              <label htmlFor="sort" className="font-semibold">
                Sort By
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="sort"
              >
                <option value="">Default sorting </option>
                <option value="asc">Price (Low to High)</option>
                <option value="desc">Price (Hign to Low)</option>
              </select>
            </div>
            <div>
              <h3 className=" font-semibold ">Price Range</h3>
              {/* price Range */}
              <div className=" flex gap-2 items-center py-2 ">
                <input
                  type="number"
                  placeholder="min"
                  className=" p-2 w-[70px] rounded "
                />
                <p className=" text-xl font-bold ">-</p>
                <input
                  type="number"
                  placeholder="max"
                  className=" p-2 w-[70px] rounded "
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-3 items-center ">
            {/* ram */}
            <div>
              <label htmlFor="ram" className="font-semibold py-2 ">
                RAM
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="ram"
              >
                <option value="">Default</option>
                <option value="2GB">2GB</option>
                <option value="3GB">3GB</option>
                <option value="4GB">4GB</option>
                <option value="6GB">6GB</option>
                <option value="6GB">8GB</option>
                <option value="6GB">12GB</option>
                <option value="6GB">16GB</option>
              </select>
            </div>
            {/* Internal Storage */}
            <div className=" py-2 ">
              <label htmlFor="memor" className="font-semibold py-2 ">
                Internal Storage
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="memorySize"
              >
                <option value="">Default</option>
                <option value="2GB">32GB</option>
                <option value="3GB">64GB</option>
                <option value="4GB">128GB</option>
                <option value="6GB">256GB</option>
                <option value="6GB">512GB</option>
              </select>
            </div>
          </div>
          {/* Battery */}
          <div className=" py-2 ">
            <label htmlFor="battery" className="font-semibold py-2 ">
              Battery
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              id="memorySize"
            >
              <option value="">Default</option>
              <option value="2GB">2000 to 2999 mAh</option>
              <option value="2GB">3000 to 3999 mAh</option>
              <option value="2GB">4000 to 4999 mAh</option>
              <option value="2GB">5000 to 5999 mAh</option>
              <option value="2GB">6000 to 6999 mAh</option>
            </select>
          </div>
        </details>
      </div>
      <div className=" lg:w-[81%] gap-3 ">
        {isLoading && (
          <div className=" w-full h-full ">
            <h1 className=" text-2xl font-bold text-center  ">Loding...</h1>
          </div>
        )}
        {/*   */}
        <div className=" w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-clos-1 my-2 gap-3 ">
          {!isLoading &&
            products?.map((item: IProducts) => (
              <Link to={`/productDetails/${item?._id}`}>
                <div
                  key={item?._id}
                  className=" hover:shadow-lg duration-150 bg-white/90 flex flex-col text-black p-2 gap-2 rounded  "
                >
                  <img
                    src={item?.img}
                    alt="phone"
                    className=" object-cover rounded mb-3 "
                  />
                  <div className=" lg:h-[250px] md:h-[200px] ">
                    <h3 className=" text-sm font-bold ">{item?.name} </h3>
                    <p className=" text-sm font-semibold ">
                      Price: <span className=" font-bold ">${item?.price}</span>
                    </p>
                    <p>
                      Display:{item?.display?.size}"+
                      {item?.display?.resolution.slice(0, 17)}
                    </p>
                    {/* 6.52" HD+ (720 x 1600) */}
                    <p>Processor:{item?.processor?.chipset}</p>
                    <p>
                      Camera:{item?.camera?.front?.resolution} Front +
                      {item?.camera?.rear?.resolution.slice(0, 4)} Rear
                    </p>
                    <p>Features:{item?.features?.fingerprint} </p>
                  </div>
                  <div className=" flex lg:flex-col gap-3 lg:gap-0 ">
                    <button className=" bg-blue-500 hover:bg-blue-700 duration-300 text-white w-full my-2 py-2 rounded font-semibold ">
                      buy Now
                    </button>
                    <button className=" bg-slate-300 hover:bg-slate-400 duration-300 text-black w-full my-2 py-2 rounded font-semibold ">
                      Add To Cart
                    </button>
                    {/* bg-blue-500 hover:bg-blue-700 */}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
