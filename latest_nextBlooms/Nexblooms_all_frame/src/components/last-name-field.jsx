import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./last-name-field.module.css";

const LastNameField = ({
  className = "",
  lastName,
  enterLastName,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propHeight,
}) => {
  const lastNameFieldStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propHeight]);

  return (
    <div
      className={[styles.lastNameField, className].join(" ")}
      style={lastNameFieldStyle}
    >
      <div className={styles.lastName}>{lastName}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.enterLastName}>{enterLastName}</div>
      </div>
    </div>
  );
};

LastNameField.propTypes = {
  className: PropTypes.string,
  lastName: PropTypes.string,
  enterLastName: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
};

export default LastNameField;
