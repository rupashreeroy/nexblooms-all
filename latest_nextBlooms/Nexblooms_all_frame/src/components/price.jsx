import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./price.module.css";

const Price = ({ className = "", off, propAlignSelf, propWidth }) => {
  const priceStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={[styles.price, className].join(" ")} style={priceStyle}>
      <div className={styles.discount}>
        <img className={styles.discountChild} alt="" src="/rectangle-3.svg" />
        <b className={styles.off}>{off}</b>
      </div>
      <img
        className={styles.priceSeparatorIcon}
        loading="lazy"
        alt=""
        src="/vector-611.svg"
      />
      <div className={styles.originalPrice}>
        <img
          className={styles.originalPriceChild}
          loading="lazy"
          alt=""
          src="/group-1000005959.svg"
        />
      </div>
    </div>
  );
};

Price.propTypes = {
  className: PropTypes.string,
  off: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Price;
