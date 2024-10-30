import PropTypes from "prop-types";
import styles from "./page-content.module.css";

const PageContent = ({ className = "" }) => {
  return (
    <div className={[styles.pageContent, className].join(" ")}>
      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutHeader}>
          <img
            className={styles.checkoutHeaderChild}
            loading="lazy"
            alt=""
            src="/line-133.svg"
          />
          <img
            className={styles.checkoutHeaderItem}
            loading="lazy"
            alt=""
            src="/line-165.svg"
          />
          <div className={styles.checkoutSteps}>
            <a className={styles.account}>Home</a>
            <div className={styles.myCart}>My Cart</div>
            <div className={styles.billingDetails}>Billing Details</div>
          </div>
        </div>
        <h3 className={styles.billingDetails1}>Billing Details</h3>
        <div className={styles.addressContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.chooseDeliveryAddress}>
              Choose Delivery Address
            </div>
            <div className={styles.addressDetails}>
              <div className={styles.addressSelection}>
                <div className={styles.addressPreview}>
                  <div className={styles.addressTypeIcon}>
                    <div className={styles.homeIcon} />
                    <div className={styles.workIcon} />
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.userNameAddress}>
                    <div className={styles.billToSujeetKumarSinghParent}>
                      <div className={styles.billToContainer}>
                        <span>{`Bill to : `}</span>
                        <span className={styles.sujeetKumarSingh}>
                          Sujeet Kumar Singh
                        </span>
                        <span className={styles.span}>{`  `}</span>
                      </div>
                      <div className={styles.frameParent}>
                        <div className={styles.frameWrapper}>
                          <img
                            className={styles.frameInner}
                            loading="lazy"
                            alt=""
                            src="/group-707.svg"
                          />
                        </div>
                        <div className={styles.phase2Industrial}>
                          Phase 2, Industrial Area, Sector 62, Ghaziabad, Uttar
                          Pradesh 201309, +91 9889653254
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-54.svg"
                  />
                </div>
              </div>
              <div className={styles.addressSelection1}>
                <div className={styles.addressSelectionInner}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.billToContainer1}>
                    <span>{`Bill to : `}</span>
                    <span className={styles.sujeetKumarSingh1}>
                      Sujeet Kumar Singh
                    </span>
                    <span className={styles.span1}>{`  `}</span>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group-707.svg"
                      />
                    </div>
                    <div className={styles.phase2Industrial1}>
                      Phase 2, Industrial Area, Sector 62, Ghaziabad, Uttar
                      Pradesh 201309, +91 9889653254
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.addressSeparatorParent}>
              <div className={styles.addressSeparator} />
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/group-1000005993.svg"
                />
                <div className={styles.addNewAddressWrapper}>
                  <div className={styles.addNewAddress}>Add New Address</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.couponContainer}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild3} />
              <b className={styles.applyCoupon}>Apply Coupon</b>
              <div className={styles.couponInputField}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <img
                    className={styles.couponIcon}
                    alt=""
                    src="/vector-63.svg"
                  />
                  <div className={styles.enterPromoCodeWrapper}>
                    <div className={styles.enterPromoCode}>
                      Enter promo code
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.apply}>Apply</div>
                </div>
              </div>
            </div>
            <div className={styles.orderSummaryContainer}>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild5} />
                <b className={styles.orderSummary}>Order Summary</b>
                <div className={styles.summary}>
                  <div className={styles.priceDetails}>
                    <div className={styles.subtotal}>Subtotal</div>
                    <div className={styles.discount}>{`Discount `}</div>
                    <div className={styles.charges}>
                      <div className={styles.chargeType}>
                        <div className={styles.shippingCharge}>
                          Shipping Charge
                        </div>
                        <div className={styles.tax}>Tax</div>
                      </div>
                      <div className={styles.donation}>
                        <div className={styles.donation1}>Donation</div>
                        <div className={styles.removeDonation}>
                          <div className={styles.remove}>Remove</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.subtotalValue}>
                    <div className={styles.valueWrapper}>$576.00</div>
                    <div className={styles.valueWrapper1}>-$113.00</div>
                    <div className={styles.totalValueWrapper}>
                      <div className={styles.totalValue}>
                        <div className={styles.value}>$15.00</div>
                        <div className={styles.value1}>$7.00</div>
                      </div>
                      <div className={styles.total}>$1.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalSeparatorParent}>
                  <div className={styles.totalSeparator} />
                  <div className={styles.totalWrapper}>
                    <div className={styles.totalContainer}>
                      <div className={styles.total1}>Total</div>
                    </div>
                    <b className={styles.totalAmount}>$487.00</b>
                  </div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.proceedToPayment}>
                  Proceed to Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
