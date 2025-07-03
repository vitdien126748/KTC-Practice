import styles from "./News.module.css";

type NewsProps = {
  imgSrc: string;
  title: string;
  views: number;
};

const News = ({ imgSrc, title, views }: NewsProps) => {
  return (
    <div className={styles.news}>
      <img src={imgSrc} className={styles.image} />
      <span className={styles.title}>{title}</span>
      <span className={styles.views}>{views} lượt xem</span>
    </div>
  );
};

export default News;
