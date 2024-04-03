import classes from "./shopItemClass.module.css";
import { Component } from "react";
export class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className={classes["main-content"]}>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className={classes.description}>{descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className={classes["divider"]}></div>
        <div className={classes["purchase-info"]}>
          <div className={classes.price}>
            {currency}
            {price.toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
