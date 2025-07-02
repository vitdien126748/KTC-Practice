import styles from './CreditCardInfo.module.css'
import { RiVisaLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";

const CreditCardInfo = () => {
  return (
    <div className={styles.card}>
        <img className={styles.avt} src="/Avt/wade.jpg" alt="" />
        <div className={styles.info}>
            <span style={{fontSize:18,fontWeight:'bolder'}}>Wade Warren</span>
            <div className={styles.visa}>
                <span style={{display:'flex',alignItems:'center'}}><RiVisaLine style={{fontSize:33,color:'blue',paddingRight:10}}/> 4293 3242 ••••</span>
                <FaEyeSlash style={{fontSize:25}}/>
            </div>
        </div>
    </div>
  )
}

export default CreditCardInfo