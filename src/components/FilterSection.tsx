import { useDispatch } from "react-redux";
import { tagSelect } from "../redux/api/filterSlice";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
const FilterSection = () => {
  const dispatch = useDispatch();
  const { tags } = useAppSelector((state: RootState) => state.filter);

  return (
    <div className=" px-2 h-auto  ">
      <div className="flex flex-wrap gap-2 py-3 ">
        <button
          onClick={() => dispatch(tagSelect(""))}
          className={`${
            tags === "" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          All
        </button>
        <button
          onClick={() => dispatch(tagSelect("Apple"))}
          className={`${
            tags === "Apple" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Apple
        </button>
        <button
          onClick={() => dispatch(tagSelect("Samsung"))}
          className={`${
            tags === "Samsung" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Samsung
        </button>
        <button
          onClick={() => dispatch(tagSelect("Google"))}
          className={`${
            tags === "Google" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Google
        </button>
        <button
          onClick={() => dispatch(tagSelect("Motorola"))}
          className={`${
            tags === "Motorola" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Motorola
        </button>
        <button
          onClick={() => dispatch(tagSelect("OnePlus"))}
          className={`${
            tags === "OnePlus" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          OnePlus
        </button>
        <button
          onClick={() => dispatch(tagSelect("OPPO"))}
          className={`${
            tags === "OPPO" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          OPPO
        </button>
        <button
          onClick={() => dispatch(tagSelect("Vivo"))}
          className={`${
            tags === "Vivo" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Vivo
        </button>
        <button
          onClick={() => dispatch(tagSelect("Realme"))}
          className={`${
            tags === "Realme" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Realme
        </button>
        <button
          onClick={() => dispatch(tagSelect("Xiaomi"))}
          className={`${
            tags === "Xiaomi" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Xiaomi
        </button>
        <button
          onClick={() => dispatch(tagSelect("POCO"))}
          className={`${
            tags === "POCO" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          POCO
        </button>
        <button
          onClick={() => dispatch(tagSelect("HUAWEI"))}
          className={`${
            tags === "HUAWEI" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          HUAWEI
        </button>
        <button
          onClick={() => dispatch(tagSelect("Nokia"))}
          className={`${
            tags === "Nokia" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          Nokia
        </button>
        <button
          onClick={() => dispatch(tagSelect("TCL"))}
          className={`${
            tags === "TCL" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          TCL
        </button>
        <button
          onClick={() => dispatch(tagSelect("HONOR"))}
          className={`${
            tags === "HONOR" && "bg-blue-500"
          }  px-4 py-2 text-sm outline outline-1 hover:bg-blue-500 hover:text-white duration-300 outline-violet-300 rounded-full `}
        >
          HONOR
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
