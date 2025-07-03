import styles from "./ViewedProduct.module.css";
import Prod from "../Prod";
import { useState } from "react";

const viewedProducts = [
    {
        id : 1,
        imgSrc: "/Images/product1.jpg",
        title: "Product Title",
        price: "100000"
    },
    {
        id : 2,
        imgSrc: "/Images/product2.jpg",
        title: "Product Title 2",
        price: "200000"
    },
    {
        id : 3,
        imgSrc: "/Images/product3.jpg",
        title: "Product Title 3",
        price: "300000"
    },
    {
        id : 4,
        imgSrc: "/Images/product4.jpg",
        title: "Product Title 4",
        price: "400000"
    }
]
const ViewedProduct = () => {
    const [products, setProducts] = useState(viewedProducts);
    const handleDelete = (id: number) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

  return (
    <div className={styles.viewedProduct}>
      <div className={styles.header}>
        <h2>Sản phẩm đã xem</h2>
        <button className={styles.clearAll} onClick={() => setProducts([])}>
          Xoá tất cả
        </button>
      </div>
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <Prod
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            onClick={() => handleDelete(products[index].id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ViewedProduct