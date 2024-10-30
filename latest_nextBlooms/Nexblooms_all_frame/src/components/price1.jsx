import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./price1.module.css";

const Price1 = ({
  className = "",
  frame62527,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const price1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div className={[styles.price, className].join(" ")} style={price1Style}>
      <img
        className={styles.priceChild}
        loading="lazy"
        alt=""
        src={frame62527}
      />
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-3-2.svg" />
        <b className={styles.off}>10% off</b>
      </div>
    </div>
  );
};

Price1.propTypes = {
  className: PropTypes.string,
  frame62527: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Price1;
