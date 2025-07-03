import News from "../News";
import styles from "./NewsBoard.module.css";

const newsArray = [
  {
    imgSrc: "/Images/news1.jpg",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
    views: 140,
  },
  {
    imgSrc: "/Images/news2.jpg",
    title:
      "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
    views: 127,
  },
  {
    imgSrc: "/Images/news3.jpg",
    title:
      "Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720",
    views: 55,
  },
  {
    imgSrc: "/Images/news4.jpg",
    title:
      "Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
    views: 55,
  },
];

const NewsBoard = () => {
  return (
    <div className={styles.newsBoard}>
      <div className={styles.header}>
        <span className={styles.title}>TIN MỚI</span>
        <span className={styles.seeMore}>Xem thêm</span>
      </div>
      <div className={styles.newsList}>
        {newsArray.map((news, index) => (
          <News
            key={index}
            imgSrc={news.imgSrc}
            title={news.title}
            views={news.views}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
