import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ItemContext } from "../store/itemContext";

const ReturnBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const { clearItem } = useContext(ItemContext);
  const navigate = useNavigate();

  return (
    <div className="md:flex md:justify-between md:items-center md:mt-3 ">
      <div className="space-x-2 mt-3 mb-7 md:mt-0 md:mb-0">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded ease-in duration-300 "
          onClick={() => {
            navigate("/confirm");
          }}
        >
          Confirm Order
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded  ease-in duration-300 "
          onClick={() => setShowModal(true)}
        >
          Cancel
        </button>
      </div>

      {showModal && (
        <div className="bg-slate-800 min-h-screen bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 ">
          <div className="bg-white px-16 py-14 rounded-md text-center">
            <h1 className="text-xl mb-4 font-bold text-slate-500">
              Do you Want Cancel?
            </h1>
            <button
              className="bg-indigo-500 px-4 py-2 rounded-md text-md text-white"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              onClick={() => {
                setShowModal(false);
                clearItem();
                navigate("/");
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}

      <Link
        to={"/"}
        className="flex items-center justify-center  bg-blue-600 hover:bg-blue-700 text-gray-100  py-2 rounded transition duration-150 space-x-3 md:w-36 "
      >
        <div>Return Home</div>
      </Link>
    </div>
  );
};

export default ReturnBtn;
