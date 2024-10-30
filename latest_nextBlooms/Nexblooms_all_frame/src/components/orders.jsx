import PropTypes from "prop-types";
import styles from "./orders.module.css";

const Orders = ({ className = "" }) => {
  return (
    <div className={[styles.orders, className].join(" ")}>
      <div className={styles.orderHeaders}>
        <div className={styles.accountActions}>
          <div className={styles.accountButtons}>
            <div className={styles.accountDivider}>
              <div className={styles.lineParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/line-1611.svg"
                />
                <div className={styles.accountParent}>
                  <a className={styles.account}>Home</a>
                  <div className={styles.orders1}>Orders</div>
                </div>
              </div>
              <div className={styles.myOrder}>
                <div className={styles.myOrder1}>My Order</div>
                <div className={styles.deliveredOrdersContainer}>
                  <div className={styles.deliveredOrders}>Delivered Orders</div>
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.returnOrders}>Return Orders</div>
            </div>
            <div className={styles.actionButtons1}>
              <div className={styles.cancelOrders}>Cancel Orders</div>
            </div>
          </div>
          <div className={styles.screenshotDivider}>
            <div className={styles.screenshotDividerChild} />
            <div className={styles.screenshotDividerItem} />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.orderHeaderNames}>
            <img
              className={styles.orderHeaderNamesChild}
              loading="lazy"
              alt=""
              src="/milk8@2x.png"
            />
            <div className={styles.orderHeaderValues}>
              <div className={styles.orderValueContainerParent}>
                <div className={styles.orderValueContainer}>
                  <h3 className={styles.milk}>Milk</h3>
                  <div className={styles.qty1}>Qty. 1</div>
                </div>
                <div className={styles.emptyValue}>$192.00</div>
              </div>
              <div className={styles.orderId12529085267689043}>
                Order ID #12529085267689043
              </div>
            </div>
          </div>
          <div className={styles.dateOrderDetails}>
            <div className={styles.deliveryDateContainer}>
              <div className={styles.deliveryDate}>Delivery Date</div>
              <div className={styles.sep24}>29 Sep’24</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.viewOrderDetails}>View Order Details</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameParent}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/milk8@2x.png"
            />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.milkParent}>
                  <h3 className={styles.milk1}>Milk</h3>
                  <div className={styles.qty11}>Qty. 1</div>
                </div>
                <div className={styles.div}>$192.00</div>
              </div>
              <div className={styles.orderId125290852676890431}>
                Order ID #12529085267689043
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.deliveryDateParent}>
              <div className={styles.deliveryDate1}>Delivery Date</div>
              <div className={styles.sep241}>29 Sep’24</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <div className={styles.viewOrderDetails1}>View Order Details</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild2} />
          <div className={styles.frameParent1}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/milk8@2x.png"
            />
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.milkGroup}>
                  <h3 className={styles.milk2}>Milk</h3>
                  <div className={styles.qty12}>Qty. 1</div>
                </div>
                <div className={styles.div1}>$192.00</div>
              </div>
              <div className={styles.orderId125290852676890432}>
                Order ID #12529085267689043
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.deliveryDateGroup}>
              <div className={styles.deliveryDate2}>Delivery Date</div>
              <div className={styles.sep242}>29 Sep’24</div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild3} />
              <div className={styles.viewOrderDetails2}>View Order Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Orders.propTypes = {
  className: PropTypes.string,
};

export default Orders;
