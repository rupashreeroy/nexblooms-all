import React from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/registration-form";
import styles from "./register-page.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerBackgroundParent}>
        <div className={styles.registerBackground} />
        <div className={styles.registerContent}>
          <div className={styles.registerFields}>
            <div className={styles.nameFields}>
              <div className={styles.firstNameField}>
                <div className={styles.firstNameLabelParent}>
                  <div className={styles.firstNameLabel}>
                    <img
                      className={styles.nameDividerIcon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.addressInput}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.addressIcon}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.searchInputParent}>
                  <div className={styles.searchInput} />
                  <div className={styles.searchLabel}>
                    <a className={styles.searchByProduct}>Search by product</a>
                  </div>
                  <div className={styles.searchButtonParent}>
                    <div className={styles.searchButton} />
                    <img
                      className={styles.searchIcon}
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
                <div className={styles.notificationIcon}>
                  <div className={styles.notificationBell}>
                    <div className={styles.notificationDotParent}>
                      <img
                        className={styles.notificationDotIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.badgeBackgroundParent}>
                        <div className={styles.badgeBackground} />
                        <a className={styles.badgeNumber}>4</a>
                      </div>
                    </div>
                    <div className={styles.cartIcon}>
                      <div className={styles.frameGroup}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/group-7401.svg"
                        />
                        <div className={styles.cartBackgroundParent}>
                          <div className={styles.cartBackground} />
                          <a className={styles.cartNumber}>4</a>
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
            <div className={styles.socialLogin}>
              <img
                className={styles.socialLoginChild}
                loading="lazy"
                alt=""
                src="/group-1000006198.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <header className={styles.navigationBar} />
          <div className={styles.homeLinkParent}>
            <div className={styles.homeLink}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesParent}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.brandsLink}>
                  <img
                    className={styles.brandsIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
              <div className={styles.productsParent}>
                <a className={styles.products}>Products</a>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
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
      <div className={styles.accountMenu}>
        <div className={styles.accountDropdown}>
          <img
            className={styles.menuDividerIcon}
            loading="lazy"
            alt=""
            src="/line-161.svg"
          />
          <div className={styles.accountOptions}>
            <a className={styles.account}>Home</a>
            <div className={styles.register}>Register</div>
          </div>
        </div>
      </div>
      <RegistrationForm />
      <section className={styles.registerPageInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.userAction}>
            <div className={styles.accountInfo}>
              <b className={styles.alreadyAUser}>Already a User ? Login Now</b>
            </div>
            <div className={styles.ifYouAlready}>
              If you already have an account,please login to access our
              marketplace.
            </div>
          </div>
          <div className={styles.loginAction}>
            <div className={styles.button1} onClick={handleLoginClick}>
              <div className={styles.loginNow}>Login Now</div>
            </div>
          </div>
        </div>
      </section>
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <section className={styles.footerContainer}>
        <footer className={styles.footerContent}>
          <div className={styles.footerBackgroundShapeParent}>
            <div className={styles.footerBackgroundShape} />
            <div className={styles.footerInformation}>
              <div className={styles.footerInformationInner}>
                <div className={styles.contactDetailsParent}>
                  <div className={styles.contactDetails}>
                    <div className={styles.logo3Parent}>
                      <div className={styles.logo3}>
                        <div className={styles.logo11}>
                          <img
                            className={styles.groupIcon}
                            alt=""
                            src="/group-11.svg"
                          />
                          <img
                            className={styles.logo1Child1}
                            alt=""
                            src="/group-61.svg"
                          />
                          <img
                            className={styles.logo1Child2}
                            alt=""
                            src="/group-81.svg"
                          />
                          <div className={styles.subtractGroup}>
                            <img
                              className={styles.subtractIcon1}
                              alt=""
                              src="/subtract-1.svg"
                            />
                            <img
                              className={styles.frameChild1}
                              alt=""
                              src="/vector-1-1.svg"
                            />
                            <div className={styles.vectorGroup}>
                              <img
                                className={styles.frameChild2}
                                alt=""
                                src="/vector-2-1.svg"
                              />
                              <div className={styles.grassRoots1}>
                                <span>Grass</span>
                                <span className={styles.span1}>{` `}</span>
                                <span className={styles.roots1}>Roots</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.logo3Child} />
                        <div className={styles.marketplace1}>MARKETPLACE</div>
                      </div>
                      <div className={styles.contactInformationParent}>
                        <div className={styles.contactInformation}>
                          contact information
                        </div>
                        <div className={styles.frameContainer}>
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
                        <div className={styles.numberBackgroundParent}>
                          <div className={styles.numberBackground}>
                            <img
                              className={styles.numberPaddingIcon}
                              loading="lazy"
                              alt=""
                              src="/frame-1.svg"
                            />
                          </div>
                          <div className={styles.phoneNumberDisplay}>
                            <div className={styles.xxXxxxxXxxxx}>
                              +91 80008 55595
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.overviewParent}>
                        <div className={styles.overview}>overview</div>
                        <div className={styles.overviewIcon}>
                          <img
                            className={styles.overviewIconChild}
                            alt=""
                            src="/home-link-icon.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.homeParent}>
                        <div className={styles.home1}>Home</div>
                        <div className={styles.aboutUs}>About Us</div>
                        <div className={styles.contactUs}>Contact Us</div>
                        <div className={styles.blogs}>Blogs</div>
                        <div className={styles.privacyPolicy}>
                          Privacy policy
                        </div>
                        <div
                          className={styles.termsConditions}
                        >{`Terms & Conditions`}</div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent2}>
                        <div className={styles.categoriesGroup}>
                          <div className={styles.categories1}>Categories</div>
                          <div className={styles.categoryIcons}>
                            <img
                              className={styles.categoryIconImages}
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
                          <div className={styles.manufacturing}>
                            Manufacturing
                          </div>
                          <div className={styles.deliveries}>Deliveries</div>
                          <div className={styles.brands1}>Brands</div>
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.productsGroup}>
                          <div className={styles.products1}>Products</div>
                          <div className={styles.vectorFrame}>
                            <img
                              className={styles.frameChild4}
                              alt=""
                              src="/home-link-icon.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.flowersParent}>
                          <div className={styles.flowers}>Spices</div>
                          <div
                            className={styles.vapePens}
                          >{`Tea & Coffee`}</div>
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
                className={styles.footerBottomBorder}
                alt=""
                src="/footer-divider.svg"
              />
            </div>
            <div className={styles.socialAndDownloads}>
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
                  <div className={styles.button2}>
                    <img
                      className={styles.appStoreFilled}
                      loading="lazy"
                      alt=""
                      src="/app-store--filled.svg"
                    />
                  </div>
                  <div className={styles.button3}>
                    <div className={styles.googlePlay}>
                      <img
                        className={styles.googlePlayIcon}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.googlePlayIcon1}
                        alt=""
                        src="/vector-61.svg"
                      />
                      <div className={styles.googlePlayBadge}>
                        <img
                          className={styles.googlePlayBackground}
                          alt=""
                          src="/vector-7.svg"
                        />
                      </div>
                      <img
                        className={styles.badgeIcon}
                        alt=""
                        src="/vector-8.svg"
                      />
                      <img
                        className={styles.googlePlayBackground1}
                        loading="lazy"
                        alt=""
                        src="/vector-9.svg"
                      />
                      <div className={styles.getItOnContainer}>
                        <div className={styles.getItOn}>GET IT ON</div>
                        <img
                          className={styles.getItOnBackground}
                          loading="lazy"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                      <img
                        className={styles.googlePlayBackground2}
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
            className={styles.nexbloomslogoIcon1}
            loading="lazy"
            alt=""
            src="/nexblooms_logo@2x.png"
          />
          <div className={styles.websiteNameContainer}>
            <img
              className={styles.websiteNameBackground}
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
      </section>
    </div>
  );
};

export default RegisterPage;
