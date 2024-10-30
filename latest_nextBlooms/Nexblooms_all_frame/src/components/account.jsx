import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./account.module.css";

const Account = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: email,
        password,
      });
      setSuccess("Login successful!");
      setError("");
      // Handle successful login, e.g., store the token, redirect, etc.
      console.log(response.data);
    } catch (error) {
      setError("Login failed!");
      setSuccess("");
    }
  };

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register-page");
  };

  return (
    <section className={[styles.account, className].join(" ")}>
      <div className={styles.accountOptions}>
        <div className={styles.accountLogin}>
          <img
            className={styles.accountDividerIcon}
            loading="lazy"
            alt=""
            src="/line-16.svg"
          />
          <div className={styles.accountLabels}>
            <a className={styles.account1}>Home</a>
            <div className={styles.login}>Login</div>
          </div>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.loginFormContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1000006010.svg"
              />
              <div className={styles.emailInput}>
                <div className={styles.emailPlaceholder}>
                  <h3 className={styles.login1}>Login</h3>
                  <form className={styles.password} onSubmit={handleLogin}>
                    <div className={styles.inputFields}>
                      <div className={styles.inputLabels}>
                        <div className={styles.emailId}>Email ID</div>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.frameInner} />
                          <div className={styles.enter}>
                          <input
                          type="email"
                          className={styles.rectangleGroup}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email id"
                          required
                        />
                          </div>
                        </div>
                      </div>
                      <div className={styles.inputLabels1}>
                        <div className={styles.password1}>Password</div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.enterWrapper}>
                            <div className={styles.enter1}>
                            <input
                          type="password"
                          className={styles.rectangleContainer}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          required
                        />
                            </div>
                          </div>
                          <img
                            className={styles.groupIcon}
                            alt=""
                            src="/group-7705.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <button type="submit" className={styles.login2}>
                        Login
                      </button>
                    </div>
                    <div className={styles.forgotPassword}>
                      <div className={styles.forgotPassword1}>
                        Forgot password?
                      </div>
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    {success && <div className={styles.success}>{success}</div>}
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.newUserRegistration}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.registrationMessage}>
                  <div className={styles.newUser}>
                    <b className={styles.notAUser}>Not a User ? Register Now</b>
                  </div>
                  <div
                    className={styles.pleaseCreateAn}
                  >{`Please create an account to interact with our marketplace. `}</div>
                </div>
                <div className={styles.registerButton}>
                  <div className={styles.button1}  onClick={handleRegisterClick}>
                    <div className={styles.registerNow}>Register Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Account.propTypes = {
  className: PropTypes.string,
};

export default Account;
