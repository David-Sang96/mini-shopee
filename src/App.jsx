import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";
import Main from "./layout/Main";

function App() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition timeout={200} key={location.pathname} classNames={"fade"}>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<ConfirmOrder />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
