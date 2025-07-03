import styles from "./ScheduleDetailCard.module.css";
import Weather from "../Weather";
import { BsThreeDots } from "react-icons/bs";

type TScheduleDetailCardProps = {
  title: string;
  subtitle: string;
};

const ScheduleDetailCard = ({ title, subtitle }: TScheduleDetailCardProps) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: 8,
          gap: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontWeight: "bolder", fontSize: 16 }}>{title}</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BsThreeDots />
          </span>
        </div>
        <span style={{ fontSize: 13, color: "#60747E" }}>{subtitle}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Weather
            weatherImgSrc="/Icon/cloud-with-lightning-and-rain.jpg"
            day="Mon"
          />
          <span className={styles.time}>02:27 PM</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Weather weatherImgSrc="/Icon/sun-behind-cloud.jpg" day="Tue" />
          <span className={styles.time}>06:00 AM</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Weather weatherImgSrc="/Icon/sun.jpg" day="Wed" />
          <span className={styles.time}>07:30 PM</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Weather weatherImgSrc="/Icon/sun-behind-rain-cloud.jpg" day="Thu" />
          <span className={styles.time}>12:00 PM</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Weather weatherImgSrc="/Icon/sun-behind-cloud.jpg" day="Fri" />
          <span className={styles.time}>04:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetailCard;
