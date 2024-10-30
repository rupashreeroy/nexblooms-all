import PropTypes from "prop-types";
import styles from "./milk-items.module.css";

const MilkItems = ({ className = "" }) => {
  return (
    <div className={[styles.milkItems, className].join(" ")}>
      <img
        className={styles.milkRowIcon}
        loading="lazy"
        alt=""
        src="/milk1@2x.png"
      />
      <div className={styles.milkDetails}>
        <div className={styles.milkName}>
          <h3 className={styles.milk}>Milk</h3>
          <div className={styles.milkPrice}>
            <div className={styles.milkOldPrice}>$192.00</div>
            <div className={styles.milkDiscount}>
              <div className={styles.milkDiscountPercentage}>$199.00</div>
            </div>
          </div>
          <div className={styles.milkQuantityParent}>
            <div className={styles.milkQuantity}>
              <div className={styles.qty}>Qty.</div>
            </div>
            <div className={styles.quantityControls}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/add-to-cart-button-icon.svg"
                />
              </div>
            </div>
            <div className={styles.milkTotal}>
              <b className={styles.milkTotalPrice}>1</b>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-37-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.milkSeparatorsIcon}
        loading="lazy"
        alt=""
        src="/vector-53.svg"
      />
    </div>
  );
};

MilkItems.propTypes = {
  className: PropTypes.string,
};

export default MilkItems;
