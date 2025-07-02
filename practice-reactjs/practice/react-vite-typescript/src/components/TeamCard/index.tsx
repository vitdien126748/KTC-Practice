import styles from './TeamCard.module.css'
import { Ellipsis } from 'lucide-react';

const TeamCard = () => {
  return (
    <div className={styles.card}>
        <span className={styles.team}><img src="/Flag/mu.jpg" style={{paddingRight:10}} />Manchester United</span>
        <Ellipsis/>
    </div>
  )
}

export default TeamCard