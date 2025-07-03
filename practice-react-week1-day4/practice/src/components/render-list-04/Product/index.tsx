  import styles from "./Product.module.css";

type ProductProps = {
  imgSrc: string;
  title: string;
  price: string;
  saleOffPrice?: string;
  isSaleOff?: boolean;
  saleOffPercentage?: number;
};

const Product = ({
  imgSrc,
  title,
  price,
  saleOffPrice,
  isSaleOff = false,
  saleOffPercentage,
}: ProductProps) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        {isSaleOff && (
          <div className={styles.saleOffTag}>{saleOffPercentage}%</div>
        )}
        <img src={imgSrc} className={styles.image} />
      </div>
      <span className={styles.title}>{title}</span>
      <div>
        <span className={styles.price}>{price}đ</span>
        {isSaleOff && (
          <span className={styles.saleOffPrice}>{saleOffPrice}đ</span>
        )}
      </div>
    </div>
  );
};

export default Product;
