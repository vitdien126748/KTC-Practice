import styles from './MatchScoreCard.module.css'
import { Ellipsis } from 'lucide-react';

const MatchScoreCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <span className={styles.minute}>7'</span>
            <span><Ellipsis/></span>
        </div>
        <div className={styles.bot}>
            <span className={styles.team}>Spain <img src="/Flag/spain.jpg" style={{paddingLeft:8}} /></span>
            <span className={styles.score}>0 : 0</span>
            <span className={styles.team}><img src="/Flag/france.jpg" style={{paddingRight:8}} /> France</span>
        </div>
    </div>
  )
}

export default MatchScoreCard