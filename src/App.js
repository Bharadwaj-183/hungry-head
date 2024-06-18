import React , {useState} from "react";
import Header from "./Components/Layout/Header.js";
import AvailableMeals from "./Components/Meals/AvailableMeals.js";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider.js";
function App() {
  const [cartIsShown , setCartIsShown] = useState(false);

  function cartShowHandler () {
    setCartIsShown(true);
  }
  function cartHideHandler(){
    setCartIsShown(false);
  }

  return (
    <CartProvider>
    { cartIsShown  && <Cart onClose = {cartHideHandler}/>}
      <Header onShow = {cartShowHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
