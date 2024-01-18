/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const ItemContext = createContext();

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
      //findIndex return -1 if not found /if found return index number
    );
    const existItem = state.items[existingItemIndex];
    let updatedItems;
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.payload.amount,
      };
      updatedItems = state.items;
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.payload];
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount }; //must use return in reducer
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existItem.price;
    let updatedItems;
    if (existItem && existItem.amount > 1) {
      // If the item exists and its amount is greater than 1, reduce the amount
      const updatedItem = {
        ...existItem,
        amount: existItem.amount - 1,
      };
      updatedItems = state.items;
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // If the item doesn't exist or its amount is 1, remove it from the items array
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "CLEAR_ITEM") {
    return { items: [], totalAmount: 0 };
  }
  return state;
};

const ItemContextProvider = ({ children }) => {
  const [state, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };
  const clearItemHandler = () => {
    dispatchItem({ type: "CLEAR_ITEM" });
  };

  const contextValue = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export { ItemContext, ItemContextProvider };
