import styles from "./ColorButton.module.css";

type ColorButtonProps = {
  colorName: string;
  isActive?: boolean;
  onClick?: () => void;
};

const ColorButton = ({
  colorName,
  isActive = false,
  onClick,
}: ColorButtonProps) => {
  return (
    <button
      className={styles.colorButton}
      style={{ border: isActive ? "2px solid orange" : "none" }}
      onClick={onClick}
    >
      {colorName}
    </button>
  );
};

export default ColorButton;
