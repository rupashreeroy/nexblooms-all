import MilkItems from "./milk-items";
import PropTypes from "prop-types";
import styles from "./cart-details.module.css";

const CartDetails = ({ className = "" }) => {
  return (
    <div className={[styles.cartDetails, className].join(" ")}>
      <div className={styles.roadmapWrapper}>
        <div className={styles.roadmap}>
          <a className={styles.account}>Home</a>
          <img
            className={styles.roadmapDividerIcon}
            loading="lazy"
            alt=""
            src="/line-132.svg"
          />
          <div className={styles.nothing}>Top Cannabis Products</div>
          <img className={styles.roadmapChild} alt="" src="/line-144.svg" />
          <div className={styles.nothing1}>Product</div>
          <img className={styles.roadmapItem} alt="" src="/line-154.svg" />
          <div className={styles.nothing2}>View Cart</div>
          <img className={styles.roadmapInner} alt="" src="/line-164.svg" />
          <div className={styles.nothing3}>My Cart</div>
        </div>
      </div>
      <h3 className={styles.myCart}>My Cart</h3>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <MilkItems />
          <div className={styles.milkItems} />
          <MilkItems />
          <div className={styles.milkItems1} />
          <MilkItems />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.donationContent}>
              <div className={styles.donationHeader}>
                <div className={styles.donationTitle}>
                  <div className={styles.donationIcon}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <img
                        className={styles.donationHeartIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-82.svg"
                      />
                    </div>
                  </div>
                  <b className={styles.donation}>Donation</b>
                </div>
              </div>
              <div className={styles.readMore}>read more</div>
              <img
                className={styles.donationContentChild}
                loading="lazy"
                alt=""
                src="/group-1000006137.svg"
              />
            </div>
            <div className={styles.societyDetails}>
              <div className={styles.society}>Society</div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.familySupportProgram}>
                  Family Support Program
                </div>
                <div className={styles.programDetails}>
                  <div className={styles.programLocation}>$1</div>
                  <div className={styles.locationIconContainer}>
                    <img
                      className={styles.locationIconContainerChild}
                      alt=""
                      src="/polygon-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <b className={styles.orderDetails}>Order Details</b>
            <div className={styles.orderPricing}>
              <div className={styles.pricingItems}>
                <div className={styles.pricingLabels}>
                  <div className={styles.subtotal}>Subtotal</div>
                  <div className={styles.discount}>Discount</div>
                  <div className={styles.shippingCharge}>Shipping Charge</div>
                  <div className={styles.tax}>Tax</div>
                  <div className={styles.donationRow}>
                    <div className={styles.donation1}>Donation</div>
                    <div className={styles.removeDonation}>
                      <div className={styles.remove}>Remove</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pricingValues}>
                  <div className={styles.pricingValueList}>$576.00</div>
                  <div className={styles.pricingValueList1}>-$113.00</div>
                  <div className={styles.pricingValueList2}>$15.00</div>
                  <div className={styles.pricingValueList3}>$7.00</div>
                  <div className={styles.pricingValueList4}>$1.00</div>
                </div>
              </div>
              <div className={styles.subtotalRow}>
                <div className={styles.rowSeparator} />
                <div className={styles.subtotalValue}>
                  <div className={styles.subtotalAmount}>
                    <div className={styles.subTotal}>Sub Total</div>
                  </div>
                  <b className={styles.subtotalCalculated}>$487.00</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.proceedToCheckout}>Proceed to Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartDetails.propTypes = {
  className: PropTypes.string,
};

export default CartDetails;
