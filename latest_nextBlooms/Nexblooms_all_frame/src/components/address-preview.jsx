import PropTypes from "prop-types";
import styles from "./address-preview.module.css";

const AddressPreview = ({ className = "", firstName, enterFirstName }) => {
  return (
    <div className={[styles.addressPreview, className].join(" ")}>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.enterFirstName}>{enterFirstName}</div>
      </div>
    </div>
  );
};

AddressPreview.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  enterFirstName: PropTypes.string,
};

export default AddressPreview;
