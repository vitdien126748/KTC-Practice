import ColorButton from "../ColorButton";
import styles from "./ButtonGroup.module.css";
import React from "react";

const buttonList = [
  { colorName: "Đen" },
  { colorName: "Hồng" },
  { colorName: "Xanh" },
];

const ButtonGroup = () => {
  const [active, setActive] = React.useState(-1);
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className={styles.buttonGroupContainer}>
      <span>Màu:</span>
      <div className={styles.buttonList}>
        {buttonList.map((button, index) => (
          <ColorButton
            key={button.colorName}
            colorName={button.colorName}
            isActive={active === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
