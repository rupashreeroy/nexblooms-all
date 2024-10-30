import CartItemRow from "../components/cart-item-row";
import styles from "./donation-checkbox.module.css";

const DonationCheckbox = () => {
  return (
    <div className={styles.donationCheckbox}>
      <section className={styles.header}>
        <header className={styles.logoBackgroundParent}>
          <div className={styles.logoBackground} />
          <div className={styles.brandNameWrapper}>
            <div className={styles.brandName}>
              <div className={styles.brandSlogan}>
                <div className={styles.brandDescription}>
                  <div className={styles.searchBarParent}>
                    <div className={styles.searchBar}>
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/pincode-icon.svg"
                      />
                    </div>
                    <div className={styles.deliveryAddressParent}>
                      <a className={styles.deliveryAddress}>Delivery Address</a>
                      <div className={styles.city}>
                        <a className={styles.noida201301}>Noida 201301</a>
                        <div className={styles.cityIcon}>
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
                  <div className={styles.searchFieldBackgroundParent}>
                    <div className={styles.searchFieldBackground} />
                    <div className={styles.searchPlaceholder}>
                      <a className={styles.searchByProduct}>
                        Search by product
                      </a>
                    </div>
                    <div className={styles.searchIconBackgroundParent}>
                      <div className={styles.searchIconBackground} />
                      <img
                        className={styles.searchIcon1}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.userActions}>
                    <div className={styles.cartAndProfile}>
                      <div className={styles.profileIconParent}>
                        <img
                          className={styles.profileIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className={styles.notificationCircleParent}>
                          <div className={styles.notificationCircle} />
                          <a className={styles.notificationCount}>4</a>
                        </div>
                      </div>
                      <div className={styles.cart}>
                        <div className={styles.frameGroup}>
                          <img
                            className={styles.frameChild}
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
              <div className={styles.language}>
                <img
                  className={styles.languageChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000006198.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentBackground} />
            <div className={styles.headerLinksParent}>
              <nav className={styles.headerLinks}>
                <a className={styles.home}>Home</a>
                <div className={styles.categoriesParent}>
                  <a className={styles.categories}>Categories</a>
                  <div className={styles.headerLinkIcon}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.productsParent}>
                  <a className={styles.products}>Products</a>
                  <div className={styles.vectorWrapper}>
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
        <div className={styles.main}>
          <div className={styles.body}>
            <div className={styles.pageContent}>
              <div className={styles.roadmap}>
                <a className={styles.account}>Home</a>
                <img
                  className={styles.roadmapChild}
                  loading="lazy"
                  alt=""
                  src="/line-131.svg"
                />
                <div className={styles.nothing}>Top Cannabis Products</div>
                <img
                  className={styles.roadmapItem}
                  alt=""
                  src="/line-143.svg"
                />
                <div className={styles.nothing1}>Product</div>
                <img
                  className={styles.roadmapInner}
                  alt=""
                  src="/line-153.svg"
                />
                <div className={styles.nothing2}>View Cart</div>
                <img className={styles.lineIcon} alt="" src="/line-163.svg" />
                <div className={styles.nothing3}>My Cart</div>
              </div>
            </div>
            <h3 className={styles.myCart}>My Cart</h3>
            <div className={styles.cartDetails}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <CartItemRow cartItemImage="/milk7@2x.png" />
                <div className={styles.cartItemRow} />
                <CartItemRow cartItemImage="/milk1@2x.png" />
                <div className={styles.cartItemRow1} />
                <CartItemRow cartItemImage="/milk1@2x.png" />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild1} />
                  <div className={styles.donationContent}>
                    <div className={styles.donationHeader}>
                      <div className={styles.donationTitle}>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild2} />
                          <img
                            className={styles.heartIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-82.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.donationParent}>
                        <b className={styles.donation}>Donation</b>
                        <div className={styles.donationDescription}>
                          <div className={styles.donationLink}>
                            <div className={styles.readMore}>read more</div>
                            <div
                              className={
                                styles.nexbloomsMarketplaceCommunitContainer
                              }
                            >
                              <p
                                className={styles.nexbloomsMarketplaceCommunit}
                              >
                                NEXBlooms marketplace community
                              </p>
                              <p
                                className={styles.revitalizationInitiativeFuel}
                              >
                                revitalization initiative fuelled...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.donationContentChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000006137.svg"
                    />
                  </div>
                  <div className={styles.societyDropdown}>
                    <div className={styles.society}>Society</div>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameChild3} />
                      <div className={styles.select}>Select</div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.polygonIcon}
                          alt=""
                          src="/polygon-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild4} />
                  <b className={styles.orderDetails}>Order Details</b>
                  <div className={styles.orderDetailsContent}>
                    <div className={styles.orderDetailsItems}>
                      <div className={styles.orderCharges}>
                        <div className={styles.subtotal}>Subtotal</div>
                        <div className={styles.discount}>Discount</div>
                        <div className={styles.shippingCharge}>
                          Shipping Charge
                        </div>
                        <div className={styles.tax}>Tax</div>
                        <div className={styles.donationRow}>
                          <div className={styles.donation1}>Donation</div>
                          <div className={styles.removeDonation}>
                            <div className={styles.remove}>Remove</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.valuePlaceholder}>
                        <div className={styles.valueList}>$576.00</div>
                        <div className={styles.valueList1}>-$113.00</div>
                        <div className={styles.valueList2}>$15.00</div>
                        <div className={styles.valueList3}>$7.00</div>
                        <div className={styles.valueList4}>$1.00</div>
                      </div>
                    </div>
                    <div className={styles.lineParent}>
                      <div className={styles.lineDiv} />
                      <div className={styles.subtotalRow}>
                        <div className={styles.subtotalLabel}>
                          <div className={styles.subTotal}>Sub Total</div>
                        </div>
                        <b className={styles.subtotalValue}>$487.00</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.proceedToCheckout}>
                    Proceed to Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <footer className={styles.footer}>
        <div className={styles.footerBackgroundParent}>
          <div className={styles.footerBackground} />
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.contactInfoHeaderParent}>
                <div className={styles.contactInfoHeader}>
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
                            className={styles.frameChild5}
                            alt=""
                            src="/vector-1-1.svg"
                          />
                          <div className={styles.vectorGroup}>
                            <img
                              className={styles.frameChild6}
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
                      <div className={styles.frameParent1}>
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
                      <div className={styles.addressPlaceholderParent}>
                        <div className={styles.addressPlaceholder}>
                          <img
                            className={styles.addressContainerIcon}
                            loading="lazy"
                            alt=""
                            src="/frame-1.svg"
                          />
                        </div>
                        <div className={styles.addressRow}>
                          <div className={styles.xxXxxxxXxxxx}>
                            +91 80008 55595
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dividerIconWrapper}>
                  <img
                    className={styles.dividerIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
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
                      <a className={styles.privacyPolicy}>Privacy policy</a>
                      <div
                        className={styles.termsConditions}
                      >{`Terms & Conditions`}</div>
                    </div>
                  </div>
                  <div className={styles.footerNavigation}>
                    <div className={styles.frameParent4}>
                      <div className={styles.categoriesGroup}>
                        <div className={styles.categories1}>Categories</div>
                        <div className={styles.primaryIcon}>
                          <img
                            className={styles.primaryIconChild}
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
                    <div className={styles.frameParent5}>
                      <div className={styles.productsGroup}>
                        <div className={styles.products1}>Products</div>
                        <div className={styles.vectorFrame}>
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
              className={styles.footerDividerIcon}
              alt=""
              src="/footer-divider.svg"
            />
          </div>
          <div className={styles.appDownload}>
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
                      className={styles.playIconElements}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.playIconElements1}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className={styles.playIconBackground}>
                      <img
                        className={styles.backgroundShapeIcon}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                    <img
                      className={styles.playIconTriangle}
                      alt=""
                      src="/vector-8.svg"
                    />
                    <img
                      className={styles.playIconShape}
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
                    <div className={styles.playStoreLabel}>
                      <div className={styles.getItOn}>GET IT ON</div>
                      <img
                        className={styles.vectorIcon3}
                        loading="lazy"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                    <img
                      className={styles.labelShapeIcon}
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
        <div className={styles.websiteLink}>
          <img
            className={styles.linkContainerIcon}
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

export default DonationCheckbox;
