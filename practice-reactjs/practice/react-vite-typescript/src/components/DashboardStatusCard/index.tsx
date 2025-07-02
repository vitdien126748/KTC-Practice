import styles from './DashboardStatusCard.module.css'
import { Ellipsis } from 'lucide-react';

const DashboardStatusCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.status}>
                <div style={{display:'flex',gap:8}}>
                    <span style={{fontSize:14,padding:'5px 8px',borderRadius:20,backgroundColor:'#E9FFEB'}}>Highlight</span>
                    <span style={{fontSize:14,padding:'5px 8px',borderRadius:20,backgroundColor:'#FDE3FF'}}>Feeds</span>
                </div>
                <Ellipsis/>
            </div>
            <div className={styles.board}>
                <span style={{fontSize:24,fontWeight:600}}>Dashboard</span>
                <span style={{fontSize:16,fontWeight:400,color:'#9AABB4'}}>Business management service</span>
            </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className={styles.bar}>
                <div style={{height: '100%', width:'80%',backgroundColor:'#8DD794',borderRadius:50}}></div>
            </div>
            <span>80%</span>
        </div>
    </div>
  )
}

export default DashboardStatusCard