import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.benefitsTitle}>
          <div className={styles.benefitsHeading}>
            <h3 className={styles.benefitsOfBecoming}>
              Benefits of becoming User
            </h3>
            <div className={styles.titleIcon}>
              <img
                className={styles.titleIconChild}
                alt=""
                src="/vector-3-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.benefitItemWrapper}>
            <div className={styles.benefitItem}>
              <img
                className={styles.benefitIcon}
                loading="lazy"
                alt=""
                src="/frame-62591.svg"
              />
              <div className={styles.benefitDescription}>
                <div className={styles.benefitDescriptionChild} />
                <b className={styles.eatHealthyStayHealthy}>
                  Eat healthy-Stay healthy
                </b>
              </div>
              <div
                className={styles.duisAuctorAt}
              >{`Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. `}</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-62591-1.svg"
              />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <b className={styles.secureTransactions}>Secure Transactions</b>
              </div>
              <div
                className={styles.duisAuctorAt1}
              >{`Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. `}</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameContainer}>
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-62591-2.svg"
              />
            </div>
            <div className={styles.benefitItem1}>
              <b className={styles.verifiedSuppliers}>Verified Suppliers</b>
              <div className={styles.benefitDescription1}>
                <div
                  className={styles.duisAuctorAt2}
                >{`Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
