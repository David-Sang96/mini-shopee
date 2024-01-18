import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="min-h-screen flex items-center justify-center md:items-start md:mt-20 px-4 bg-white">
      <div className="max-w-xl w-full rounded-lg shadow-xl p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <h3 className="font-semibold text-lg tracking-wide">
            There no items in your cart
          </h3>
          <p className="text-gray-500 my-1">
            Please choose any items and add to your cart for the payment.
          </p>
        </div>
        <div className="md:px-2 mt-3 md:mt-0 items-center flex">
          <Link
            to={"/"}
            className="flex items-center justify-center  bg-blue-600 hover:bg-blue-700 text-gray-100  py-2 rounded transition duration-150 space-x-3 w-40 md:w-36 mt-3 "
          >
            <div>Return Home</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
