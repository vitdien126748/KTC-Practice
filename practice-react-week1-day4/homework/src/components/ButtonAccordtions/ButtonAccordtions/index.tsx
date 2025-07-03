import styles from './ButtonAccordtions.module.css'
import Btn from '../Btn'
import Paragraph from '../Pg'
import { useState } from 'react'

const labels = [
    "HISTORY",
    "APPROACH",  
    "CULTURE",
    "METHOD",
]
const contents = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
]


const ButtonAccordions = () => {
  const [activeTabs, setActiveTabs] = useState<number[]>([]);
    const handleAccordionClick = (index: number) => {
        setActiveTabs((prev) => {
        if (prev.includes(index)) {
            return prev.filter((tabIndex) => tabIndex !== index);
        } else {
            return [...prev, index];
        }
        });
    };
  return (
    <div className={styles.buttonAccordionsContainer}>
      {labels.map((label, index) => (
        <div key={index} className={styles.accordionItem}>
          <Btn label={label} onClick={() => handleAccordionClick(index)} isActive={activeTabs.includes(index)} />
          {activeTabs.includes(index) && <Paragraph content={contents[index]} />}
        </div>
      ))}
    </div>
  )
}

export default ButtonAccordions