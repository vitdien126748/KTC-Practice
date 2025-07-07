import { IoCartOutline } from "react-icons/io5";
import styles from "./CartIcon.module.css";

type CartIconProps = {
  onClick: () => void;
  totalItem: number;
};

const CartIcon = ({ onClick, totalItem }: CartIconProps) => {
  return (
    <button className={styles.cartButton} onClick={onClick}>
      <span className={styles.icon}>
        <IoCartOutline />
      </span>
      <div className={styles.text}>
        <span>Giỏ hàng của bạn</span>
        <span>({totalItem}) sản phẩm</span>
      </div>
    </button>
  );
};

export default CartIcon;
