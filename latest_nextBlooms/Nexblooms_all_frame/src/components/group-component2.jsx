import PropTypes from "prop-types";
import styles from "./group-component2.module.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <header className={[styles.deliveryRectParent, className].join(" ")}>
      <div className={styles.deliveryRect} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.searchInputFieldParent}>
                <div className={styles.searchInputField}>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="/search-icon.svg"
                  />
                </div>
                <div className={styles.deliveryAddressParent}>
                  <a className={styles.deliveryAddress}>Delivery Address</a>
                  <div className={styles.addressLocation}>
                    <a className={styles.noida201301}>Noida 201301</a>
                    <div className={styles.locationIcon}>
                      <img
                        className={styles.locationPinIcon}
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.searchRectParent}>
                <div className={styles.searchRect} />
                <div className={styles.searchByProductWrapper}>
                  <a className={styles.searchByProduct}>Search by product</a>
                </div>
                <div className={styles.searchButtonBackgroundParent}>
                  <div className={styles.searchButtonBackground} />
                  <img
                    className={styles.searchIcon1}
                    alt=""
                    src="/search1.svg"
                  />
                </div>
              </div>
              <div className={styles.filters}>
                <div className={styles.filterIcons}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-22.svg"
                    />
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <a className={styles.a}>4</a>
                    </div>
                  </div>
                  <div className={styles.filterIconsInner}>
                    <div className={styles.frameParent1}>
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/group-74011.svg"
                      />
                      <div className={styles.ellipseGroup}>
                        <div className={styles.frameInner} />
                        <a className={styles.a1}>4</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nexbloomlogo}>
                <div className={styles.logo1}>
                  <img
                    className={styles.logo1Child}
                    alt=""
                    src="/group-12.svg"
                  />
                  <img
                    className={styles.logo1Item}
                    alt=""
                    src="/group-62.svg"
                  />
                  <img
                    className={styles.logo1Inner}
                    alt=""
                    src="/group-82.svg"
                  />
                  <div className={styles.subtractParent}>
                    <img
                      className={styles.subtractIcon}
                      alt=""
                      src="/subtract1.svg"
                    />
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-15.svg"
                    />
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameChild2}
                        alt=""
                        src="/vector-23.svg"
                      />
                      <div className={styles.grassRoots}>
                        <span>Grass</span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.roots}>Roots</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nexbloomlogoChild} />
                <div className={styles.marketplace}>MARKETPLACE</div>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <a className={styles.login}>Login</a>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-1000006198.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.categoriesBrands}>
        <div className={styles.categoriesBrandsBackground} />
        <div className={styles.frameParent2}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <div className={styles.categoriesParent}>
              <a className={styles.categories}>Categories</a>
              <div className={styles.categoryIconWrapper}>
                <img
                  className={styles.categoryIcon}
                  alt=""
                  src="/vector-32.svg"
                />
              </div>
            </div>
            <div className={styles.productsParent}>
              <a className={styles.products}>Products</a>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-42.svg"
                />
              </div>
            </div>
          </nav>
          <div className={styles.licenseCertificateWrapper}>
            <div
              className={styles.licenseCertificate}
            >{`License & Certificate`}</div>
          </div>
          <a className={styles.brands}>Brands</a>
          <div className={styles.blog}>Blog</div>
          <div className={styles.positiveVibesEntertainment}>
            Positive Vibes Entertainment
          </div>
        </div>
      </div>
    </header>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
