import AddressContainer from "../components/address-container";
import ContactInfoContainer from "../components/contact-info-container";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <section className={styles.profileInner}>
        <div className={styles.instanceParent}>
          <header className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.header}>
              <div className={styles.navbar}>
                <div className={styles.navContainer}>
                  <div className={styles.navItems}>
                    <div className={styles.accountDropdownParent}>
                      <div className={styles.accountDropdown}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/pincode-icon.svg"
                        />
                      </div>
                      <div className={styles.deliveryAddressParent}>
                        <a className={styles.deliveryAddress}>
                          Delivery Address
                        </a>
                        <div className={styles.locationContainer}>
                          <a className={styles.noida201301}>Noida 201301</a>
                          <div className={styles.vectorWrapper}>
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameChild} />
                      <div className={styles.searchInput}>
                        <a className={styles.searchByProduct}>
                          Search by product
                        </a>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameItem} />
                        <img
                          className={styles.searchIcon}
                          alt=""
                          src="/search.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.cartContainerWrapper}>
                      <div className={styles.cartContainer}>
                        <div className={styles.cartIconParent}>
                          <img
                            className={styles.cartIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-2.svg"
                          />
                          <div className={styles.ellipseParent}>
                            <div className={styles.frameInner} />
                            <a className={styles.cartItemCount}>4</a>
                          </div>
                        </div>
                        <div className={styles.cartContainerInner}>
                          <div className={styles.frameGroup}>
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group-7401.svg"
                            />
                            <div className={styles.ellipseGroup}>
                              <div className={styles.ellipseDiv} />
                              <a className={styles.wishlistNotificationCount}>
                                4
                              </a>
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
                <div className={styles.navbarInner}>
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/group-1000006198.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.tabsContainerParent}>
                <nav className={styles.tabsContainer}>
                  <a className={styles.home}>Home</a>
                  <div className={styles.categoriesParent}>
                    <a className={styles.categories}>Categories</a>
                    <div className={styles.tabSeparators}>
                      <img
                        className={styles.tabSeparatorIcon}
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.productsParent}>
                    <a className={styles.products}>Products</a>
                    <div className={styles.vectorContainer}>
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
          <div className={styles.profileContainerWrapper}>
            <div className={styles.profileContainer}>
              <div className={styles.profileContent}>
                <div className={styles.profileHeader}>
                  <img
                    className={styles.profileSeparatorIcon}
                    loading="lazy"
                    alt=""
                    src="/line-1614.svg"
                  />
                  <div className={styles.profileOptions}>
                    <a className={styles.account}>Home</a>
                    <div className={styles.profile1}>Profile</div>
                  </div>
                </div>
                <h3 className={styles.profile2}>Profile</h3>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild4} />
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
                  <div className={styles.editButton}>
                    <div className={styles.editIconContainer}>
                      <img
                        className={styles.editIcon}
                        loading="lazy"
                        alt=""
                        src="/edit.svg"
                      />
                      <div className={styles.profilePicture}>
                        <img
                          className={styles.profilePictureChild}
                          loading="lazy"
                          alt=""
                          src="/profile-pic@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.userName}>
                    <div className={styles.userNameContainer}>
                      <div className={styles.sujeetKumarWrapper}>
                        <div className={styles.sujeetKumar}>Sujeet Kumar</div>
                      </div>
                      <div className={styles.justLivingMy}>
                        {" "}
                        “Just living my best life ! ”
                      </div>
                    </div>
                  </div>
                  <div className={styles.emailContainerParent}>
                    <div className={styles.emailContainer}>
                      <img
                        className={styles.emailContainerChild}
                        alt=""
                        src="/group-1000006070.svg"
                      />
                    </div>
                    <div className={styles.emailAddress}>
                      <div className={styles.emailAddressContainer}>
                        <div className={styles.emailAddressIconWrapper}>
                          <div className={styles.emailAddressIcon}>
                            <img
                              className={styles.emailAddressIconChild}
                              loading="lazy"
                              alt=""
                              src="/group-1000006069.svg"
                            />
                            <div className={styles.emailDomain}>
                              <div className={styles.div}>+91 0123456789</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sujeetkumar124gmailcom}>
                          SujeetKumar124@GMAIL.COM
                        </div>
                      </div>
                      <div className={styles.emailVerified}>
                        <img
                          className={styles.emailVerifiedChild}
                          loading="lazy"
                          alt=""
                          src="/group-10000060201.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameChild6}
                    loading="lazy"
                    alt=""
                    src="/group-1000006078.svg"
                  />
                </div>
                <div className={styles.savedAddressesContainerWrapper}>
                  <div className={styles.savedAddressesContainer}>
                    <div className={styles.savedAddressesContent}>
                      <div className={styles.savedAddressesHeader}>
                        <div className={styles.savedAddress}>Saved Address</div>
                        <div className={styles.savedAddressesSeparator} />
                      </div>
                      <div className={styles.addressList}>
                        <AddressContainer group1000006418="/group-1000006418.svg" />
                        <AddressContainer group1000006418="/group-10000064181.svg" />
                      </div>
                    </div>
                    <div className={styles.newAddressSeparator}>
                      <div className={styles.newAddressSeparatorChild} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild7} />
                        <img
                          className={styles.frameChild8}
                          alt=""
                          src="/group-1000005993.svg"
                        />
                        <div className={styles.addNewAddress}>
                          <div className={styles.addNewAddress1}>
                            Add New Address
                          </div>
                        </div>
                      </div>
                    </div>
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
      <ContactInfoContainer />
    </div>
  );
};

export default Profile;
