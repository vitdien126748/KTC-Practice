import {useState} from 'react'
import styles from './HoverHighlight.module.css'

const HoverHighLight = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
  return (
    <div className={`${styles.hoverDiv} ${isHovered ? styles.hovered : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        Hover Me
    </div>
  )
}

export default HoverHighLight