import PropTypes from "prop-types";
import styles from "./product-row.module.css";

const ProductRow = ({ className = "", productContainer, ghee }) => {
  return (
    <div className={[styles.productRow, className].join(" ")}>
      <img
        className={styles.productContainerIcon}
        loading="lazy"
        alt=""
        src={productContainer}
      />
      <div className={styles.productCard}>
        <b className={styles.ghee}>{ghee}</b>
        <div
          className={styles.duisAuctorAt}
        >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
        <div className={styles.productDetails}>
          <div className={styles.placeholder}>$79.00</div>
          <div className={styles.rating}>
            <div className={styles.starIcons}>$99.00</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.viewDetails}>View Details</b>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  className: PropTypes.string,
  productContainer: PropTypes.string,
  ghee: PropTypes.string,
};

export default ProductRow;
