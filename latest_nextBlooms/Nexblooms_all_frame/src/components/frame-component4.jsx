import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.mainCategoryWrapper, className].join(" ")}>
      <div className={styles.mainCategory}>
        <div className={styles.mainCategoryChild} />
        <div className={styles.mainCategoryInner}>
          <div className={styles.categoriesParent}>
            <h3 className={styles.categories}>Categories</h3>
            <img
              className={styles.categoriesViewMoreIcon}
              alt=""
              src="/categories-view-more-icon.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.marvinMeyerSyto3xs06fuUnsplParent}>
              <img
                className={styles.marvinMeyerSyto3xs06fuUnsplIcon}
                loading="lazy"
                alt=""
                src="/marvinmeyersyto3xs06fuunsplash-1@2x.png"
              />
              <div className={styles.onlineMarketingWrapper}>
                <div className={styles.onlineMarketing}>Online Marketing</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.lukeChesserJkutrj4vk00UnsplParent}>
                <img
                  className={styles.lukeChesserJkutrj4vk00UnsplIcon}
                  loading="lazy"
                  alt=""
                  src="/lukechesserjkutrj4vk00unsplash-1@2x.png"
                />
                <div className={styles.transactionProcessingWrapper}>
                  <div className={styles.transactionProcessing}>
                    <p className={styles.transaction}>{`Transaction `}</p>
                    <p className={styles.processing}>Processing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.petrMageraLjgdbyz8wyqUnsplaParent}>
                <img
                  className={styles.petrMageraLjgdbyz8wyqUnsplaIcon}
                  loading="lazy"
                  alt=""
                  src="/petrmageraljgdbyz8wyqunsplash-1@2x.png"
                />
                <div className={styles.manufacturingWrapper}>
                  <div className={styles.manufacturing}>Manufacturing</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameGroup}>
                <div className={styles.roseboxBfdscxmqvycUnsplash1Wrapper}>
                  <img
                    className={styles.roseboxBfdscxmqvycUnsplash1Icon}
                    loading="lazy"
                    alt=""
                    src="/roseboxbfdscxmqvycunsplash-1@2x.png"
                  />
                </div>
                <div className={styles.deliveries}> Deliveries</div>
              </div>
            </div>
            <div className={styles.nexbloom3Parent}>
              <img
                className={styles.nexbloom3Icon}
                loading="lazy"
                alt=""
                src="/nexbloom-3@2x.png"
              />
              <div className={styles.brandsWrapper}>
                <div className={styles.brands}>Brands</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainCategoryInner1}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-8074.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
