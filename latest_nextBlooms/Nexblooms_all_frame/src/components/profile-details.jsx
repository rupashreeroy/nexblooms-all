import DefaultAddress from "./default-address";
import PropTypes from "prop-types";
import styles from "./profile-details.module.css";

const ProfileDetails = ({ className = "" }) => {
  return (
    <div className={[styles.profileDetails, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-1000006070.svg"
          />
          <div className={styles.nameAndBio}>
            <div className={styles.nameWrapper}>
              <div className={styles.name}>
                <img
                  className={styles.editIcon}
                  loading="lazy"
                  alt=""
                  src="/edit.svg"
                />
                <div className={styles.editIconContainer}>
                  <img
                    className={styles.editIcon1}
                    loading="lazy"
                    alt=""
                    src="/profile-pic@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.bioParent}>
              <div className={styles.bio}>
                <div className={styles.sujeetKumar}>Sujeet Kumar</div>
              </div>
              <div className={styles.justLivingMy}>
                {" "}
                “Just living my best life ! ”
              </div>
            </div>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>
                <div className={styles.emailDetails}>
                  <div className={styles.emailAddress}>
                    <img
                      className={styles.emailAddressChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000006069.svg"
                    />
                    <div className={styles.emailInput}>
                      <div className={styles.emailPlaceholder}>
                        +91 0123456789
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.emailValue}>
                  <div className={styles.userEmail}>
                    <div className={styles.sujeetkumar124gmailcom}>
                      SujeetKumar124@GMAIL.COM
                    </div>
                  </div>
                  <img
                    className={styles.emailValueChild}
                    loading="lazy"
                    alt=""
                    src="/group-10000060201.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1000006078.svg"
          />
        </div>
        <div className={styles.savedAddressesWrapper}>
          <div className={styles.savedAddresses}>
            <div className={styles.addressHeader}>
              <div className={styles.savedAddressLabel}>
                <div className={styles.savedAddress}>Saved Address</div>
                <div className={styles.addressHeaderDivider} />
              </div>
              <div className={styles.savedAddressList}>
                <DefaultAddress group1000006418="/group-1000006418.svg" />
                <DefaultAddress group1000006418="/group-10000064181.svg" />
              </div>
            </div>
            <div className={styles.addNewAddressDividerParent}>
              <div className={styles.addNewAddressDivider} />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/group-1000005993.svg"
                />
                <div className={styles.addNewAddress}>
                  <div className={styles.addNewAddress1}>Add New Address</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addressModal}>
        <div className={styles.groupDiv}>
          <div className={styles.frameChild2} />
          <div className={styles.yourLocation}>
            <div className={styles.currentLocation}>
              <div className={styles.yourLocation1}>Your Location</div>
              <div className={styles.locationIcon}>
                <img
                  className={styles.currentLocationIcon}
                  loading="lazy"
                  alt=""
                  src="/checkbox.svg"
                />
              </div>
            </div>
            <div className={styles.currentLocationDivider} />
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild3} />
              <div className={styles.searchInput}>
                <img
                  className={styles.searchInputChild}
                  alt=""
                  src="/group-77561.svg"
                />
              </div>
              <div className={styles.searchForArea}>
                Search for area, street name...
              </div>
            </div>
          </div>
          <div className={styles.useCurrentLocation}>
            <img
              className={styles.useCurrentLocationChild}
              loading="lazy"
              alt=""
              src="/group-1000005993-11.svg"
            />
            <div className={styles.currentLocationDetails}>
              <div className={styles.useYourCurrent}>
                Use your current location
              </div>
              <div className={styles.sector58Noida}>Sector 58, Noida</div>
            </div>
          </div>
          <div className={styles.savedAddresses1}>
            <div className={styles.savedAddressTitle}>
              <div className={styles.savedAddress1}>Saved Address</div>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild4} />
                <div className={styles.home}>Home</div>
                <div className={styles.savedHomeAddress}>
                  <div className={styles.homeIcon}>
                    <img
                      className={styles.homeIconChild}
                      alt=""
                      src="/group-1000005987.svg"
                    />
                  </div>
                  <div className={styles.phase2Industrial}>
                    Phase 2, Industrial Area, Sector 62, Ghaziabad, Uttar
                    Pradesh 201309, +91 9889653254
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
};

export default ProfileDetails;
