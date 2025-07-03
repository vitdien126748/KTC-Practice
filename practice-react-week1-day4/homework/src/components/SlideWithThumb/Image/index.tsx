import styles from "./Image.module.css";

type ImageProps = {
    src: string;
    isSelected?: boolean;
    onClick?: () => void;
};

const Image = ({src, isSelected, onClick}: ImageProps) => {
  return (
    <img src={src} className={`${styles.image} ${isSelected ? styles.selected : ''}`} onClick={onClick} />
  )
}

export default Image