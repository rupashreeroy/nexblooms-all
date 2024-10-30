import Price from "./price";
import Price1 from "./price1";
import PropTypes from "prop-types";
import styles from "./items.module.css";

const Items = ({ className = "" }) => {
  return (
    <section className={[styles.items, className].join(" ")}>
      <div className={styles.itemsChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.topDiscountDealsParent}>
            <h3 className={styles.topDiscountDeals}>Top Discount Deals</h3>
            <img
              className={styles.discountDealsViewMoreIcon}
              alt=""
              src="/vector-3-1.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.viewAllParent}>
              <b className={styles.viewAll}>View All</b>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.iconWrapperChild}
                  alt=""
                  src="/vector-41.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.cardContent}>
            <div className={styles.productInfo}>
              <Price off="10% off" />
              <div className={styles.productName}>
                <b className={styles.milk1Bottle}>Milk(1 bottle)</b>
                <div
                  className={styles.duisAuctorAt}
                >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                <div className={styles.ratings}>
                  <div className={styles.stars}>$79.00</div>
                  <div className={styles.ratingCount}>
                    <div className={styles.number}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <b className={styles.viewDetails}>View Details</b>
              </div>
            </div>
          </div>
          <div className={styles.productCard1}>
            <div className={styles.cardContent1}>
              <div className={styles.productInfo1}>
                <div className={styles.price}>
                  <div className={styles.discount}>
                    <img
                      className={styles.discountChild}
                      alt=""
                      src="/rectangle-3.svg"
                    />
                    <b className={styles.off}>15% off</b>
                  </div>
                  <img
                    className={styles.priceSeparatorIcon}
                    alt=""
                    src="/vector-611.svg"
                  />
                  <div className={styles.originalPrice}>
                    <img
                      className={styles.originalPriceChild}
                      alt=""
                      src="/group-1000005959.svg"
                    />
                  </div>
                </div>
                <Price1 frame62527="/green-tea1@2x.png" />
                <img
                  className={styles.priceIcon}
                  alt=""
                  src="/vector-61-2.svg"
                />
                <img
                  className={styles.priceIcon1}
                  alt=""
                  src="/vector-61-2.svg"
                />
              </div>
            </div>
            <div className={styles.productName1}>
              <div className={styles.productName2}>
                <div className={styles.almonds}>
                  <b className={styles.almonds100Gm}>Almonds (100 gm)</b>
                  <div
                    className={styles.duisAuctorAt1}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.ratings1}>
                    <div className={styles.stars1}>$79.00</div>
                    <div className={styles.ratingCount1}>
                      <div className={styles.number1}>$99.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.almonds1}>
                  <b className={styles.greenTea100Gm}>Green Tea(100 gm)</b>
                  <div
                    className={styles.duisAuctorAt2}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.parent}>
                    <div className={styles.div}>$79.00</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>$99.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <b className={styles.viewDetails1}>View Details</b>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <b className={styles.viewDetails2}>View Details</b>
              </div>
            </div>
          </div>
          <div className={styles.productCard2}>
            <Price1
              frame62527="/frame-62527-1.svg"
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
            />
            <div className={styles.productName3}>
              <b className={styles.mangoShake100Ml}>Mango Shake(100 ml)</b>
              <div
                className={styles.duisAuctorAt3}
              >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
              <div className={styles.ratings2}>
                <div className={styles.stars2}>$79.00</div>
                <div className={styles.ratingCount2}>
                  <div className={styles.number2}>$99.00</div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <b className={styles.viewDetails3}>View Details</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.placeholder}>
        <img
          className={styles.placeholderChild}
          alt=""
          src="/group-8074-1.svg"
        />
      </div>
    </section>
  );
};

Items.propTypes = {
  className: PropTypes.string,
};

export default Items;
