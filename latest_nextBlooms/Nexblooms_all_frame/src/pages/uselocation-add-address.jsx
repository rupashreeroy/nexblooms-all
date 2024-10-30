import FrameComponent from "../components/frame-component";
import ProfileDetails from "../components/profile-details";
import Footer from "../components/footer";
import styles from "./uselocation-add-address.module.css";

const UselocationAddAddress = () => {
  return (
    <div className={styles.uselocationAddAddress}>
      <img
        className={styles.nexbloomslogoIcon}
        alt=""
        src="/nexblooms_logo@2x.png"
      />
      <section className={styles.frameParent}>
        <FrameComponent />
        <div className={styles.rightSidebar}>
          <div className={styles.profileHeaderParent}>
            <div className={styles.profileHeader}>
              <img
                className={styles.profileDividerIcon}
                loading="lazy"
                alt=""
                src="/line-1617.svg"
              />
              <div className={styles.accountOptions}>
                <a className={styles.account}>Home</a>
                <div className={styles.profile}>Profile</div>
              </div>
            </div>
            <h3 className={styles.profile1}>Profile</h3>
          </div>
          <div className={styles.rightSidebarBackground} />
          <ProfileDetails />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UselocationAddAddress;
