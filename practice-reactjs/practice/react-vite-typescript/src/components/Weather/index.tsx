import styles from './Weather.module.css';

type TWeatherProps = {
  weatherImgSrc: string;
  day: string;
}

const Weather = ({ weatherImgSrc, day }: TWeatherProps) => {
  return (
    <div className={styles.weather}>
        <img className={styles.weatherImg} src={weatherImgSrc} />
        <span className={styles.day}>{day}</span>
        
    </div>
  )
}

export default Weather