import styles from "./myorder.module.css";

const Myorder = () => {
  return (
    <div className={styles.myorder}>
      <header className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.deliveryAddressContentWrapper}>
          <div className={styles.deliveryAddressContent}>
            <div className={styles.addressDetails}>
              <div className={styles.addressDetailsInner}>
                <div className={styles.addressIconParent}>
                  <div className={styles.addressIcon}>
                    <img
                      className={styles.deliveryPinIcon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.noida201301Parent}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.pincodeIcon}>
                        <img
                          className={styles.searchIcon}
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
                  <div className={styles.searchByProductWrapper}>
                    <a className={styles.searchByProduct}>Search by product</a>
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
                <div className={styles.filters}>
                  <div className={styles.filterOptions}>
                    <div className={styles.filterOneIconParent}>
                      <img
                        className={styles.filterOneIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.filterOneCircleParent}>
                        <div className={styles.filterOneCircle} />
                        <a className={styles.filterOneLabel}>4</a>
                      </div>
                    </div>
                    <div className={styles.filterTwo}>
                      <div className={styles.frameGroup}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/group-7401.svg"
                        />
                        <div className={styles.filterTwoCircleParent}>
                          <div className={styles.filterTwoCircle} />
                          <a className={styles.filterTwoLabel}>4</a>
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
            <div className={styles.deliveryAddressContentInner}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1000006198.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationBackground} />
          <div className={styles.navigationLinksParent}>
            <nav className={styles.navigationLinks}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesParent}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.navigationIcons}>
                  <img
                    className={styles.vectorIcon}
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
      <section className={styles.orderHistory}>
        <div className={styles.orders}>
          <div className={styles.profileOptionsParent}>
            <div className={styles.profileOptions}>
              <div className={styles.accountDetails}>
                <div className={styles.accountLinks}>
                  <img
                    className={styles.linkSeparatorIcon}
                    loading="lazy"
                    alt=""
                    src="/line-166.svg"
                  />
                  <div className={styles.accountNavigation}>
                    <a className={styles.account}>Home</a>
                    <div className={styles.orders1}>Orders</div>
                  </div>
                </div>
                <div className={styles.myOrders}>
                  <div className={styles.myOrder}>My Order</div>
                  <div className={styles.deliveredOrdersWrapper}>
                    <div className={styles.deliveredOrders}>
                      Delivered Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accountActions}>
                <div className={styles.returnOrders}>Return Orders</div>
              </div>
              <div className={styles.accountActions1}>
                <div className={styles.cancelOrders}>Cancel Orders</div>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.lineDiv} />
              <div className={styles.frameChild1} />
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.orderRows}>
              <img
                className={styles.orderContentIcon}
                loading="lazy"
                alt=""
                src="/milk8@2x.png"
              />
              <div className={styles.orderDetails}>
                <div className={styles.orderStatus}>
                  <div className={styles.orderItems}>
                    <h3 className={styles.milk}>Milk</h3>
                    <div className={styles.qty1}>Qty. 1</div>
                  </div>
                  <div className={styles.orderSeparator}>$192.00</div>
                </div>
                <div className={styles.orderId12529085267689043}>
                  Order ID #12529085267689043
                </div>
              </div>
            </div>
            <div className={styles.orderDelivery}>
              <div className={styles.deliveryStatus}>
                <div className={styles.arrivingToday}>{`Arriving Today  `}</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild2} />
                <div className={styles.viewOrderDetails}>
                  View Order Details
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild3} />
            <div className={styles.frameContainer}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/milk8@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.milkParent}>
                    <h3 className={styles.milk1}>Milk</h3>
                    <div className={styles.qty11}>Qty. 1</div>
                  </div>
                  <div className={styles.div}>$192.00</div>
                </div>
                <div className={styles.orderId12529085267689043Wrapper}>
                  <div className={styles.orderId125290852676890431}>
                    Order ID #12529085267689043
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.deliveredParent}>
                <div className={styles.delivered}>Delivered</div>
                <div className={styles.on29Sep23Container}>
                  <span>on</span>
                  <span className={styles.sep23}>
                    <span className={styles.span1}>{` `}</span>
                    <span>29 Sep’23</span>
                  </span>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild4} />
                  <div className={styles.viewOrderDetails1}>
                    View Order Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild5} />
            <div className={styles.frameParent3}>
              <img
                className={styles.frameChild6}
                loading="lazy"
                alt=""
                src="/milk8@2x.png"
              />
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.milkGroup}>
                    <h3 className={styles.milk2}>Milk</h3>
                    <div className={styles.qty12}>Qty. 1</div>
                  </div>
                  <div className={styles.div1}>$192.00</div>
                </div>
                <div className={styles.orderId12529085267689043Container}>
                  <div className={styles.orderId125290852676890432}>
                    Order ID #12529085267689043
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.cancelledWrapper}>
                <div className={styles.cancelled}>Cancelled</div>
              </div>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild7} />
                <div className={styles.viewOrderDetails2}>
                  View Order Details
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild8} />
            <div className={styles.frameParent7}>
              <img
                className={styles.frameChild9}
                loading="lazy"
                alt=""
                src="/milk8@2x.png"
              />
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.milkContainer}>
                    <h3 className={styles.milk3}>Milk</h3>
                    <div className={styles.qty13}>Qty. 1</div>
                  </div>
                  <div className={styles.div2}>$192.00</div>
                </div>
                <div className={styles.orderId12529085267689043Frame}>
                  <div className={styles.orderId125290852676890433}>
                    Order ID #12529085267689043
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.returnRequestedWrapper}>
                <div className={styles.returnRequested}>Return requested</div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild10} />
                <div className={styles.viewOrderDetails3}>
                  View Order Details
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
      <footer className={styles.footerContent}>
        <div className={styles.footerBackgroundParent}>
          <div className={styles.footerBackground} />
          <div className={styles.footerColumnsParent}>
            <div className={styles.footerColumns}>
              <div className={styles.contactDetailsParent}>
                <div className={styles.contactDetails}>
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
                            className={styles.frameChild11}
                            alt=""
                            src="/vector-1-1.svg"
                          />
                          <div className={styles.vectorGroup}>
                            <img
                              className={styles.frameChild12}
                              alt=""
                              src="/vector-2-1.svg"
                            />
                            <div className={styles.grassRoots1}>
                              <span>Grass</span>
                              <span className={styles.span2}>{` `}</span>
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
                      <div className={styles.frameParent11}>
                        <div className={styles.frameFrame}>
                          <img
                            className={styles.frameIcon1}
                            alt=""
                            src="/frame.svg"
                          />
                        </div>
                        <div className={styles.demograssroutescom}>
                          demo@grassroutes.com
                        </div>
                      </div>
                      <div className={styles.numberSpacingParent}>
                        <div className={styles.numberSpacing}>
                          <img
                            className={styles.emptyIcon}
                            loading="lazy"
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
                <div className={styles.divider}>
                  <img
                    className={styles.dividerChild}
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>overview</div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.frameChild13}
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
                  <div className={styles.categoriesAndDispensaries}>
                    <div className={styles.frameParent14}>
                      <div className={styles.categoriesGroup}>
                        <div className={styles.categories1}>Categories</div>
                        <div className={styles.vectorFrame}>
                          <img
                            className={styles.frameChild14}
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
                    <div className={styles.frameParent15}>
                      <div className={styles.productsGroup}>
                        <div className={styles.products1}>Products</div>
                        <div className={styles.vectorWrapper1}>
                          <img
                            className={styles.frameChild15}
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
          <div className={styles.footerContainer}>
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
                      className={styles.googlePlayIcons}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.googlePlayIcons1}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className={styles.playIconContainer}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/vector-8.svg"
                      />
                    </div>
                    <div className={styles.getItOnContainer}>
                      <div className={styles.getItOn}>GET IT ON</div>
                      <img
                        className={styles.vectorIcon2}
                        loading="lazy"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-9.svg"
                    />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-7.svg"
                    />
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
          className={styles.nexbloomslogoIcon1}
          loading="lazy"
          alt=""
          src="/nexblooms_logo@2x.png"
        />
        <div className={styles.frameWrapper1}>
          <img
            className={styles.frameIcon2}
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

export default Myorder;
