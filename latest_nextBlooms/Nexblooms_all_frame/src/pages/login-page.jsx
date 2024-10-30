import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/account";
import styles from "./login-page.module.css";
import ProductsDropdown from "../components/productsdropdown";
import CategoriesDropdown from "../components/categoriesdropdown";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };
  
  const dropdownLinks = [
    { text: 'Milk', url: '/milk-description' },
    { text: 'Link 2', url: '/link2' },
    { text: 'Link 3', url: '/link3' },
  ];

  const catdropdownLinks = [
    { text: 'Link 1', url: '/link1' },
    { text: 'Link 2', url: '/link2' },
    { text: 'Link 3', url: '/link3' },
  ];

 

  return (
    <div className={styles.loginPage}>
      <header className={styles.deliveryAddressBackgroundParent}>
        <div className={styles.deliveryAddressBackground} />
        <div className={styles.deliveryAddressDetailsWrapper}>
          <div className={styles.deliveryAddressDetails}>
            <div className={styles.cityParent}>
              <div className={styles.city}>
                <div className={styles.cityPincodeParent}>
                  <div className={styles.cityPincode}>
                    <img
                      className={styles.pincodeIcon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.address}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.pincode}>
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
                  <div className={styles.searchPlaceholder}>
                    <a className={styles.searchByProduct}>Search by product</a>
                  </div>
                  <div className={styles.searchIconButtonBackgroundParent}>
                    <div className={styles.searchIconButtonBackground} />
                    <img
                      className={styles.searchIcon}
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
                <div className={styles.filter}>
                  <div className={styles.filterOptions}>
                    <div className={styles.locationIconParent}>
                      <img
                        className={styles.locationIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.currentLocationIconParent}>
                        <div className={styles.currentLocationIcon} />
                        <a className={styles.currentLocation}>4</a>
                      </div>
                    </div>
                    <div className={styles.profile}>
                      <div className={styles.frameGroup}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/group-7401.svg"
                        />
                        <div className={styles.userNameIconParent}>
                          <div className={styles.userNameIcon} />
                          <a className={styles.userName}>4</a>
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
            <div className={styles.button} >
              <a className={styles.login} onClick={handleLoginClick}>Login</a>
            </div>
            <div className={styles.register}>
              <img
                className={styles.registerChild}
                loading="lazy"
                alt=""
                src="/group-1000006198.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationBackground} />
          <div className={styles.categoriesParent}>
            <nav className={styles.categories}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesGroup}>
                <a className={styles.categories1}>
                <CategoriesDropdown title="Dropdown Menu" links={catdropdownLinks} />
                </a>
                
              </div>
              <div className={styles.productsParent}>
                <a className={styles.products}>
                <ProductsDropdown title="Dropdown Menu" links={dropdownLinks} />
                </a>
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
      <Account />
      <section className={styles.footer}>
        <footer className={styles.footerContent}>
          <div className={styles.contactBackgroundParent}>
            <div className={styles.contactBackground} />
            <div className={styles.contactDetails}>
              <div className={styles.contactOptions}>
                <div className={styles.phoneNumberParent}>
                  <div className={styles.phoneNumber}>
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
                        <div className={styles.phoneIconParent}>
                          <div className={styles.phoneIcon}>
                            <img
                              className={styles.icon}
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
                  <div className={styles.contactDivider}>
                    <img
                      className={styles.overviewIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.overviewParent}>
                        <div className={styles.overview}>overview</div>
                        <div className={styles.overviewLink}>
                          <img
                            className={styles.homeLinkIcon}
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
                    <div className={styles.categoriesProducts}>
                      <div className={styles.frameParent2}>
                        <div className={styles.categoriesContainer}>
                          <div className={styles.categories2}>Categories</div>
                          <div className={styles.categoriesIcon}>
                            <img
                              className={styles.productsIcon}
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
                          <div className={styles.vectorContainer}>
                            <img
                              className={styles.frameChild3}
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
                className={styles.footerDividerIcon}
                alt=""
                src="/footer-divider.svg"
              />
            </div>
            <div className={styles.socialApp}>
              <div className={styles.copyright2023GrassRootMaParent}>
                <div
                  className={styles.copyright2023}
                >{`Copyright © 2023 Grass Root Marketplace. All Rights Reserved. `}</div>
                <div className={styles.frameDiv}>
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
                  <div className={styles.button1}>
                    <img
                      className={styles.appStoreFilled}
                      loading="lazy"
                      alt=""
                      src="/app-store--filled.svg"
                    />
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.googlePlay}>
                      <img
                        className={styles.googlePlayIconLeft}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.googlePlayIconLeft1}
                        alt=""
                        src="/vector-61.svg"
                      />
                      <div className={styles.googlePlayIconOne}>
                        <img
                          className={styles.googlePlayIconTwo}
                          alt=""
                          src="/vector-7.svg"
                        />
                      </div>
                      <img
                        className={styles.googlePlayIconThree}
                        alt=""
                        src="/vector-8.svg"
                      />
                      <img
                        className={styles.googlePlayIconFour}
                        loading="lazy"
                        alt=""
                        src="/vector-9.svg"
                      />
                      <div className={styles.googlePlayLabel}>
                        <div className={styles.getItOn}>GET IT ON</div>
                        <img
                          className={styles.getItOnIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                      <img
                        className={styles.googlePlayIconFive}
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
          <div className={styles.screenshotContainer}>
            <img
              className={styles.innerScreenshotContainer}
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
      <img
        className={styles.nexbloomslogoIcon1}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
    </div>
  );
};

export default LoginPage;
