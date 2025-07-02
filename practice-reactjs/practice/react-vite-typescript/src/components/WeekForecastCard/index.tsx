import styles from './WeekForecastCard.module.css';
import Weather from '../Weather';



const WeekForecastCard = () => {
  return (
    <div className={styles.card}>
        <Weather weatherImgSrc="/Icon/cloud-with-lightning-and-rain.jpg" day="Mon" />
        <Weather weatherImgSrc="/Icon/sun-behind-cloud.jpg" day="Tue" />
        <Weather weatherImgSrc="/Icon/sun.jpg" day="Wed" />
        <Weather weatherImgSrc="/Icon/sun-behind-rain-cloud.jpg" day="Thu" />
        <Weather weatherImgSrc="/Icon/sun-behind-cloud.jpg" day="Fri" />
    </div>
  )
}

export default WeekForecastCard