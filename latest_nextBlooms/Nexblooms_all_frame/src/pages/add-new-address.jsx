import AddressPreview from "../components/address-preview";
import SocialIcons from "../components/social-icons";
import styles from "./add-new-address.module.css";

const AddNewAddress = () => {
  return (
    <div className={styles.addNewAddress}>
      <div className={styles.profile}>Profile</div>
      <div className={styles.instanceParent}>
        <div className={styles.headerBackgroundParent}>
          <header className={styles.headerBackground} />
          <div className={styles.searchAddress}>
            <div className={styles.addressInput}>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.pincodeIconParent}>
                    <div className={styles.pincodeIcon}>
                      <img
                        className={styles.deliveryAddressIcon}
                        alt=""
                        src="/pincode-icon.svg"
                      />
                    </div>
                    <div className={styles.deliveryAddressParent}>
                      <a className={styles.deliveryAddress}>Delivery Address</a>
                      <div className={styles.location}>
                        <a className={styles.noida201301}>Noida 201301</a>
                        <div className={styles.locationIcon}>
                          <img
                            className={styles.locationPinIcon}
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.searchInputBackgroundParent}>
                    <div className={styles.searchInputBackground} />
                    <div className={styles.searchByProductWrapper}>
                      <a className={styles.searchByProduct}>
                        Search by product
                      </a>
                    </div>
                    <div className={styles.searchIconBackgroundParent}>
                      <div className={styles.searchIconBackground} />
                      <img
                        className={styles.searchIcon}
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.userCart}>
                    <div className={styles.userOptions}>
                      <div className={styles.notificationIconParent}>
                        <img
                          className={styles.notificationIcon}
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div
                          className={styles.notificationCountBackgroundParent}
                        >
                          <div className={styles.notificationCountBackground} />
                          <a className={styles.a}>4</a>
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
                          <div className={styles.ellipseParent}>
                            <div className={styles.frameItem} />
                            <a className={styles.a1}>4</a>
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
                          className={styles.frameInner}
                          alt=""
                          src="/vector-11.svg"
                        />
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.vectorIcon}
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
              <div className={styles.user}>
                <img
                  className={styles.userChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000006198.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navigationBarBackground} />
            <div className={styles.navigationLinksParent}>
              <div className={styles.navigationLinks}>
                <a className={styles.home}>Home</a>
                <div className={styles.categoriesParent}>
                  <a className={styles.categories}>Categories</a>
                  <div className={styles.categoryIcon}>
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
        <img
          className={styles.nexbloomslogoIcon}
          alt=""
          src="/nexblooms_logo@2x.png"
        />
      </div>
      <section className={styles.account}>
        <a className={styles.account1}>Home</a>
        <div className={styles.accountBackground} />
        <div className={styles.profile1}>
          <div className={styles.profileDetails}>
            <img
              className={styles.profileDividerIcon}
              loading="lazy"
              alt=""
              src="/line-1616.svg"
            />
            <h2 className={styles.profile2}>Profile</h2>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild1} />
                <div className={styles.editProfileOption}>
                  <div className={styles.editProfileButton}>
                    <img
                      className={styles.editIcon}
                      loading="lazy"
                      alt=""
                      src="/edit.svg"
                    />
                    <div className={styles.editProfileIconBackground}>
                      <img
                        className={styles.editProfileIconCircle}
                        loading="lazy"
                        alt=""
                        src="/profile-pic@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.userName}>
                  <div className={styles.userNameDetails}>
                    <div className={styles.sujeetKumarWrapper}>
                      <h3 className={styles.sujeetKumar}>Sujeet Kumar</h3>
                    </div>
                    <div className={styles.justLivingMy}>
                      {" "}
                      “Just living my best life ! ”
                    </div>
                  </div>
                </div>
                <div className={styles.userEmail}>
                  <div className={styles.userEmailDetails}>
                    <img
                      className={styles.userEmailDetailsChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000006070.svg"
                    />
                  </div>
                  <div className={styles.userEmailIdParent}>
                    <div className={styles.userEmailId}>
                      <div className={styles.userEmailIdDetails}>
                        <div className={styles.userEmailIdInput}>
                          <img
                            className={styles.userEmailIdInputChild}
                            loading="lazy"
                            alt=""
                            src="/group-1000006069.svg"
                          />
                          <div className={styles.userEmailIdWatermarkWrapper}>
                            <div className={styles.userEmailId1}>
                              +91 0123456789
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sujeetkumar124gmailcom}>
                        SujeetKumar124@GMAIL.COM
                      </div>
                    </div>
                    <div className={styles.userPhoneNumber}>
                      <img
                        className={styles.userPhoneNumberChild}
                        loading="lazy"
                        alt=""
                        src="/group-10000060201.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.savedAddresses}>
                <img
                  className={styles.savedAddressesChild}
                  alt=""
                  src="/group-1000006078.svg"
                />
              </div>
              <div className={styles.savedAddress}>
                <div className={styles.savedAddressDetails}>
                  <div className={styles.savedAddressHeader}>
                    <div className={styles.savedAddressTitle}>
                      <div className={styles.savedAddress1}>Saved Address</div>
                      <div className={styles.savedAddressDivider} />
                    </div>
                    <div className={styles.addressList}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameWrapper1}>
                          <img
                            className={styles.groupIcon}
                            loading="lazy"
                            alt=""
                            src="/group-1000006418.svg"
                          />
                        </div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild2} />
                          <div className={styles.sujeetKumarSinghParent}>
                            <div className={styles.sujeetKumarSinghContainer}>
                              <span className={styles.sujeetKumarSingh}>
                                Sujeet Kumar Singh
                              </span>
                              <span className={styles.span1}>{`  `}</span>
                            </div>
                            <div className={styles.sectorParent}>
                              <div className={styles.sector}>
                                <img
                                  className={styles.sectorChild}
                                  loading="lazy"
                                  alt=""
                                  src="/group-707.svg"
                                />
                              </div>
                              <div className={styles.phase2Industrial}>
                                Phase 2, Industrial Area, Sector 62, Ghaziabad,
                                Uttar Pradesh 201309, +91 9889653254
                              </div>
                            </div>
                          </div>
                          <div className={styles.editIcon1}>
                            <img
                              className={styles.editIcon2}
                              alt=""
                              src="/vector-54.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.frameWrapper2}>
                          <img
                            className={styles.frameChild3}
                            alt=""
                            src="/group-10000064181.svg"
                          />
                        </div>
                        <div className={styles.groupDiv}>
                          <div className={styles.frameChild4} />
                          <div className={styles.sujeetKumarSinghGroup}>
                            <div className={styles.sujeetKumarSinghContainer1}>
                              <span className={styles.sujeetKumarSingh1}>
                                Sujeet Kumar Singh
                              </span>
                              <span className={styles.span2}>{`  `}</span>
                            </div>
                            <div className={styles.frameParent2}>
                              <div className={styles.frameWrapper3}>
                                <img
                                  className={styles.frameChild5}
                                  alt=""
                                  src="/group-707.svg"
                                />
                              </div>
                              <div className={styles.phase2Industrial1}>
                                Phase 2, Industrial Area, Sector 62, Ghaziabad,
                                Uttar Pradesh 201309, +91 9889653254
                              </div>
                            </div>
                          </div>
                          <div className={styles.vectorContainer}>
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="/vector-54.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.address}>
                    <div className={styles.addressChild} />
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild6} />
                      <img
                        className={styles.frameChild7}
                        alt=""
                        src="/group-1000005993.svg"
                      />
                      <div className={styles.button1}>
                        <div className={styles.addNewAddress1}>
                          Add New Address
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newAddressForm}>
              <div className={styles.searchBox}>
                <div className={styles.placeholderParent}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder@2x.png"
                  />
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild8} />
                    <img
                      className={styles.frameChild9}
                      alt=""
                      src="/group-7756.svg"
                    />
                    <div className={styles.searchForArea}>
                      Search for area, street name...
                    </div>
                  </div>
                  <div className={styles.separator}>
                    <div className={styles.button2}>
                      <div className={styles.firstName}>
                        <img
                          className={styles.firstNameChild}
                          alt=""
                          src="/group-1000005993-1.svg"
                        />
                      </div>
                      <div className={styles.goToCurrent}>
                        Go to current location
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.addressInput1}>
                  <div className={styles.street}>
                    <div className={styles.city}>
                      <div className={styles.addNewAddress2}>
                        Add New Address
                      </div>
                      <div className={styles.zip}>
                        <img
                          className={styles.checkboxIcon}
                          alt=""
                          src="/checkbox.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.saveInfo} />
                  </div>
                  <div className={styles.deliveryAddress1}>
                    <div className={styles.location1}>
                      <AddressPreview
                        firstName="First Name"
                        enterFirstName="Enter first name "
                      />
                      <AddressPreview
                        firstName="Phone Number"
                        enterFirstName="Enter phone number "
                      />
                      <AddressPreview
                        firstName="Street"
                        enterFirstName="Enter street"
                      />
                      <AddressPreview
                        firstName="State/province/area"
                        enterFirstName="Enter state, province, area"
                      />
                    </div>
                    <div className={styles.location2}>
                      <AddressPreview
                        firstName="Last Name"
                        enterFirstName="Enter last name "
                      />
                      <div className={styles.apartmentFloorEtcParent}>
                        <div className={styles.apartmentFloorEtc}>
                          Apartment, floor, etc.
                        </div>
                        <div className={styles.rectangleParent3}>
                          <div className={styles.frameChild10} />
                          <div
                            className={styles.enterApartmentFloor}
                          >{`Enter apartment, floor, etc. `}</div>
                        </div>
                      </div>
                      <AddressPreview
                        firstName="Town/City"
                        enterFirstName="Enter town, city "
                      />
                      <AddressPreview
                        firstName="Zip code"
                        enterFirstName="Enter zip code "
                      />
                    </div>
                  </div>
                  <div className={styles.preRolls}>
                    <img
                      className={styles.iconCheckbox}
                      alt=""
                      src="/iconcheckbox.svg"
                    />
                    <div className={styles.saveThisInformation}>
                      Save this information for faster check-out next time
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.app}>
                <div className={styles.deliveringYourOrder}>
                  Delivering your order to
                </div>
                <div className={styles.googlePlay}>
                  <div className={styles.footer}>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.frameChild11} />
                      <img
                        className={styles.locationPinIcon1}
                        loading="lazy"
                        alt=""
                        src="/locationpin.svg"
                      />
                      <div className={styles.blooms}>
                        <div className={styles.rights}>
                          <b className={styles.bBlock}>B Block</b>
                          <div className={styles.sector58Noida}>
                            Sector 58, Noida
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.legal}>
                    <div className={styles.button3}>
                      <div className={styles.cancel}>Cancel</div>
                    </div>
                    <div className={styles.button4}>
                      <div className={styles.submit}>Submit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SocialIcons />
    </div>
  );
};

export default AddNewAddress;
