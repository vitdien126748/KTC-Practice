import styles from './LocationCard.module.css';

type TLocationCardProps = {
    imgSrc: string;
    locationName: string;
    locationInfo: string;
    icon: React.ReactNode;
    bgColor?: string;
}

const LocationCard = ({ bgColor, imgSrc, locationName, locationInfo, icon }: TLocationCardProps) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',columnGap: 12}}>
            <img src={imgSrc} style={{borderRadius: 50}} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontWeight: 'bolder',fontSize: 16}}>{locationName}</span>
                <span style={{fontWeight: 'bold',fontSize: 13}}>{locationInfo}</span>
            </div>
        </div>
        <span style={{width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
    </div>
  )
}

export default LocationCard