import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.instanceWrapper, className].join(" ")}>
      <div className={styles.addressBackgroundParent}>
        <div className={styles.addressBackground} />
        <div className={styles.deliveryAddressContent}>
          <div className={styles.addressInput}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.noidaLabelContainerParent}>
                  <div className={styles.noidaLabelContainer}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.noidaDetails}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.noidaIconContainer}>
                        <img
                          className={styles.noidaPinIcon}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.searchInputBackgroundParent}>
                  <div className={styles.searchInputBackground} />
                  <div className={styles.searchProductLabel}>
                    <a className={styles.searchByProduct}>Search by product</a>
                  </div>
                  <div className={styles.searchIconBackgroundParent}>
                    <div className={styles.searchIconBackground} />
                    <img
                      className={styles.searchIcon}
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.notificationIconParent}>
                      <img
                        className={styles.notificationIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.notificationCountParent}>
                        <div className={styles.notificationCount} />
                        <a className={styles.notificationCountLabel}>4</a>
                      </div>
                    </div>
                    <div className={styles.profilePicture}>
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/group-7401.svg"
                        />
                        <div className={styles.profilePictureCountParent}>
                          <div className={styles.profilePictureCount} />
                          <a className={styles.profilePictureCount1}>4</a>
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
                    <img
                      className={styles.logo1Item}
                      alt=""
                      src="/group-6.svg"
                    />
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
            <div className={styles.addressInputInner}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1000006198.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomNavigationBar}>
          <div className={styles.bottomBarBackground} />
          <div className={styles.navigationMenuParent}>
            <nav className={styles.navigationMenu}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesParent}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.menuIcon}>
                  <img className={styles.homeIcon} alt="" src="/vector-3.svg" />
                </div>
              </div>
              <div className={styles.productsParent}>
                <a className={styles.products}>Products</a>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-4.svg"
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
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
