import ProductCardInfo from "./product-card-info";
import PropTypes from "prop-types";
import styles from "./products-wrapper.module.css";

const ProductsWrapper = ({ className = "" }) => {
  return (
    <div className={[styles.productsWrapper, className].join(" ")}>
      <div className={styles.productsList}>
        <div className={styles.productCardContainer}>
          <div className={styles.productCard}>
            <img
              className={styles.productCardDivider}
              loading="lazy"
              alt=""
              src="/line-1613.svg"
            />
            <div className={styles.productCardHeader}>
              <a className={styles.home}>Home</a>
              <div className={styles.wishlist}>Wishlist</div>
            </div>
          </div>
          <div className={styles.productCardWishlist}>
            <h3 className={styles.wishlist1}>Wishlist</h3>
            <div className={styles.productCardWishlistCount}>
              <div className={styles.items}>(50 items)</div>
            </div>
          </div>
        </div>
        <div className={styles.productCardInfoParent}>
          <div className={styles.productCardInfo}>
            <img
              className={styles.productCardImageContainer}
              loading="lazy"
              alt=""
              src="/frame-625276.svg"
            />
            <div className={styles.corianderParent}>
              <b className={styles.coriander}>Coriander</b>
              <div
                className={styles.duisAuctorAt}
              >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
              <div className={styles.productCardActionContainer}>
                <div className={styles.productCardEmpty}>$79.00</div>
                <div className={styles.productCardAction}>
                  <div className={styles.productCardAction1}>$99.00</div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <b className={styles.moveToCart}>Move to Cart</b>
              </div>
            </div>
          </div>
          <ProductCardInfo frame62527="/frame-62527-15.svg" cumin="Cumin" />
          <ProductCardInfo
            frame62527="/frame-62527-23.svg"
            cumin="Cinnamon"
            propWidth="unset"
          />
          <ProductCardInfo
            frame62527="/frame-62527-32.svg"
            cumin="Saffron"
            propWidth="unset"
          />
        </div>
      </div>
      <div className={styles.productGrid}>
        <ProductCardInfo
          frame62527="/frame-62527-43.svg"
          cumin="Green Cardamom"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-53.svg"
          cumin="Black Cardamom"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-62.svg"
          cumin="Fenugreek"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-73.svg"
          cumin="Star Anise"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-83.svg"
          cumin="Black Pepper"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/almonds1.svg"
          cumin="Honey"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-10.svg"
          cumin="Ghee"
          propWidth="295px"
        />
        <ProductCardInfo
          frame62527="/frame-62527-111.svg"
          cumin="Cooking Oil"
          propWidth="295px"
        />
      </div>
    </div>
  );
};

ProductsWrapper.propTypes = {
  className: PropTypes.string,
};

export default ProductsWrapper;
