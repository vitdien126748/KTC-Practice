import styles from './Paragraph.module.css'

type ParagraphProps = {
    content: string;
}

const Paragraph = ({content}: ParagraphProps) => {
  return (
    <p className={styles.paragraph}>{content}</p>
  )
}

export default Paragraph