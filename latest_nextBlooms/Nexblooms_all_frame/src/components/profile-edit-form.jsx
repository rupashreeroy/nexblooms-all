import PropTypes from "prop-types";
import styles from "./profile-edit-form.module.css";

const ProfileEditForm = ({ className = "" }) => {
  return (
    <section className={[styles.profileEditForm, className].join(" ")}>
      <form className={styles.formContent}>
        <div className={styles.formFields}>
          <div className={styles.inputFields}>
            <div className={styles.fullNameParent}>
              <div className={styles.fullName}>Full Name</div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.enterFullName}>Enter full name</div>
              </div>
            </div>
            <div className={styles.emailIdParent}>
              <div className={styles.emailId}>{`Email Id `}</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.enterEmailIdWrapper}>
                  <div className={styles.enterEmailId}>{`Enter email id `}</div>
                </div>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-1000006420.svg"
                />
              </div>
            </div>
            <div className={styles.passwordParent}>
              <div className={styles.password}>Password</div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.wrapper}>
                  <div className={styles.div}>************</div>
                </div>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-77051.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.bioInput}>
            <div className={styles.bioContent}>
              <div className={styles.bio}>Bio</div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.enterBio}>Enter bio</div>
              </div>
            </div>
            <div className={styles.mobileInput}>
              <div className={styles.mobileNumber}>Mobile Number</div>
              <div className={styles.mobileContent}>
                <div className={styles.imageInput}>
                  <div className={styles.imageInputChild} />
                  <img
                    className={styles.image5Icon}
                    alt=""
                    src="/image-51@2x.png"
                  />
                  <div className={styles.imageIcon}>
                    <div className={styles.imageIconPlaceholder}>+91</div>
                    <div className={styles.imageIconInner}>
                      <img
                        className={styles.polygonIcon}
                        alt=""
                        src="/polygon-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.mobileInputField}>
                  <div className={styles.mobileInputFieldChild} />
                  <div className={styles.enterMobileNumberWrapper}>
                    <div
                      className={styles.enterMobileNumber}
                    >{`Enter mobile number `}</div>
                  </div>
                  <img
                    className={styles.edit3Icon}
                    alt=""
                    src="/group-1000006420.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.changePassword}>Change Password</div>
          </div>
        </div>
        <div className={styles.actionButtonsWrapper}>
          <div className={styles.actionButtons}>
            <div className={styles.button}>
              <div className={styles.cancel}>Cancel</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.updateProfile}>Update Profile</div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

ProfileEditForm.propTypes = {
  className: PropTypes.string,
};

export default ProfileEditForm;
