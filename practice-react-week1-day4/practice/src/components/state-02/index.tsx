import styles from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = () => {
    const [rating, setRating] = useState(0);
  return (
    <div className={styles.rating}>
        <span className={styles.label}>Chọn đánh giá của bạn</span>
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <span key={index} className={`${styles.star} ${rating >= item ? styles.checked : ""}`} onClick={() => setRating(item)}><FaStar /></span>
          )
        })}
      </div>
      <span className={`${styles.ratingLevel} ${rating < 3 ? styles.bad : rating < 4 ? styles.normal : styles.good}`}>{rating < 3 ? "Tệ" : rating < 4 ? "Bình thường" : "Tốt"}</span>
    </div>
  )
}

export default Rating