import PropTypes from "prop-types";
import styles from "./contact-info-container.module.css";

const ContactInfoContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.contactInfoContainer, className].join(" ")}>
      <div className={styles.contactInfoBackgroundParent}>
        <div className={styles.contactInfoBackground} />
        <div className={styles.contactInfoContent}>
          <div className={styles.contactInfoDetails}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
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
                    <div className={styles.contactInformation}>
                      contact information
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameContainer}>
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
                    <div className={styles.hiddenNumberContainerParent}>
                      <div className={styles.hiddenNumberContainer}>
                        <img
                          className={styles.frameIcon1}
                          loading="lazy"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                      <div className={styles.visiblePhoneNumber}>
                        <div className={styles.xxXxxxxXxxxx}>
                          +91 80008 55595
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.phoneIcon}>
                <img
                  className={styles.contactIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>overview</div>
                    <div className={styles.linkChevron}>
                      <img
                        className={styles.linkChevronChild}
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
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent2}>
                    <div className={styles.categoriesParent}>
                      <div className={styles.categories}>Categories</div>
                      <div className={styles.vectorWrapper}>
                        <img
                          className={styles.frameInner}
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
                  <div className={styles.frameParent3}>
                    <div className={styles.productsParent}>
                      <div className={styles.products}>Products</div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon}
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
            className={styles.footerBackgroundIcon}
            alt=""
            src="/footer-divider.svg"
          />
        </div>
        <div className={styles.appDownload}>
          <div className={styles.copyright2023GrassRootMaParent}>
            <div
              className={styles.copyright2023}
            >{`Copyright © 2023 Grass Root Marketplace. All Rights Reserved. `}</div>
            <div className={styles.socialMediaIcons}>
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
                    className={styles.playStoreBrandIconContaine}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className={styles.playStoreBrandIconContaine1}
                    alt=""
                    src="/vector-61.svg"
                  />
                  <div className={styles.playStoreBrandIconBackgrou}>
                    <img
                      className={styles.playStoreBrandIcon}
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <div className={styles.getItOnBackground}>
                    <div className={styles.getItOn}>GET IT ON</div>
                    <img
                      className={styles.downloadIconContainer}
                      loading="lazy"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <img
                    className={styles.downloadIcon}
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
      <div className={styles.appDownloadBackgroundWrapper}>
        <img
          className={styles.appDownloadBackground}
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

ContactInfoContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactInfoContainer;
