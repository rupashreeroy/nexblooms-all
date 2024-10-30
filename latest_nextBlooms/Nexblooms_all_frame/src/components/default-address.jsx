import PropTypes from "prop-types";
import styles from "./default-address.module.css";

const DefaultAddress = ({ className = "", group1000006418 }) => {
  return (
    <div className={[styles.defaultAddress, className].join(" ")}>
      <div className={styles.defaultAddressDetails}>
        <img
          className={styles.defaultAddressDetailsChild}
          loading="lazy"
          alt=""
          src={group1000006418}
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.savedAddressName}>
          <div className={styles.sujeetKumarSinghContainer}>
            <span className={styles.sujeetKumarSingh}>Sujeet Kumar Singh</span>
            <span className={styles.span}>{`  `}</span>
          </div>
          <div className={styles.contactAddress}>
            <div className={styles.addressIcon}>
              <img
                className={styles.addressIconChild}
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
            className={styles.editDefaultAddressIcon}
            alt=""
            src="/vector-54.svg"
          />
        </div>
      </div>
    </div>
  );
};

DefaultAddress.propTypes = {
  className: PropTypes.string,
  group1000006418: PropTypes.string,
};

export default DefaultAddress;
