import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 10);
  // const numberOfCartItems = 12;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart Items</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
