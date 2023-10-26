import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsHome from "./pages/products/home/products-home";
import Configuration from "./pages/products/credits/payments/lbr/configuration/configuration";
import Verification from "./pages/products/credits/payments/lbr/verification/verification";
import Confirmation from "./pages/products/credits/payments/lbr/confirmation/confirmation";
import LbrDetails from "./pages/products/credits/details/lbr/lbr-details";
import LoginApp from "./pages/home/login/login";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginApp />}></Route>

        <Route
          path="/products/home"
          element={<ProductsHome />}
        ></Route>
        <Route
          path="/products/credits/details/lbr"
          element={<LbrDetails />}
        ></Route>

        <Route
          path="/products/credits/payments/lbr/configuration"
          element={<Configuration />}
        ></Route>
        <Route
          path="/products/credits/payments/lbr/verification"
          element={<Verification />}
        ></Route>
        <Route
          path="/products/credits/payments/lbr/confirmation"
          element={<Confirmation />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
