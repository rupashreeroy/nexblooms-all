import PropTypes from "prop-types";
import styles from "./footer-wrapper.module.css";

const FooterWrapper = ({ className = "" }) => {
  return (
    <footer className={[styles.footerWrapper, className].join(" ")}>
      <div className={styles.footerBackgroundParent}>
        <div className={styles.footerBackground} />
        <div className={styles.footerInformation}>
          <div className={styles.footerColumns}>
            <div className={styles.contactInfoColumnParent}>
              <div className={styles.contactInfoColumn}>
                <div className={styles.logo3Parent}>
                  <div className={styles.logo3}>
                    <div className={styles.logo1}>
                      <img
                        className={styles.logo1Child}
                        alt=""
                        src="/group-11.svg"
                      />
                      <img
                        className={styles.logo1Item}
                        alt=""
                        src="/group-61.svg"
                      />
                      <img
                        className={styles.logo1Inner}
                        alt=""
                        src="/group-81.svg"
                      />
                      <div className={styles.subtractParent}>
                        <img
                          className={styles.subtractIcon}
                          alt=""
                          src="/subtract-1.svg"
                        />
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-1-1.svg"
                        />
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.frameItem}
                            alt=""
                            src="/vector-2-1.svg"
                          />
                          <div className={styles.grassRoots}>
                            <span>Grass</span>
                            <span className={styles.span}>{` `}</span>
                            <span className={styles.roots}>Roots</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.logo3Child} />
                    <div className={styles.marketplace}>MARKETPLACE</div>
                  </div>
                  <div className={styles.contactInformationParent}>
                    <h3 className={styles.contactInformation}>
                      contact information
                    </h3>
                    <div className={styles.frameParent}>
                      <div className={styles.frameWrapper}>
                        <img
                          className={styles.frameIcon}
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                      <div className={styles.demograssroutescom}>
                        demo@grassroutes.com
                      </div>
                    </div>
                    <div className={styles.phoneIconWrapperParent}>
                      <div className={styles.phoneIconWrapper}>
                        <img
                          className={styles.phoneIcon}
                          loading="lazy"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                      <div className={styles.xxXxxxxXxxxxWrapper}>
                        <div className={styles.xxXxxxxXxxxx}>
                          +91 80008 55595
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.columnSeparator}>
                <img
                  className={styles.columnSeparatorChild}
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.overviewParent}>
                    <h3 className={styles.overview}>overview</h3>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/home-link-icon.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
                    <div className={styles.aboutUs}>About Us</div>
                    <div className={styles.contactUs}>Contact Us</div>
                    <div className={styles.blogs}>Blogs</div>
                    <div className={styles.privacyPolicy}>Privacy policy</div>
                    <div
                      className={styles.termsConditions}
                    >{`Terms & Conditions`}</div>
                  </div>
                </div>
                <div className={styles.categoriesColumn}>
                  <div className={styles.groupDiv}>
                    <div className={styles.categoriesParent}>
                      <h3 className={styles.categories}>Categories</h3>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon}
                          loading="lazy"
                          alt=""
                          src="/home-link-icon.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.dispensariesParent}>
                      <div className={styles.dispensaries}>
                        Online Marketing
                      </div>
                      <div className={styles.cultivation}>
                        Transaction Processng
                      </div>
                      <div className={styles.manufacturing}>Manufacturing</div>
                      <div className={styles.deliveries}>Deliveries</div>
                      <div className={styles.brands}>Brands</div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.productsParent}>
                      <h3 className={styles.products}>Products</h3>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.frameChild1}
                          loading="lazy"
                          alt=""
                          src="/home-link-icon.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.flowersParent}>
                      <div className={styles.flowers}>Spices</div>
                      <div className={styles.vapePens}>{`Tea & Coffee`}</div>
                      <div
                        className={styles.concentrates}
                      >{`Dry Fruits & Snacks`}</div>
                      <div className={styles.preRolls}>Dairy Products</div>
                      <div className={styles.edibles}>Groceries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.footerBottomSeparator}
            alt=""
            src="/footer-divider.svg"
          />
        </div>
        <div className={styles.footerSocial}>
          <div className={styles.copyright2023GrassRootMaParent}>
            <div
              className={styles.copyright2023}
            >{`Copyright © 2023 Grass Root Marketplace. All Rights Reserved. `}</div>
            <div className={styles.socialIcons}>
              <div className={styles.iconJamIconsOutlineLParent}>
                <img
                  className={styles.iconJamIconsOutlineL}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--youtube.svg"
                />
                <img
                  className={styles.iconJamIconsOutlineL1}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--facebook.svg"
                />
                <img
                  className={styles.iconJamIconsOutlineL2}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--twitter.svg"
                />
                <img
                  className={styles.iconJamIconsOutlineL3}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--instagram.svg"
                />
                <img
                  className={styles.iconJamIconsOutlineL4}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--linkedin.svg"
                />
              </div>
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <img
                  className={styles.appStoreFilled}
                  loading="lazy"
                  alt=""
                  src="/app-store--filled.svg"
                />
              </div>
              <div className={styles.button1}>
                <div className={styles.googlePlay}>
                  <img
                    className={styles.playStoreIcons}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className={styles.playStoreIcons1}
                    alt=""
                    src="/vector-61.svg"
                  />
                  <div className={styles.getItOnWrapper}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <div className={styles.getItOnParent}>
                    <div className={styles.getItOn}>GET IT ON</div>
                    <img
                      className={styles.vectorIcon4}
                      loading="lazy"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-111.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.nexbloomslogoIcon}
        loading="lazy"
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <div className={styles.websiteLinkWrapper}>
        <img
          className={styles.websiteLinkIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className={styles.demonexbloomscom}>info@nexblooms.com</div>
      <div
        className={styles.copyright2024}
      >{`Copyright © 2024 NEXBlooms Marketplace. All Rights Reserved. `}</div>
    </footer>
  );
};

FooterWrapper.propTypes = {
  className: PropTypes.string,
};

export default FooterWrapper;
