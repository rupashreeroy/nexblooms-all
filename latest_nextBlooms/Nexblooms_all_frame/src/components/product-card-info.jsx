import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./product-card-info.module.css";

const ProductCardInfo = ({ className = "", frame62527, cumin, propWidth }) => {
  const productCardInfoStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.productCardInfo, className].join(" ")}
      style={productCardInfoStyle}
    >
      <img
        className={styles.productCardInfoChild}
        loading="lazy"
        alt=""
        src={frame62527}
      />
      <div className={styles.cuminParent}>
        <b className={styles.cumin}>{cumin}</b>
        <div
          className={styles.duisAuctorAt}
        >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
        <div className={styles.parent}>
          <div className={styles.div}>$79.00</div>
          <div className={styles.wrapper}>
            <div className={styles.div1}>$99.00</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.moveToCart}>Move to Cart</b>
      </div>
    </div>
  );
};

ProductCardInfo.propTypes = {
  className: PropTypes.string,
  frame62527: PropTypes.string,
  cumin: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default ProductCardInfo;
