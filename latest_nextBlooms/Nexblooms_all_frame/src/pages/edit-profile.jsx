import ProfileEditForm from "../components/profile-edit-form";
import styles from "./edit-profile.module.css";

const EditProfile = () => {
  return (
    <div className={styles.editProfile}>
      <section className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1000006011.svg"
        />
        <div className={styles.frameGroup}>
          <header className={styles.accountParent}>
            <a className={styles.account}>Home</a>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/line-1615.svg"
            />
            <div className={styles.editProfile1}>Edit Profile</div>
            <div className={styles.searchAddressBackgroundParent}>
              <div className={styles.searchAddressBackground} />
              <div className={styles.searchAddressContent}>
                <div className={styles.deliveryAddressContentParent}>
                  <div className={styles.deliveryAddressContent}>
                    <div className={styles.deliveryAddressContentInner}>
                      <div className={styles.frameContainer}>
                        <div className={styles.locationIconWrapper}>
                          <img
                            className={styles.locationIcon}
                            alt=""
                            src="/pincode-icon.svg"
                          />
                        </div>
                        <div className={styles.deliveryAddressParent}>
                          <a className={styles.deliveryAddress}>
                            Delivery Address
                          </a>
                          <div className={styles.deliveryAddressValue}>
                            <a className={styles.noida201301}>Noida 201301</a>
                            <div className={styles.vectorWrapper}>
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
                    <div className={styles.groupDiv}>
                      <div className={styles.searchProductBackgroundParent}>
                        <div className={styles.searchProductBackground} />
                        <div className={styles.searchByProductWrapper}>
                          <a className={styles.searchByProduct}>
                            Search by product
                          </a>
                        </div>
                        <div className={styles.searchItemBackgroundParent}>
                          <div className={styles.searchItemBackground} />
                          <img
                            className={styles.searchIcon}
                            alt=""
                            src="/search.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.filterIconParent}>
                            <img
                              className={styles.filterIcon}
                              loading="lazy"
                              alt=""
                              src="/vector-2.svg"
                            />
                            <div
                              className={styles.filterCounterBackgroundParent}
                            >
                              <div className={styles.filterCounterBackground} />
                              <a className={styles.filterCounterValue}>4</a>
                            </div>
                          </div>
                          <div className={styles.frameWrapper1}>
                            <div className={styles.frameParent1}>
                              <img
                                className={styles.frameInner}
                                loading="lazy"
                                alt=""
                                src="/group-7401.svg"
                              />
                              <div className={styles.ellipseParent}>
                                <div className={styles.ellipseDiv} />
                                <a className={styles.a}>4</a>
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
                              className={styles.frameChild1}
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
                  <div className={styles.frameWrapper2}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group-1000006198.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.bottomNavigationBackgroundParent}>
                <div className={styles.bottomNavigationBackground} />
                <div className={styles.navigationLinksParent}>
                  <nav className={styles.navigationLinks}>
                    <a className={styles.home}>Home</a>
                    <div className={styles.categoriesParent}>
                      <a className={styles.categories}>Categories</a>
                      <div className={styles.linkIconsWrapper}>
                        <img
                          className={styles.linkIcons}
                          alt=""
                          src="/vector-3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.productsParent}>
                      <a className={styles.products}>Products</a>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon1}
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
          <div className={styles.editProfileWrapper}>
            <h3 className={styles.editProfile2}>Edit Profile</h3>
          </div>
        </div>
        <img
          className={styles.nexbloomslogoIcon}
          alt=""
          src="/nexblooms_logo@2x.png"
        />
      </section>
      <ProfileEditForm />
      <footer className={styles.instanceParent}>
        <div className={styles.footerBackgroundParent}>
          <div className={styles.footerBackground} />
          <div className={styles.footerColumnsParent}>
            <div className={styles.footerColumns}>
              <div className={styles.contactInfoContentParent}>
                <div className={styles.contactInfoContent}>
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
                            className={styles.frameChild3}
                            alt=""
                            src="/vector-1-1.svg"
                          />
                          <div className={styles.vectorGroup}>
                            <img
                              className={styles.frameChild4}
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
                      <div className={styles.frameParent2}>
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
                      <div className={styles.phoneContainerParent}>
                        <div className={styles.phoneContainer}>
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
                <div className={styles.divider}>
                  <img
                    className={styles.dividerChild}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>overview</div>
                      <div className={styles.vectorFrame}>
                        <img
                          className={styles.frameChild5}
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
                      <div className={styles.privacyPolicy}>Privacy policy</div>
                      <div
                        className={styles.termsConditions}
                      >{`Terms & Conditions`}</div>
                    </div>
                  </div>
                  <div className={styles.menu}>
                    <div className={styles.frameParent5}>
                      <div className={styles.categoriesGroup}>
                        <div className={styles.categories1}>Categories</div>
                        <div className={styles.vectorWrapper1}>
                          <img
                            className={styles.frameChild6}
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
                    <div className={styles.frameParent6}>
                      <div className={styles.productsGroup}>
                        <div className={styles.products1}>Products</div>
                        <div className={styles.vectorWrapper2}>
                          <img
                            className={styles.frameChild7}
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
              className={styles.frameChild8}
              alt=""
              src="/footer-divider.svg"
            />
          </div>
          <div className={styles.footer}>
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
                      className={styles.playBadgeIcon}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.playBadgeIcon1}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className={styles.badgeContainer}>
                      <img
                        className={styles.badgeElementIcon}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                    <img
                      className={styles.badgeBackgroundIcon}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
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
                      className={styles.downloadBackgroundIcon}
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
        <div className={styles.frameWrapper3}>
          <img
            className={styles.frameIcon1}
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
    </div>
  );
};

export default EditProfile;
