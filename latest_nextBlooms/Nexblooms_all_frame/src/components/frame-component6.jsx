import SaffronCinnamon from "./saffron-cinnamon";
import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.topSpiceProductsWrapper, className].join(" ")}>
      <div className={styles.topSpiceProducts}>
        <div className={styles.topSpicesHeader}>
          <div className={styles.topSpicesTitle}>
            <h3 className={styles.topSpiceProducts1}>Top Spice Products</h3>
            <div className={styles.topSpicesButton}>
              <b className={styles.viewAll}>View All</b>
              <div className={styles.topSpicesBtnIcon}>
                <img
                  className={styles.topSpicesBtnIconChild}
                  alt=""
                  src="/vector-4-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topSpiceItems}>
          <div className={styles.spiceItems}>
            <div className={styles.cuminCoriander}>
              <div className={styles.cuminCorianderImage}>
                <img
                  className={styles.cuminImageIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4416@2x.png"
                />
                <img
                  className={styles.cuminImageIcon1}
                  alt=""
                  src="/rectangle-4413-2@2x.png"
                />
              </div>
              <div className={styles.cuminTitle}>
                <div className={styles.cuminName}>
                  <h3 className={styles.cumin}>Cumin</h3>
                  <div className={styles.corianderName}>
                    <h3 className={styles.coriander}>Coriander</h3>
                  </div>
                </div>
              </div>
            </div>
            <SaffronCinnamon
              saffronImage="/rectangle-4417@2x.png"
              saffron="Saffron"
            />
            <SaffronCinnamon
              saffronImage="/rectangle-4418@2x.png"
              saffron="Cinnamon"
              propWidth="303px"
              propPadding="unset"
            />
          </div>
          <div className={styles.vectorArrowsWrapper}>
            <img
              className={styles.vectorArrowsIcon}
              loading="lazy"
              alt=""
              src="/vector-arrows.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
