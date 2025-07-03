import styles from './ImageSlider.module.css'
import Image from '../Image'
import { useState } from 'react'

const src = [
    '/Images/p1.jpg',
    '/Images/p2.jpg',
    '/Images/p3.jpg',
    '/Images/p4.jpg',
    '/Images/p5.jpg',
    '/Images/p6.jpg'
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
    const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + src.length) % src.length)
        }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % src.length)
    }
  return (
    <div className={styles.slider}>
        <div className={styles.sliderControls}>
            <button className={styles.button} onClick={handlePrev}>Previous</button>
            <img src={src[currentIndex]} className={styles.mainImage} />
            <button className={styles.button} onClick={handleNext}>Next</button>
        </div>
        <div className={styles.thumbnails}>
            {src.map((image, index) => (
                <Image key={index} src={image} isSelected={index === currentIndex} onClick={() => setCurrentIndex(index)} />
            ))}
        </div>
    </div>
  )
}

export default ImageSlider