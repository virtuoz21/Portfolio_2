import React, { useState } from "react";
import Icon from "./../../img/basket.png";
import Order from "./Order";

const showOrders = props => {
  let sum = 0;
  props.orders.forEach(el => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="sum">Total:{new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>The basket is empty 😢</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About Us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <img
          className={`shop-basket ${cartOpen && "active"}`}
          onClick={() => setCartOpen(!cartOpen)}
          src={Icon}
          alt="Basket"
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
