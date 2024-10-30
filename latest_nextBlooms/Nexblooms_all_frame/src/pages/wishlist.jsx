import ProductsWrapper from "../components/products-wrapper";
import ContactUsContainer from "../components/contact-us-container";
import styles from "./wishlist.module.css";

const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <header className={styles.productBackgroundParent}>
        <div className={styles.productBackground} />
        <div className={styles.productContainerWrapper}>
          <div className={styles.productContainer}>
            <div className={styles.productWrapper}>
              <div className={styles.productDetails}>
                <div className={styles.productIconContainerParent}>
                  <div className={styles.productIconContainer}>
                    <img
                      className={styles.productIcon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.location}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.locationIconContainer}>
                        <img
                          className={styles.locationIcon}
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
                  <div className={styles.searchInput}>
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
                <div className={styles.user}>
                  <div className={styles.userActions}>
                    <div className={styles.cartIconParent}>
                      <img
                        className={styles.cartIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.cartCounterBackgroundParent}>
                        <div className={styles.cartCounterBackground} />
                        <a className={styles.cartCounterValue}>4</a>
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
                        <div
                          className={styles.notificationCounterBackgrounParent}
                        >
                          <div
                            className={styles.notificationCounterBackgroun}
                          />
                          <a className={styles.notificationCounterValue}>4</a>
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
            <div className={styles.loginOptions}>
              <img
                className={styles.loginOptionsChild}
                loading="lazy"
                alt=""
                src="/group-1000006198.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationBarBackground} />
          <div className={styles.navigationLinksParent}>
            <nav className={styles.navigationLinks}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesParent}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.navigationLinkIconContainer}>
                  <img
                    className={styles.navigationLinkIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
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
      </header>
      <main className={styles.content}>
        <section className={styles.productsContainer}>
          <ProductsWrapper />
          <div className={styles.footer}>
            <img
              className={styles.footerChild}
              loading="lazy"
              alt=""
              src="/group-8074.svg"
            />
          </div>
        </section>
      </main>
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <ContactUsContainer />
    </div>
  );
};

export default Wishlist;
