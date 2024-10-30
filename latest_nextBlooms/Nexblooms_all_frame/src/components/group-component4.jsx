import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";
import styles from "./group-component4.module.css";

const GroupComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.categoriesContent}>
        <div className={styles.categoriesTitle}>
          <div className={styles.categoriesHeading}>
            <div className={styles.ourProductsCategoriesParent}>
              <h3 className={styles.ourProductsCategories}>
                Our Products Categories
              </h3>
              <img
                className={styles.titleIcon}
                alt=""
                src="/categories-view-more-icon.svg"
              />
            </div>
            <div className={styles.viewAllButton}>
              <div className={styles.viewAllLink}>
                <b className={styles.viewAll}>View All</b>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconWrapperChild}
                    alt=""
                    src="/vector-4-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.spiceCategoryParent}>
          <div className={styles.spiceCategory}>
            <div className={styles.spicePhotoParent}>
              <img
                className={styles.spicePhotoIcon}
                loading="lazy"
                alt=""
                src="/rectangle-4412@2x.png"
              />
              <div className={styles.spiceTitle}>
                <div className={styles.spice}>Spice</div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemParent}>
            <div className={styles.categoryItem}>
              <img
                className={styles.categoryImageIcon}
                loading="lazy"
                alt=""
                src="/rectangle-4413@2x.png"
              />
            </div>
            <a className={styles.honey}> Honey</a>
          </div>
          <FrameComponent1
            roseboxBFdSCxmqvYcUnsplas="/tea-coffee@2x.png"
            deliveries="Tea,Coffee"
          />
          <FrameComponent1
            roseboxBFdSCxmqvYcUnsplas="/rectangle-4414@2x.png"
            deliveries=" Dairy Products"
            propWidth="unset"
            propFlex="0.9869"
            propMinWidth="225px"
          />
          <div className={styles.frameParent}>
            <div className={styles.rectangleWrapper}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/rectangle-4415@2x.png"
              />
            </div>
            <div className={styles.groceries}>Groceries</div>
          </div>
        </div>
      </div>
      <div className={styles.emptyCategory}>
        <img
          className={styles.emptyCategoryChild}
          alt=""
          src="/group-8074.svg"
        />
      </div>
    </section>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
