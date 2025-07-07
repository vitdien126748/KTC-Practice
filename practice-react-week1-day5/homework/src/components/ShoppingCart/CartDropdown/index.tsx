import styles from "./CartDropdown.module.css";
import React from "react";
import { DropdownContext, CartContext, type CartItem } from "../Context";

type CartDropdownProps = {
  cartItems: CartItem[];
};

const CartDropdown = ({ cartItems }: CartDropdownProps) => {
  const isDropdownOpen = React.useContext(DropdownContext);
  const cartContext = React.useContext(CartContext);
  if (!isDropdownOpen) {
    return null;
  }

  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyMessage}>Giỏ hàng trống</div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <span className={styles.itemName}>
                <button
                  className={styles.removeButton}
                  onClick={() => cartContext.removeAllQuantityFromCart(item.id)}
                >
                  X
                </button>
                {item.name}
              </span>
              <span className={styles.itemPrice}>
                {item.quantity} x {item.price.toLocaleString()}₫
              </span>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className={styles.totalPrice}>
          <span>Tổng cộng:</span>
          <span className={styles.totalAmount}>
            {cartItems
              .reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0
              )
              .toLocaleString()}
            ₫
          </span>
        </div>
      )}
      <button className={styles.viewCartButton}>Xem giỏ hàng</button>
    </div>
  );
};

export default CartDropdown;
