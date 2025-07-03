import Product05 from "../Product05";
import styles from "./DealOfTheDay.module.css";

const products = [
    {
        imgSrc: "/Images/p1.jpg",
        title: "LG White Front Load Steam Washer",
        price: "1,422.7",
        saleOffPrice: "1,025.5",
        saleOffPercent: 18,
        isBestSale: true,
        ratingPercent: 80,
        sold: 100
    },
    {
        imgSrc: "/Images/p2.jpg",
        title: "Edifier Powered Bookshelf Speakers",
        price: "1,200.0",
        saleOffPrice: "900.0",
        saleOffPercent: 25,
        isBestSale: false,
        ratingPercent: 90,
        sold: 200
    },
    {
        imgSrc: "/Images/p3.jpg",
        title: "Amcrest Security Camera in White Color",
        price: "800.0",
        saleOffPrice: "600.0",
        saleOffPercent: 20,
        isBestSale: true,
        ratingPercent: 70,
        sold: 150
    },
    {
        imgSrc: "/Images/p4.jpg",
        title: "Grand Slam Indoor Of Show Jumping Novel",
        price: "1,500.0",
        saleOffPrice: "1,200.0",
        saleOffPercent: 20,
        isBestSale: false,
        ratingPercent: 85,
        sold: 300
    },
    {
        imgSrc: "/Images/p5.jpg",
        title: "Sound Intone 165 Earphone White",
        price: "950.0",
        saleOffPrice: "700.0",
        saleOffPercent: 26,
        isBestSale: true,
        ratingPercent: 75,
        sold: 250
    },
    {
        imgSrc: "/Images/p6.jpg",
        title: "Korea Long Sofa Fabric In Blue Navy Color",
        price: "1,100.0",
        saleOffPrice: "850.0",
        saleOffPercent: 23,
        isBestSale: false,
        ratingPercent: 65,
        sold: 180
    }
    
]

const DealOfTheDay = () => {
  return (
    <div className={styles.dealOfTheDay}>
      <div className={styles.header}>
        <div>
          <span className={styles.title}>Deal of the Day</span>
          <span className={styles.timer}>End in: 6:17:17:39</span>
        </div>
        <span className={styles.viewAll}>View All</span>
      </div>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <Product05 key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default DealOfTheDay;
