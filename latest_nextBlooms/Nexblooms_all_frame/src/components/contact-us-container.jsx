import PropTypes from "prop-types";
import styles from "./contact-us-container.module.css";

const ContactUsContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.contactUsContainer, className].join(" ")}>
      <div className={styles.contactUsBackgroundParent}>
        <div className={styles.contactUsBackground} />
        <div className={styles.contactUsContent}>
          <div className={styles.contactUsInformation}>
            <div className={styles.contactUsInfoParent}>
              <div className={styles.contactUsInfo}>
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
                    <div className={styles.phoneNumberParent}>
                      <div className={styles.phoneNumber}>
                        <img
                          className={styles.placeholderIcon}
                          loading="lazy"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                      <div className={styles.phoneNumberValue}>
                        <div className={styles.xxXxxxxXxxxx}>
                          +91 80008 55595
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divider}>
                <img
                  className={styles.dividerChild}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>overview</div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.frameInner}
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
                <div className={styles.footerLinks}>
                  <div className={styles.groupDiv}>
                    <div className={styles.categoriesParent}>
                      <div className={styles.categories}>Categories</div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon}
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
                      <div className={styles.products}>Products</div>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.frameChild1}
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
            className={styles.footerDividerIcon}
            alt=""
            src="/footer-divider.svg"
          />
        </div>
        <div className={styles.socialAndApp}>
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
                  <div className={styles.playIcon}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-8.svg"
                    />
                  </div>
                  <div className={styles.getItOnParent}>
                    <div className={styles.getItOn}>GET IT ON</div>
                    <img
                      className={styles.starIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <img
                    className={styles.rightBracketIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.leftBracketIcon}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className={styles.googlePlayIcon}
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
      <div className={styles.websiteDetails}>
        <img
          className={styles.detailsContainerIcon}
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

ContactUsContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactUsContainer;
