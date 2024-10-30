import GroupComponent1 from "../components/group-component1";
import LastNameField from "../components/last-name-field";
import FooterWrapper from "../components/footer-wrapper";
import styles from "./contactus.module.css";

const Contactus = () => {
  return (
    <div className={styles.contactus}>
      <GroupComponent1 />
      <section className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.lineParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-1612.svg"
            />
            <div className={styles.contactInfoLinks}>
              <a className={styles.account}>Home</a>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
          <div className={styles.contactUsParent}>
            <b className={styles.contactUs1}>Contact Us</b>
            <img
              className={styles.carbonlocationFilledIcon}
              alt=""
              src="/carbonlocationfilled.svg"
            />
            <img
              className={styles.bxsphoneCallIcon}
              alt=""
              src="/bxsphonecall.svg"
            />
            <img
              className={styles.icsharpEmailIcon}
              alt=""
              src="/icsharpemail.svg"
            />
            <div className={styles.contactUsDirectlyContainer}>
              <p className={styles.contactUsDirectly}>
                Contact us directly using the contact
              </p>
              <p className={styles.informationBelow}>information below</p>
            </div>
            <div className={styles.frameItem} />
            <b className={styles.contactInformation}>Contact Information</b>
            <div className={styles.frameInner} />
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactInfoItems}>
                <div className={styles.phone}>
                  <h2 className={styles.contactInformation1}>
                    Contact Information
                  </h2>
                  <div className={styles.contactUsDirectly1}>
                    Contact us directly using the contact information below
                  </div>
                </div>
                <div className={styles.phoneNumber}>
                  <img
                    className={styles.bxsphoneCallIcon1}
                    loading="lazy"
                    alt=""
                    src="/bxsphonecall1.svg"
                  />
                  <div className={styles.phoneNumberWrapper}>
                    <div className={styles.phoneNumber1}>+91 80008 55595</div>
                  </div>
                </div>
                <div className={styles.email}>
                  <div className={styles.emailAddress}>
                    <img
                      className={styles.icsharpEmailIcon1}
                      loading="lazy"
                      alt=""
                      src="/icsharpemail1.svg"
                    />
                    <div className={styles.demogmailcomWrapper}>
                      <div className={styles.demogmailcom}>info@nexblooms.com</div>
                    </div>
                  </div>
                  <div className={styles.address}>
                    <img
                      className={styles.carbonlocationFilledIcon1}
                      loading="lazy"
                      alt=""
                      src="/carbonlocationfilled1.svg"
                    />
                    <div className={styles.dartmouthStreetBoston}>
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <div className={styles.socialMediaLinks}>
                  <div className={styles.socialMediaLinks1}>+91 80008 55595</div>
                  <div className={styles.demogmailcom1}>info@nexblooms.com</div>
                  <div className={styles.dartmouthStreetBoston1}>
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </div>
                  <img
                    className={styles.g10Icon}
                    loading="lazy"
                    alt=""
                    src="/g10.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.footerDividerIcon}
              alt=""
              src="/footer-divider1.svg"
            />
            <div className={styles.contactForm}>
              <h2 className={styles.contactUs2}>Contact Us</h2>
              <div className={styles.formFields}>
                <div className={styles.nameFields}>
                  <div className={styles.firstNameField}>
                    <div className={styles.firstName}>First Name</div>
                    <div className={styles.firstNameInput}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.enterFirstName}>
                          Enter first name
                        </div>
                      </div>
                      <div className={styles.emailId}>{`Email Id `}</div>
                    </div>
                  </div>
                  <LastNameField
                    lastName="Last Name"
                    enterLastName="Enter last name "
                  />
                </div>
                <div className={styles.emailInput}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameChild1} />
                    <div
                      className={styles.enterEmailId}
                    >{`Enter email id `}</div>
                  </div>
                </div>
                <div className={styles.phoneNumberField}>
                  <div className={styles.mobileNumber}>Mobile Number</div>
                  <div className={styles.mobileNumberInput}>
                    <div className={styles.countryCode}>
                      <div className={styles.countryCodeChild} />
                      <img
                        className={styles.image5Icon}
                        loading="lazy"
                        alt=""
                        src="/image-51@2x.png"
                      />
                      <div className={styles.plusSignParent}>
                        <div className={styles.plusSign}>+91</div>
                        <div className={styles.vectorWrapper}>
                          <img
                            className={styles.polygonIcon}
                            alt=""
                            src="/polygon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobileNumberHint}>
                      <div className={styles.mobileNumberHintChild} />
                      <div
                        className={styles.enterMobileNumber}
                      >{`Enter mobile number `}</div>
                    </div>
                  </div>
                </div>
                <LastNameField
                  lastName="Message"
                  enterLastName="Enter your message"
                  propFlex="unset"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propHeight="138px"
                />
              </div>
              <div className={styles.button}>
                <div className={styles.submit}>Submit</div>
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
      <FooterWrapper />
    </div>
  );
};

export default Contactus;
