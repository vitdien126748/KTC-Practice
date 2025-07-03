import styles from "./Prod.module.css";

type ProdProps = {
  imgSrc: string;
  title: string;
  price: string;
  onClick?: () => void;
};

const Prod = ({
  imgSrc,
  title,
  price,
  onClick
}: ProdProps) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <button className={styles.delete} onClick={onClick}>X</button>
        <img src={imgSrc} className={styles.image} />
      </div>
      <span className={styles.title}>{title}</span>
      <div>
        <span className={styles.price}>{price}đ</span>
      </div>
    </div>
  );
};

export default Prod;
