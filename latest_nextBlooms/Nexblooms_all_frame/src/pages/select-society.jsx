import CartDetails from "../components/cart-details";
import Footer from "../components/footer";
import styles from "./select-society.module.css";

const SelectSociety = () => {
  return (
    <div className={styles.selectSociety}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.div}>$1</div>
        <div className={styles.readMoreParent}>
          <div className={styles.readMore}>read more</div>
          <div className={styles.grassrootsMarketplaceCommuniContainer}>
            <p className={styles.grassrootsMarketplaceCommuni}>
              Grassroots marketplace community
            </p>
            <p className={styles.revitalizationInitiativeFuel}>
              revitalization initiative fuelled...
            </p>
          </div>
          <b className={styles.donation}>Donation</b>
          <img
            className={styles.groupIcon}
            alt=""
            src="/group-10000061371.svg"
          />
        </div>
      </div>
      <section className={styles.instanceParent}>
        <header className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                  <div className={styles.searchPlaceholderParent}>
                    <div className={styles.searchPlaceholder}>
                      <img
                        className={styles.searchCursorIcon}
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
                            className={styles.chevronIcon}
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.filterBackgroundParent}>
                    <div className={styles.filterBackground} />
                    <div className={styles.filterLabel}>
                      <a className={styles.searchByProduct}>
                        Search by product
                      </a>
                    </div>
                    <div className={styles.searchButtonBackgroundParent}>
                      <div className={styles.searchButtonBackground} />
                      <img
                        className={styles.searchIcon1}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.user}>
                    <div className={styles.userOptions}>
                      <div className={styles.notificationIconParent}>
                        <img
                          className={styles.notificationIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className={styles.notificationCircleParent}>
                          <div className={styles.notificationCircle} />
                          <a className={styles.notificationNumber}>4</a>
                        </div>
                      </div>
                      <div className={styles.cart}>
                        <div className={styles.frameGroup}>
                          <img
                            className={styles.frameChild1}
                            loading="lazy"
                            alt=""
                            src="/group-7401.svg"
                          />
                          <div className={styles.cartItemCircleParent}>
                            <div className={styles.cartItemCircle} />
                            <a className={styles.cartItemNumber}>4</a>
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
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-11.svg"
                        />
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.frameChild2}
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
              <div className={styles.empty}>
                <img
                  className={styles.emptyChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000006198.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navigationBackground} />
            <div className={styles.frameContainer}>
              <nav className={styles.homeParent}>
                <a className={styles.home}>Home</a>
                <div className={styles.categoriesParent}>
                  <a className={styles.categories}>Categories</a>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.productsParent}>
                  <a className={styles.products}>Products</a>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon2}
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
        </header>
        <div className={styles.cartDetailsWrapper}>
          <CartDetails />
        </div>
      </section>
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <Footer />
    </div>
  );
};

export default SelectSociety;
