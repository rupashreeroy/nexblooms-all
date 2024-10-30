import PropTypes from "prop-types";
import styles from "./cart-item-row.module.css";

const CartItemRow = ({ className = "", cartItemImage }) => {
  return (
    <div className={[styles.cartItemRow, className].join(" ")}>
      <img
        className={styles.cartItemImage}
        loading="lazy"
        alt=""
        src={cartItemImage}
      />
      <div className={styles.cartItemDescription}>
        <div className={styles.cartItemName}>
          <h3 className={styles.milk}>Milk</h3>
          <div className={styles.cartItemPrice}>
            <div className={styles.milkProductPrice}>$192.00</div>
            <div className={styles.cartItemQuantityAdjust}>
              <div className={styles.milkQuantityAdjust}>$199.00</div>
            </div>
          </div>
          <div className={styles.cartItemQuantity}>
            <div className={styles.milkQuantityInput}>
              <div className={styles.qty}>Qty.</div>
            </div>
            <div className={styles.quantityButtons}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.minusIcon}
                  loading="lazy"
                  alt=""
                  src="/add-to-cart-button-icon.svg"
                />
              </div>
            </div>
            <div className={styles.quantityValue}>
              <b className={styles.milkQuantityCount}>1</b>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <img
                className={styles.plusIcon}
                loading="lazy"
                alt=""
                src="/vector-37-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.removeItemIcon}
        loading="lazy"
        alt=""
        src="/vector-53.svg"
      />
    </div>
  );
};

CartItemRow.propTypes = {
  className: PropTypes.string,
  cartItemImage: PropTypes.string,
};

export default CartItemRow;
