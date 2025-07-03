import styles from "./DropDownFilter.module.css";
import ButtonFilter from "../ButtonFilter";
import { useState } from "react";

const options = [
  "Sản phẩm nổi bật",
  "Giá từ thấp đến cao",
  "Giá từ cao đến thấp",
]

const buttonList = [
    {
        label: "Bộ nhớ trong"
    },
    {
        label: "Sắp xếp"
    }
]

const DropDownFilter = () => {
  const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!open);
    }
  return (
    <div className={styles.dropDownFilter}>
      {buttonList.map((button, index) => (
        <ButtonFilter key={index} label={button.label} onClick={toggleDropdown} />
      ))}
      {open && (
        <div className={styles.dropDownContent}>
          {options.map((option, index) => (
            <div key={index} className={styles.dropDownItem}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDownFilter