import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../redux/api/productApi";
import { IProducts } from "../types/common";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductDetailsQuery(id);
  const product: IProducts = data?.data;

  return (
    <div className=" py-6 ">
      <h1 className=" text-center text-2xl font-bold py-3 bg-gray-800 text-white  ">
        Product Details
      </h1>
      {isLoading && (
        <div className=" w-full h-screen bg-slate-500 ">
          <h1 className=" text-2xl font-bold text-center text-white ">
            Loding...
          </h1>
        </div>
      )}
      {!isLoading && (
        <div className=" flex flex-col gap-3 ">
          {/* img */}
          <div className=" shadow-lg lg:flex gap-4 rounded-md ">
            <div className=" lg:w-[50%] md:w-full rounded-md ">
              <img
                src={product?.img}
                alt="img"
                className="  p-2 rounded-md object-fill w-full "
              />
            </div>
            <div className=" lg:w-[50%] md:w-full px-2 pb-3 md:py-6 ">
              <h3 className=" lg:text-xl text-sm lg:font-bold font-bold ">
                Name : {product?.name}{" "}
              </h3>
              <h3 className=" text-sm font-semibold ">
                Model : {product?.model}{" "}
              </h3>
              <h3 className=" text-sm font-semibold ">
                Price : {product?.price}${" "}
              </h3>
              <h1 className=" text-lg font-bold ">Display</h1>
              <h3 className=" text-sm font-semibold ">
                Size : {product?.display?.size}"{" "}
              </h3>
              <h3 className=" text-sm font-semibold ">
                Resulation : {product?.display?.resolution}{" "}
              </h3>
              <button className=" px-3 py-1 bg-blue-500 text-white text-lg font-bold my-2 rounded hover:bg-blue-700 duration-300 ">
                Buy Now
              </button>
            </div>
          </div>
          {/* details */}
          <div className=" shadow-lg  p-2 ">
            <h1 className=" text-lg font-bold py-3 text-center bg-gray-800 text-white ">
              Details
            </h1>
            <h1 className=" text-lg font-bold ">Display</h1>
            <h3 className=" text-sm font-semibold ">
              Size : {product?.display?.size}"{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Resulation : {product?.display?.resolution}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Type : {product?.display?.type}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Processor</h1>
            <h3 className=" text-sm font-semibold ">
              Chipset : {product?.processor?.chipset}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              CPU Type : {product?.processor?.cpuType}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              CPU Speed : {product?.processor?.cpuSpeed}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              GPU : {product?.processor?.gpu}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Memory</h1>
            <h3 className=" text-sm font-semibold ">
              RAM : {product?.memory?.ram}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Internal Storage : {product?.memory?.internalStorage}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Card Slot : {product?.memory?.cardSlot}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Rear Camera</h1>
            <h3 className=" text-sm font-semibold ">
              Resolution : {product?.camera?.rear?.resolution}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Features : {product?.camera?.rear?.features}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Video Recording : {product?.camera?.rear?.videoRecording}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Front Camera</h1>
            <h3 className=" text-sm font-semibold ">
              Resolution : {product?.camera?.front?.resolution}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Video Recording : {product?.camera?.front?.videoRecording}
            </h3>
            <h1 className=" text-lg font-bold ">Audio</h1>
            <h3 className=" text-sm font-semibold ">
              Speaker :{product?.audio?.speaker}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Network & Connectivity</h1>
            <h3 className=" text-sm font-semibold ">
              SIM :{product?.networkConnectivity?.sim}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Network :{product?.networkConnectivity?.network}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Wi-Fi :{product?.networkConnectivity?.wifi}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Bluetooth :{product?.networkConnectivity?.bluetooth}
            </h3>
            <h3 className=" text-sm font-semibold ">
              GPS :{product?.networkConnectivity?.gps}
            </h3>
            <h3 className=" text-sm font-semibold ">
              NFC :{product?.networkConnectivity?.nfc}
            </h3>
            <h3 className=" text-sm font-semibold ">
              USB :{product?.networkConnectivity?.usb}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Audio Jack :{product?.networkConnectivity?.audioJack}
            </h3>
            <h1 className=" text-lg font-bold ">OS</h1>
            <h3 className=" text-sm font-semibold ">
              Operating System : {product?.os?.operatingSystem}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Upgradable : {product?.os?.upgradable}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Features</h1>
            <h3 className=" text-sm font-semibold ">
              Fingerprint : {product?.features?.fingerprint}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Sensors : {product?.features?.sensors}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Other Features : {product?.features?.other}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Battery</h1>
            <h3 className=" text-sm font-semibold ">
              Type : {product?.battery?.type}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Capacity : {product?.battery?.capacity}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Physical specification</h1>
            <h3 className=" text-sm font-semibold ">
              Dimension : {product?.physicalSpecification?.dimension}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Body Material : {product?.physicalSpecification?.bodyMaterial}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Weight : {product?.physicalSpecification?.weight}{" "}
            </h3>
            <h3 className=" text-sm font-semibold ">
              Colors : {product?.physicalSpecification?.colors}{" "}
            </h3>
            <h1 className=" text-lg font-bold ">Warranty Information</h1>
            <h3 className=" text-sm font-semibold ">
              Warranty : {product?.warrantyInformation?.warranty}{" "}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
