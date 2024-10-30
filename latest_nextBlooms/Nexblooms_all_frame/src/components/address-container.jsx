import PropTypes from "prop-types";
import styles from "./address-container.module.css";

const AddressContainer = ({ className = "", group1000006418 }) => {
  return (
    <div className={[styles.addressContainer, className].join(" ")}>
      <div className={styles.addressContent}>
        <img
          className={styles.addressContentChild}
          alt=""
          src={group1000006418}
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.nameAndLocation}>
          <div className={styles.sujeetKumarSinghContainer}>
            <span className={styles.sujeetKumarSingh}>Sujeet Kumar Singh</span>
            <span className={styles.span}>{`  `}</span>
          </div>
          <div className={styles.userAddressDetailsContainer}>
            <div className={styles.userAddressAreaContainer}>
              <img
                className={styles.userAddressAreaContainerChild}
                loading="lazy"
                alt=""
                src="/group-707.svg"
              />
            </div>
            <div className={styles.phase2Industrial}>
              Phase 2, Industrial Area, Sector 62, Ghaziabad, Uttar Pradesh
              201309, +91 9889653254
            </div>
          </div>
        </div>
        <div className={styles.editAddressIcon}>
          <img
            className={styles.editAddressButton}
            loading="lazy"
            alt=""
            src="/vector-54.svg"
          />
        </div>
      </div>
    </div>
  );
};

AddressContainer.propTypes = {
  className: PropTypes.string,
  group1000006418: PropTypes.string,
};

export default AddressContainer;
