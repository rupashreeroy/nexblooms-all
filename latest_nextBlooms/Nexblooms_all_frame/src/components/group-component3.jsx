import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./group-component3.module.css";

const GroupComponent3 = ({
  className = "",
  categories,
  dispensaries,
  cultivation,
  manufacturing,
  deliveries,
  brands,
  propFlex,
  propMinWidth,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.categoriesParent}>
        <div className={styles.categories}>{categories}</div>
        <div className={styles.categoryIcon}>
          <img
            className={styles.categoryIconChild}
            alt=""
            src="/home-link-icon.svg"
          />
        </div>
      </div>
      <div className={styles.dispensariesParent}>
        <div className={styles.dispensaries}>{dispensaries}</div>
        <div className={styles.cultivation}>{cultivation}</div>
        <div className={styles.manufacturing}>{manufacturing}</div>
        <div className={styles.deliveries}>{deliveries}</div>
        <div className={styles.brands}>{brands}</div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.string,
  dispensaries: PropTypes.string,
  cultivation: PropTypes.string,
  manufacturing: PropTypes.string,
  deliveries: PropTypes.string,
  brands: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent3;
