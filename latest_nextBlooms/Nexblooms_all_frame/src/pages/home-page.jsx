import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import Items from "../components/items";
import FrameComponent5 from "../components/frame-component5";
import GroupComponent4 from "../components/group-component4";
import FrameComponent6 from "../components/frame-component6";
import GroupComponent3 from "../components/group-component3";
import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.homePageInner}>
        <div className={styles.rectangleParent}>
          <header className={styles.instanceChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.groupDiv}>
                    <div className={styles.searchPlaceholderIconWrapper}>
                      <img
                        className={styles.searchPlaceholderIcon}
                        alt=""
                        src="/pincode-icon.svg"
                      />
                    </div>
                    <div className={styles.deliveryAddressParent}>
                      <a className={styles.deliveryAddress}>Delivery Address</a>
                      <div className={styles.noida201301Parent}>
                        <a className={styles.noida201301}>Noida 201301</a>
                        <div className={styles.locationIconWrapper}>
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
                <div className={styles.frameParent1}>
                  <div className={styles.userAvatarBackgroundParent}>
                    <div className={styles.userAvatarBackground} />
                    <div className={styles.searchByProductWrapper}>
                      <a className={styles.searchByProduct}>
                        Search by product
                      </a>
                    </div>
                    <div className={styles.searchProductIconBackgroundParent}>
                      <div className={styles.searchProductIconBackground} />
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent2}>
                      <div className={styles.cartIconParent}>
                        <img
                          className={styles.cartIcon}
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className={styles.cartItemCountBackgroundParent}>
                          <div className={styles.cartItemCountBackground} />
                          <a className={styles.cartItemCount}>4</a>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.frameParent3}>
                          <img
                            className={styles.frameChild}
                            alt=""
                            src="/group-7401.svg"
                          />
                          <div
                            className={styles.notificationBadgeBackgroundParent}
                          >
                            <div
                              className={styles.notificationBadgeBackground}
                            />
                            <a className={styles.notificationBadgeCount}>4</a>
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
              <div className={styles.frameWrapper2}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-1000006198.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationBarBackgroundParent}>
            <div className={styles.navigationBarBackground} />
            <div className={styles.frameParent4}>
              <div className={styles.homeParent}>
                <a className={styles.home}>Home</a>
                <div className={styles.categoriesParent}>
                  <a className={styles.categories}>Categories</a>
                  <div className={styles.navigationLinksIconsWrapper}>
                    <img
                      className={styles.navigationLinksIcons}
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
      </section>
      <FrameComponent3 />
      <FrameComponent4 />
      <Items />
      <FrameComponent5 />
      <GroupComponent4 />
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <FrameComponent6 />
      <section className={styles.cancerFreeSpices}>
        <img
          className={styles.cancerFreeSpicesChild}
          alt=""
          src="/rectangle-4419@2x.png"
        />
        <h3 className={styles.noMoreFearContainer}>
          <p
            className={styles.noMoreFear}
          >{`No more fear of causing cancer ,100% natural `}</p>
          <p className={styles.eatHealthy}> Eat healthy - Stay healthy</p>
        </h3>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerBackgroundParent}>
          <div className={styles.footerBackground} />
          <div className={styles.footerColumns}>
            <div className={styles.footerColumnsInner}>
              <div className={styles.contactInfoTitleParent}>
                <div className={styles.contactInfoTitle}>
                  <div className={styles.logo3Parent}>
                    <div className={styles.logo3}>
                      <div className={styles.logo11}>
                        <img
                          className={styles.logo1Child1}
                          alt=""
                          src="/group-11.svg"
                        />
                        <img
                          className={styles.logo1Child2}
                          alt=""
                          src="/group-61.svg"
                        />
                        <img
                          className={styles.logo1Child3}
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
                      <div className={styles.frameParent5}>
                        <div className={styles.frameFrame}>
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
                      <div className={styles.contactIconParent}>
                        <div className={styles.contactIcon}>
                          <img
                            className={styles.phoneIcon}
                            alt=""
                            src="/frame-1.svg"
                          />
                        </div>
                        <div className={styles.phoneNumber}>
                          <div className={styles.xxXxxxxXxxxx}>
                            +91 80008 55595
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footerLinks}>
                  <img
                    className={styles.footerLinksIcon}
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
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
                    <div className={styles.homeGroup}>
                      <div className={styles.home1}>Home</div>
                      <div className={styles.aboutUs}>About Us</div>
                      <div className={styles.contactUs}>Contact Us</div>
                      <div className={styles.blogs}>Blogs</div>
                      <a className={styles.privacyPolicy}>Privacy policy</a>
                      <div
                        className={styles.termsConditions}
                      >{`Terms & Conditions`}</div>
                    </div>
                  </div>
                  <div className={styles.footerCategories}>
                    <GroupComponent3
                      categories="Categories"
                      dispensaries="Online Marketing"
                      cultivation="Transaction Processng"
                      manufacturing="Manufacturing"
                      deliveries="Deliveries"
                      brands="Brands"
                    />
                    <GroupComponent3
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
              className={styles.bottomFooterIcon}
              alt=""
              src="/footer-divider.svg"
            />
          </div>
          <div className={styles.socialMedia}>
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
                      className={styles.googlePlayIcon}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.googlePlayIcon1}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className={styles.googlePlaySeparator}>
                      <img
                        className={styles.leftSeparatorIcon}
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
                      alt=""
                      src="/vector-9.svg"
                    />
                    <div className={styles.getItOnParent}>
                      <div className={styles.getItOn}>GET IT ON</div>
                      <img
                        className={styles.googlePlayBottomSeparator}
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                    <img
                      className={styles.rightSeparatorIcon}
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
          alt=""
          src="/nexblooms_logo@2x.png"
        />
        <div className={styles.emptyFooterContentWrapper}>
          <img className={styles.emptyFooterContent} alt="" src="/frame.svg" />
        </div>
        <div className={styles.demonexbloomscom}>info@nexblooms.com</div>
        <div
          className={styles.copyright2024}
        >{`Copyright © 2024 NEXBlooms Marketplace. All Rights Reserved. `}</div>
      </footer>
    </div>
  );
};

export default HomePage;
