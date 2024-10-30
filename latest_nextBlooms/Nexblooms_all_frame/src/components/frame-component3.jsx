import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.spices1Parent}>
        <img className={styles.spices1Icon} alt="" src="/spices-1@2x.png" />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-8051.svg"
        />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-8052@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.ethyleneOxideFreeSpicesParent}>
            <h1 className={styles.ethyleneOxideFree}>
              Ethylene Oxide Free Spices
            </h1>
            <div className={styles.enjoyYourSpicyFoodsWithoutWrapper}>
              <h2 className={styles.enjoyYourSpicy}>
                Enjoy your spicy foods without any fear.
              </h2>
            </div>
            <div className={styles.naturalBuyNowWrapper}>
              <h1 className={styles.naturalBuyNow}>100% Natural ,Buy Now</h1>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <img className={styles.frameInner} alt="" src="/group-8427.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
