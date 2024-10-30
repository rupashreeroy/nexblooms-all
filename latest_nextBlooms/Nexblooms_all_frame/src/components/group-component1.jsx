import PropTypes from "prop-types";
import styles from "./group-component1.module.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <header
      className={[styles.contactInfoBackgroundParent, className].join(" ")}
    >
      <div className={styles.contactInfoBackground} />
      <div className={styles.contactInfo}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.searchIcon}>
              <div className={styles.searchButtonParent}>
                <div className={styles.searchButton}>
                  <img
                    className={styles.userAvatarIcon}
                    alt=""
                    src="/pincode-icon.svg"
                  />
                </div>
                <div className={styles.deliveryAddressParent}>
                  <a className={styles.deliveryAddress}>Delivery Address</a>
                  <div className={styles.location}>
                    <a className={styles.noida201301}>Noida 201301</a>
                    <div className={styles.locationIcon}>
                      <img
                        className={styles.dividerIcon}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.searchInputBackgroundParent}>
                <div className={styles.searchInputBackground} />
                <div className={styles.searchPlaceholder}>
                  <a className={styles.searchByProduct}>Search by product</a>
                </div>
                <div className={styles.searchIconButtonParent}>
                  <div className={styles.searchIconButton} />
                  <img
                    className={styles.searchIcon1}
                    alt=""
                    src="/search.svg"
                  />
                </div>
              </div>
              <div className={styles.user}>
                <div className={styles.userActions}>
                  <div className={styles.cartIconParent}>
                    <img
                      className={styles.cartIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className={styles.cartItemCountBackgroundParent}>
                      <div className={styles.cartItemCountBackground} />
                      <a className={styles.cartItemCount}>4</a>
                    </div>
                  </div>
                  <div className={styles.notifications}>
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-7401.svg"
                      />
                      <div className={styles.notificationBadgeBackgroundParent}>
                        <div className={styles.notificationBadgeBackground} />
                        <a className={styles.notificationCount}>4</a>
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
                    src="/group-1.svg"
                  />
                  <img className={styles.logo1Item} alt="" src="/group-6.svg" />
                  <img
                    className={styles.logo1Inner}
                    alt=""
                    src="/group-8.svg"
                  />
                  <div className={styles.subtractParent}>
                    <img
                      className={styles.subtractIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="/vector-21.svg"
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
          <div className={styles.placeholder}>
            <img
              className={styles.placeholderChild}
              loading="lazy"
              alt=""
              src="/group-1000006198.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationBarBackground} />
        <div className={styles.homeLinkParent}>
          <nav className={styles.homeLink}>
            <a className={styles.home}>Home</a>
            <div className={styles.categoriesParent}>
              <a className={styles.categories}>Categories</a>
              <div className={styles.homeProductsIcon}>
                <img className={styles.homeIcon} alt="" src="/vector-3.svg" />
              </div>
            </div>
            <div className={styles.productsParent}>
              <a className={styles.products}>Products</a>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
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

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
