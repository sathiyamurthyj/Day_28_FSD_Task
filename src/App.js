import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { CartProvider } from './cartContext';
import CartSummary from "./components/cartSummary";


function App() {
  return (
    <>
      <CartProvider>
        <CartSummary />
      </CartProvider>
    </>
  );
}

export default App;
