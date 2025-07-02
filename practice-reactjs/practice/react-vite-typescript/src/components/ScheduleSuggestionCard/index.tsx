import type React from 'react';
import styles from './ScheduleSuggestionCard.module.css';

type TScheduleSuggestionCardProps = {
    leftIcon?: React.ReactNode;
    title: string;
    subtitle: string;
    rightIcon: React.ReactNode;
    bgColor?: string;
}


const ScheduleSuggestionCard = ({ bgColor, title, subtitle, leftIcon, rightIcon }: TScheduleSuggestionCardProps) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: 24}}>
            <span style={{fontSize:36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{leftIcon}</span>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                <span style={{fontWeight: 'bolder',fontSize: 14}}>{title}</span>
                <span style={{fontSize: 13, color: '#60747E'}}>{subtitle}</span>
            </div>
        </div>
        <span style={{fontSize:36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{rightIcon}</span>
    </div>
  )
}

export default ScheduleSuggestionCard