import React,{ useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./registration-form.module.css";

const RegistrationForm = ({ className = "" }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/v1/account/account/web_register/", {
        first_name: firstName,
        last_name: lastName,
        email,
        mobile,
        password,

      },{
        headers: {
          'Content-Type': 'application/json', // Specify the Content-Type header
        },
      }
    );
      setSuccess("User registered successfully!");
      setError("");
    } catch (error) {
      setError("Registration failed!");
      setSuccess("");
    }
  };


  return (
    <section className={[styles.registrationForm, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-1000006020.svg"
        />
        <div className={styles.formTitle}>
        <form className={styles.registerTitle} onSubmit={handleRegister}>
            <h3 className={styles.registerNow}>Register Now</h3>
            <div className={styles.inputFields}>
              <div className={styles.nameInputs}>
                <div className={styles.firstNameContainer}>
                  <div className={styles.firstName}>First Name</div>
                  <div className={styles.firstNameEntry}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.enterFirstName}>
                      <input
                    type="text"
                    className={styles.rectangleGroup}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                  />
                      </div>
                    </div>
                    <div className={styles.emailId}>{`Email Id `}</div>
                  </div>
                </div>
                <div className={styles.lastNameContainer}>
                  <div className={styles.lastName}>Last Name</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div
                      className={styles.enterLastName}
                    >
                      <input
                    type="text"
                    className={styles.rectangleContainer}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                  />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.emailContainer}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild1} />
                  <div className={styles.enterEmailId}>
                  <input
                    type="email"
                    className={styles.groupDiv}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email id"
                  />

                  </div>
                </div>
              </div>
              <div className={styles.nameInputs1}>
                <div className={styles.mobileNumber}>Mobile Number</div>
                <div className={styles.frameParent}>
                  <div className={styles.lastNameEntryParent}>
                    <div className={styles.lastNameEntry}>
                      <div className={styles.lastNameEntryChild} />
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                      <div className={styles.lastNamePlaceholder}>+1</div>
                      <div className={styles.lastNameClear}>
                        <img
                          className={styles.lastNameClearChild}
                          alt=""
                          src="/polygon-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.password}>Password</div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild2} />
                      <div
                        className={styles.enterMobileNumber}
                      >
                        <input
                  type="text"
                  className={styles.frameDiv}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                />
                      </div>
                    </div>
                    <div className={styles.confirmPasswordContainer}>
                      <div className={styles.confirmPassword}>
                        Confirm Password
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.passwordContainer}>
                <div className={styles.passwordEntry}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild3} />
                    <div
                      className={styles.enterPassword}
                    >
                      <input
                    type="password"
                    className={styles.rectangleParent1}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                    </div>
                  </div>
                  <div className={styles.showButton}>
                    <div className={styles.showBackground} />
                    <label className={styles.label}>
                  <input type="checkbox" required />
                  I accept <span className={styles.termsConditions}>Terms & conditions</span>
                </label>
                  </div>
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <div
                    className={styles.enterConfirmPassword}
                  >
                    <input
                    type="password"
                    className={styles.rectangleParent2}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter confirm password"
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button type="submit" className={styles.register}>
                Register
              </button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>{success}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

RegistrationForm.propTypes = {
  className: PropTypes.string,
};

export default RegistrationForm;
