import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ItemContextProvider } from "./store/itemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ItemContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ItemContextProvider>
);
