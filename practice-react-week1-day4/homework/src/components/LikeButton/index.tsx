import { TbThumbUp } from "react-icons/tb";
import styles from "./LikeButton.module.css";
import { useState } from "react";

type LikeButtonProps = {
  onClick?: () => void;
};

const LikeButton = ({ onClick }: LikeButtonProps) => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
        if (onClick) {
            onClick();
        }
    };
    return (
        <div className={styles.likeButtonContainer}>
            <button className={styles.likeButton} style={{ color: liked ? 'blue' : 'black' }} onClick={handleClick}><TbThumbUp /></button>
            <span className={styles.likeText}>{liked ? 'Thank you !' : 'Click like if this post is useful to you!'}</span>
        </div>
  )
}

export default LikeButton