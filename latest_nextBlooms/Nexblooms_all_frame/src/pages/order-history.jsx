import styles from "./order-history.module.css";

const OrderHistory = () => {
  return (
    <div className={styles.orderHistory}>
      <header className={styles.productImageParent}>
        <div className={styles.productImage} />
        <div className={styles.productDetailsWrapper}>
          <div className={styles.productDetails}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.deliveryIconParent}>
                  <div className={styles.deliveryIcon}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/pincode-icon.svg"
                    />
                  </div>
                  <div className={styles.deliveryAddressParent}>
                    <a className={styles.deliveryAddress}>Delivery Address</a>
                    <div className={styles.location}>
                      <a className={styles.noida201301}>Noida 201301</a>
                      <div className={styles.pincodeIconWrapper}>
                        <img
                          className={styles.pincodeIcon}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.searchBoxParent}>
                  <div className={styles.searchBox} />
                  <div className={styles.searchByProductWrapper}>
                    <a className={styles.searchByProduct}>Search by product</a>
                  </div>
                  <div className={styles.searchBackgroundParent}>
                    <div className={styles.searchBackground} />
                    <img
                      className={styles.searchIcon}
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
                <div className={styles.profileOptionsWrapper}>
                  <div className={styles.profileOptions}>
                    <div className={styles.bellIconParent}>
                      <img
                        className={styles.bellIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className={styles.countCircleParent}>
                        <div className={styles.countCircle} />
                        <a className={styles.count}>4</a>
                      </div>
                    </div>
                    <div className={styles.cart}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/group-7401.svg"
                        />
                        <div className={styles.cartCountCircleParent}>
                          <div className={styles.cartCountCircle} />
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
            <div className={styles.productDetailsInner}>
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
          <div className={styles.navigationItemsParent}>
            <nav className={styles.navigationItems}>
              <a className={styles.home}>Home</a>
              <div className={styles.categoriesParent}>
                <a className={styles.categories}>Categories</a>
                <div className={styles.linkIcons}>
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
      <section className={styles.content}>
        <div className={styles.orderDetailsHeaderParent}>
          <div className={styles.orderDetailsHeader}>
            <div className={styles.roadmap}>
              <a className={styles.account}>Home</a>
              <img
                className={styles.separatorIcon}
                loading="lazy"
                alt=""
                src="/line-134.svg"
              />
              <div className={styles.nothing}>Top Cannabis Products</div>
              <img className={styles.roadmapChild} alt="" src="/line-145.svg" />
              <div className={styles.nothing1}>Product</div>
              <img className={styles.roadmapItem} alt="" src="/line-155.svg" />
              <div className={styles.nothing2}>View Cart</div>
              <img className={styles.roadmapInner} alt="" src="/line-167.svg" />
              <div className={styles.nothing3}>Order History</div>
            </div>
          </div>
          <h3 className={styles.orderDetails}>Order Details</h3>
          <div className={styles.orderContent}>
            <div className={styles.orderItems}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.orderTitle}>
                  <div className={styles.order98653214578899865Container}>
                    <span className={styles.order}>
                      <span>Order</span>
                      <span className={styles.span1}>{` `}</span>
                      <span className={styles.span2}>#</span>
                    </span>
                    <i className={styles.i}>{` `}</i>
                    <b>986-5321-457889-9865</b>
                  </div>
                  <div className={styles.titleSeparator} />
                </div>
                <div className={styles.orderDetails1}>
                  <div className={styles.orderSummary}>
                    <div className={styles.orderItemsDetails}>
                      <img
                        className={styles.itemDetailsIcon}
                        loading="lazy"
                        alt=""
                        src="/milk1@2x.png"
                      />
                      <div className={styles.itemInfo}>
                        <div className={styles.itemNameAndQuantity}>
                          <h3 className={styles.milk}>Milk</h3>
                          <div className={styles.qty1}>Qty. 1</div>
                        </div>
                        <div className={styles.itemPrice}>$192.00</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameChild1} />
                    <div className={styles.cancel}>Cancel</div>
                  </div>
                </div>
              </div>
              <div className={styles.button1}>
                <div
                  className={styles.downloadInvoice}
                >{`Download Invoice `}</div>
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download.svg"
                />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild2} />
                <b className={styles.shippingDetails}>Shipping Details</b>
                <div className={styles.shippingAddress}>
                  <div className={styles.sujeetKumarSingh}>
                    Sujeet Kumar Singh
                  </div>
                  <div className={styles.addressAndPayment}>
                    <div className={styles.phase2IndustrialContainer}>
                      <p className={styles.phase2Industrial}>
                        Phase 2, Industrial Area, Sector 62, Ghaziabad,
                      </p>
                      <p className={styles.uttarPradesh201309}>
                        Uttar Pradesh, 201309
                      </p>
                      <p className={styles.phoneNumber919889653254}>
                        Phone Number+91 9889653254
                      </p>
                    </div>
                    <div className={styles.paymentUpiContainer}>
                      <span className={styles.payment}>{`Payment : `}</span>
                      <b>UPI</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-105.svg"
                />
                <b className={styles.orderStatus}>Order Status</b>
                <div className={styles.orderStatusContent}>
                  <div className={styles.statusStepsParent}>
                    <div className={styles.statusSteps}>
                      <div className={styles.statusIcons}>
                        <img
                          className={styles.statusIconsChild}
                          loading="lazy"
                          alt=""
                          src="/group-946.svg"
                        />
                      </div>
                      <div className={styles.orderStatusLabelsParent}>
                        <div className={styles.orderStatusLabels}>
                          <div className={styles.ordered}>Ordered</div>
                          <div className={styles.statusDate}>
                            <div className={styles.mon04042023}>
                              Mon, 04-04-2023
                            </div>
                          </div>
                        </div>
                        <div className={styles.orderStatusLabels1}>
                          <div className={styles.shipped}>Shipped</div>
                          <div className={styles.wed05042023Wrapper}>
                            <div className={styles.wed05042023}>
                              Wed, 05-04-2023
                            </div>
                          </div>
                        </div>
                        <div className={styles.outForDelivery}>
                          <div className={styles.outForDelivery1}>
                            Out For Delivery
                          </div>
                        </div>
                        <div className={styles.delivered}>Delivered</div>
                      </div>
                    </div>
                    <div className={styles.pendingDeliveryStatus}>
                      <div className={styles.itemYetTo}>
                        Item yet to be delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild3} />
                <b className={styles.billDetails}>Bill Details</b>
                <div className={styles.billItemsList}>
                  <div className={styles.billItems}>
                    <div className={styles.cannabisOil}>Cannabis Oil</div>
                    <div className={styles.discount}>Discount</div>
                    <div className={styles.shippingCharge}>Shipping Charge</div>
                    <div className={styles.tax}>Tax</div>
                    <div className={styles.donation}>Donation</div>
                  </div>
                  <div className={styles.billItems1}>
                    <div className={styles.div}>$192.00</div>
                    <div className={styles.div1}>-$40.00</div>
                    <div className={styles.div2}>$15.00</div>
                    <div className={styles.div3}>$7.00</div>
                    <div className={styles.div4}>$1.00</div>
                  </div>
                </div>
                <div className={styles.subtotalDividerParent}>
                  <div className={styles.subtotalDivider} />
                  <div className={styles.subtotalValueContainerParent}>
                    <div className={styles.subtotalValueContainer}>
                      <div className={styles.subTotal}>Sub Total</div>
                    </div>
                    <b className={styles.subtotalAmount}>$175.00</b>
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
      <footer className={styles.instanceParent}>
        <div className={styles.footerBackgroundParent}>
          <div className={styles.footerBackground} />
          <div className={styles.footerContent}>
            <div className={styles.footerContentInner}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
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
                            className={styles.frameChild4}
                            alt=""
                            src="/vector-1-1.svg"
                          />
                          <div className={styles.vectorContainer}>
                            <img
                              className={styles.frameChild5}
                              alt=""
                              src="/vector-2-1.svg"
                            />
                            <div className={styles.grassRoots1}>
                              <span>Grass</span>
                              <span className={styles.span3}>{` `}</span>
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
                      <div className={styles.contactPlaceholderParent}>
                        <div className={styles.contactPlaceholder}>
                          <img
                            className={styles.contactPlaceholderIcon}
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
                <div className={styles.footerNavigationDivider}>
                  <img
                    className={styles.footerNavigationDividerChild}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>overview</div>
                      <div className={styles.overviewIconContainer}>
                        <img
                          className={styles.overviewIcon}
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
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                      <div className={styles.categoriesGroup}>
                        <div className={styles.categories1}>Categories</div>
                        <div className={styles.categoryLinkIcons}>
                          <img
                            className={styles.categoryLinkIcon}
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
                    <div className={styles.frameParent7}>
                      <div className={styles.productsGroup}>
                        <div className={styles.products1}>Products</div>
                        <div className={styles.vectorFrame}>
                          <img
                            className={styles.frameChild6}
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
              className={styles.footerBackgroundCurve}
              alt=""
              src="/footer-divider.svg"
            />
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.copyright2023GrassRootMaParent}>
              <div
                className={styles.copyright2023}
              >{`Copyright © 2023 Grass Root Marketplace. All Rights Reserved. `}</div>
              <div className={styles.socialMediaIconsContainer}>
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
                      className={styles.googlePlayIconSet}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <img
                      className={styles.googlePlayIconSet1}
                      alt=""
                      src="/vector-61.svg"
                    />
                    <div className={styles.googlePlayBadgeContainer}>
                      <img
                        className={styles.googlePlayBadge}
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

export default OrderHistory;