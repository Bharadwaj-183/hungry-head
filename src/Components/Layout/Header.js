import React from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assests/meals.jpg";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Hungry Head</h1>
        <CartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
