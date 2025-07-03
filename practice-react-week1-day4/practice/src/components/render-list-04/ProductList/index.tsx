import Product from "../Product";
import styles from "./ProductList.module.css";

const productListData = [
  {
    imgSrc: "/Images/product1.jpg",
    title: "Cáp chuyển đổi USB-C sang SD",
    price: "1.290.000",
    isSaleOff: true,
    saleOffPrice: "1.000.000",
    saleOffPercentage: -25,
  },
  {
    imgSrc: "/Images/product2.jpg",
    title: "Adapter sạc Apple Type C 20W",
    price: "2.500.000",
    isSaleOff: false,
  },
  {
    imgSrc: "/Images/product3.jpg",
    title: "Cáp sạc Lightning 2m",
    price: "3.000.000",
    isSaleOff: false,
  },
  {
    imgSrc: "/Images/product4.jpg",
    title: "AirPods 3",
    price: "1.800.000",
    isSaleOff: true,
    saleOffPrice: "1.500.000",
    saleOffPercentage: -20,
  },
];
const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      <span className={styles.header}>Phụ kiện tương thích</span>
      <div className={styles.productList}>
        {productListData.map((product, index) => (
          <Product
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            isSaleOff={product.isSaleOff}
            saleOffPrice={product.saleOffPrice}
            saleOffPercentage={product.saleOffPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
