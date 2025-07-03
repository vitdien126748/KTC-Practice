import styles from "./Product05.module.css";

type Product05Props = {
  imgSrc: string;
  title: string;
  price: string;
  saleOffPrice?: string;
  saleOffPercent?: number;
  isBestSale?: boolean;
  ratingPercent: number;
  sold: number;
};

const Product05 = ({
  imgSrc,
  title,
  price,
  saleOffPrice,
  saleOffPercent,
  isBestSale = false,
  ratingPercent,
  sold
}: Product05Props) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        {isBestSale && (
          <div className={styles.bestSaleTag}>Bán chạy</div>
        )}
        <img src={imgSrc} className={styles.image} />
      </div>
      <span className={styles.shopName}>YOUNG SHOP</span>
      <div className={styles.priceContainer}>
        <span className={styles.price}>${price}</span>
        <span className={styles.saleOffPrice}>${saleOffPrice}</span>
        <span className={styles.saleOffPercent}>{saleOffPercent}% off</span>
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.rating}>⭐⭐⭐⭐⭐</span>
      <div className={styles.ratingBar}>
        <div className={styles.fill} style={{width: `${ratingPercent}%`}}></div>
      </div>
      <div className={styles.sold}>Sold: {sold}</div>
    </div>
  );    
};

export default Product05;
