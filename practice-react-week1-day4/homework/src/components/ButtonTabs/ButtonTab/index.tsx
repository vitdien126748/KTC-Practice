import styles from './ButtonTab.module.css'
import Button from '../Button'
import Paragraph from '../Paragraph'
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

const ButtonTab = () => {
  const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

  return (
    <div className={styles.buttonTabContainer}>
      <div className={styles.buttonContainer}>
        {labels.map((label, index) => (
          <Button key={index} label={label} onClick={() => handleTabClick(index)} isActive={activeTab === index} />
        ))}
      </div>
      <div className={styles.contentContainer}>
        <Paragraph content={contents[activeTab]} />
      </div>
    </div>
  )
}

export default ButtonTab