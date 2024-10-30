import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <div className={styles.breadcrumbLinks}>
            <img
              className={styles.breadcrumbSeparatorIcon}
              alt=""
              src="/breadcrumb-separator.svg"
            />
            <div className={styles.breadcrumbLabels}>
              <a className={styles.home}>Home</a>
              <div className={styles.ourProducts}>Our Products</div>
            </div>
          </div>
        </div>
        <div className={styles.pageTitle}>
          <div className={styles.titleContent}>
            <h3 className={styles.ourProductsCategories}>
              Our Products Categories
            </h3>
            <img
              className={styles.titleIcon}
              alt=""
              src="/categories-view-more-icon.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.categoryCardsParent}>
            <img
              className={styles.categoryCardsIcon}
              loading="lazy"
              alt=""
              src="/various-spices@2x.png"
            />
            <div className={styles.variousSpices}>Various Spices</div>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/cooking-oil@2x.png"
            />
            <div className={styles.cookingOil}>Cooking Oil</div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/wheat@2x.png"
            />
            <div className={styles.wheat}>Wheat</div>
          </div>
          <div className={styles.groupDiv}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/flour@2x.png"
            />
            <div className={styles.flour}>Flour</div>
          </div>
          <div className={styles.frameParent1}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/honey@2x.png"
            />
            <div className={styles.honey}>Honey</div>
          </div>
          <div className={styles.frameParent2}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/ghee@2x.png"
            />
            <div className={styles.ghee}>Ghee</div>
          </div>
          <div className={styles.frameParent3}>
            <img
              className={styles.frameChild2}
              loading="lazy"
              alt=""
              src="/saffron@2x.png"
            />
            <div className={styles.saffron}>Saffron</div>
          </div>
          <div className={styles.frameParent4}>
            <img
              className={styles.frameChild3}
              loading="lazy"
              alt=""
              src="/green-tea@2x.png"
            />
            <div className={styles.greenTea}>Green Tea</div>
          </div>
          <div className={styles.frameParent5}>
            <img
              className={styles.frameChild4}
              loading="lazy"
              alt=""
              src="/milk5@2x.png"
            />
            <div className={styles.milk}>Milk</div>
          </div>
          <div className={styles.frameParent6}>
            <img
              className={styles.frameChild5}
              loading="lazy"
              alt=""
              src="/almonds@2x.png"
            />
            <div className={styles.almonds}>Almonds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
