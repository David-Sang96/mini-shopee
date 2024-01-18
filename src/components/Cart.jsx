import { useContext } from "react";
import { GiFruitBowl } from "react-icons/gi";
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { ItemContext } from "../store/itemContext";
import EmptyCart from "./EmptyCart";
import ReturnBtn from "./ReturnBtn";

const Cart = () => {
  const { items, totalAmount, removeItem, addItem } = useContext(ItemContext);
  const totalPrice = `${totalAmount.toFixed(2)}`;
  return (
    <div className=" p-5">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className=" space-y-2 grid max-h-[440px] overflow-scroll md:space-y-0 md:py-5 md:px-0 md:grid-cols-2 md:gap-3 md:h-auto  md:overflow-hidden ">
            {items.map((item) => (
              <div
                key={item.id}
                className="border px-3 py-2 shadow-lg rounded-lg space-y-2 md:py-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <GiFruitBowl className="text-lg text-[#fc5185]" />
                    <h3 className="text-xl font-bold text-[#88bef5]">
                      {item.name}
                    </h3>
                  </div>
                  <p>
                    <span className="text-md font-bold">Description : </span>
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <p className="">
                    <span className="text-md font-bold">Price</span> :{" "}
                    {item.price}$
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="md:text-xl">x {item.amount}</span>
                    <div className="flex items-start justify-center space-x-1">
                      <button
                        className="text-xl md:text-2xl outline-none"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <MdRemoveCircleOutline />
                      </button>
                      <button
                        className="text-xl md:text-2xl outline-none"
                        onClick={() => {
                          addItem({ ...item, amount: 1 });
                        }}
                      >
                        <MdOutlineAddCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className=" border-2 border-slate-300 mt-3 " />
          <div className="mt-1 ">
            <div className="text-lg font-bold md:text-xl">Total Price</div>
            <p className="md:text-lg font-bold">${totalPrice}</p>
          </div>
          <ReturnBtn />
        </>
      )}
    </div>
  );
};

export default Cart;
