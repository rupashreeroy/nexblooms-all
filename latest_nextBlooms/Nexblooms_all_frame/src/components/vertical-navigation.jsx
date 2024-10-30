import PropTypes from "prop-types";
import styles from "./vertical-navigation.module.css";

const VerticalNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.verticalNavigation, className].join(" ")}>
      <div className={styles.orderNavigationParent}>
        <div className={styles.orderNavigation}>
          <div className={styles.roadmap}>
            <a className={styles.account}>Home</a>
            <img
              className={styles.navigationSeparatorIcon}
              loading="lazy"
              alt=""
              src="/line-137.svg"
            />
            <div className={styles.nothing}>Top Cannabis Products</div>
            <img className={styles.roadmapChild} alt="" src="/line-148.svg" />
            <div className={styles.nothing1}>Product</div>
            <img className={styles.roadmapItem} alt="" src="/line-158.svg" />
            <div className={styles.nothing2}>View Cart</div>
            <img className={styles.roadmapInner} alt="" src="/line-1610.svg" />
            <div className={styles.nothing3}>Order History</div>
          </div>
        </div>
        <h3 className={styles.orderReturn}>Order Return</h3>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.orderDetailsContainer}>
            <div className={styles.orderReturnId123456789Parent}>
              <div className={styles.orderReturnIdContainer}>
                <span className={styles.orderReturnId}>
                  <span>{`Order Return ID `}</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.span1}>#</span>
                </span>
                <i className={styles.i}>{` `}</i>
                <b>123456789</b>
              </div>
              <div className={styles.returnIdSeparator} />
            </div>
            <div className={styles.orderDetailsContainerInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-9462@2x.png"
                  />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.returnRequestedParent}>
                    <div className={styles.returnRequested}>
                      Return Requested
                    </div>
                    <div className={styles.mon04042023Wrapper}>
                      <div className={styles.mon04042023}>Mon, 04-04-2023</div>
                    </div>
                  </div>
                  <div className={styles.returnApprovedParent}>
                    <div className={styles.returnApproved}>Return Approved</div>
                    <div className={styles.web05042023Wrapper}>
                      <div className={styles.web05042023}>Web, 05-04-2023</div>
                    </div>
                  </div>
                  <div className={styles.pickupStep}>
                    <div className={styles.pickedUp}>Picked Up</div>
                  </div>
                  <div className={styles.refundStep}>
                    <div className={styles.refundCredited}>Refund Credited</div>
                    <div className={styles.moneyIsCreditedContainer}>
                      <p className={styles.moneyIsCredited}>
                        Money is credited to the
                      </p>
                      <p className={styles.originalMode}>original mode</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderSummary}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.itemContainer}>
                <img
                  className={styles.itemContainerChild}
                  loading="lazy"
                  alt=""
                  src="/milk1@2x.png"
                />
              </div>
              <div className={styles.itemName}>
                <h3 className={styles.milk}>Milk</h3>
              </div>
              <div className={styles.itemDetails}>
                <div className={styles.itemQuantity}>
                  <div className={styles.quantityRow}>
                    <div className={styles.qty1Wrapper}>
                      <h3 className={styles.qty1}>Qty. 1</h3>
                    </div>
                    <div className={styles.quantityValue}>$192.00</div>
                  </div>
                  <div className={styles.orderActions}>
                    <div className={styles.button}>
                      <div className={styles.backToOrders}>Back to Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VerticalNavigation.propTypes = {
  className: PropTypes.string,
};

export default VerticalNavigation;
