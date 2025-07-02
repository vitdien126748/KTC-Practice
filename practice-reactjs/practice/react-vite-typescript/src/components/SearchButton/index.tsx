import styles from './SearchButton.module.css'

type TSearchButtonProps = {
    text? : string;
    leftIcon? : React.ReactNode;
    rightIcon? : React.ReactNode
    type? : 'placeholder' | 'text'
}

const SearchButton = ({text, leftIcon, rightIcon, type = 'placeholder'} : TSearchButtonProps) => {
  return (
    <button className={styles.button}><span>{leftIcon} <span className={type === 'text' ? styles.text : styles.placeholder}>{text}</span></span> {rightIcon}</button>
  )
}

export default SearchButton