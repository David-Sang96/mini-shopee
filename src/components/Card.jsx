/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { ItemContext } from "../store/itemContext";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;
  const { addItem } = useContext(ItemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmount > 5) {
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
      description,
    });
    setCurrentAmount(1);
  };

  return (
    <div className=" p-7 border-2 shadow-lg rounded-lg space-y-2 lg:space-y-4 lg:p-4">
      <div className="flex items-center space-x-1">
        <GiFruitBowl className="text-lg text-[#fc5185]" />
        <h3 className="text-xl font-bold text-[#88bef5]">{fruit.name}</h3>
      </div>
      <p>
        <span className="text-md font-bold">Description</span>:{" "}
        {fruit.description}
      </p>

      <div className="flex justify-between items-center ">
        <div className="flex space-x-3">
          <p className="text-md font-bold ">Price-</p>
          <p> {fruit.price}$</p>
        </div>

        <div className="flex justify-center items-center space-x-2 lg:w-full lg:justify-end ">
          <div>
            <input
              value={currentAmount}
              onChange={(e) => setCurrentAmount(e.target.value)}
              min="1"
              max="5"
              type="number"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60px] md:w-[150px] p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="pt-2">
            <button
              onClick={addToCartHandler}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center"
            >
              <IoMdAdd />
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
