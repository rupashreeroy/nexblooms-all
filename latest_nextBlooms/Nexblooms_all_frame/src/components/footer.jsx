import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.phoneNumberParent}>
              <div className={styles.phoneNumber}>
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
                    <div className={styles.phoneNumberInputParent}>
                      <div className={styles.phoneNumberInput}>
                        <img
                          className={styles.phoneInputIcon}
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
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>overview</div>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/home-link-icon.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
                    <a className={styles.aboutUs}>About Us</a>
                    <div className={styles.contactUs}>Contact Us</div>
                    <div className={styles.blogs}>Blogs</div>
                    <div className={styles.privacyPolicy}>Privacy policy</div>
                    <div
                      className={styles.termsConditions}
                    >{`Terms & Conditions`}</div>
                  </div>
                </div>
                <div className={styles.categories}>
                  <GroupComponent
                    categories="Categories"
                    dispensaries="Online Marketing"
                    cultivation="Transaction Processng"
                    manufacturing="Manufacturing"
                    deliveries="Deliveries"
                    brands="Brands"
                  />
                  <GroupComponent
                    categories="Products"
                    dispensaries="Spices"
                    cultivation={`Tea & Coffee`}
                    manufacturing={`Dry Fruits & Snacks`}
                    deliveries="Dairy Products"
                    brands="Groceries"
                    propFlex="unset"
                    propMinWidth="187px"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.footerContentChild}
            alt=""
            src="/footer-divider.svg"
          />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright2023GrassRootMaParent}>
            <div
              className={styles.copyright2023}
            >{`Copyright © 2023 Grass Root Marketplace. All Rights Reserved. `}</div>
            <div className={styles.socialMedia}>
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
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-61.svg"
                  />
                  <div className={styles.googlePlayGetItOnIcon}>
                    <img
                      className={styles.getItOnIcon}
                      alt=""
                      src="/vector-8.svg"
                    />
                  </div>
                  <div className={styles.getItOnParent}>
                    <div className={styles.getItOn}>GET IT ON</div>
                    <img
                      className={styles.vectorIcon3}
                      loading="lazy"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon4}
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className={styles.vectorIcon6}
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
      <div className={styles.copyrightBackgroundWrapper}>
        <img
          className={styles.copyrightBackgroundIcon}
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

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
