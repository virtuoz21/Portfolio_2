import React, { Component } from "react";
import { TbTrashXFilled } from "react-icons/tb";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <TbTrashXFilled
          className="delete-item"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
