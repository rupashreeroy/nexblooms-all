import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./saffron-cinnamon.module.css";

const SaffronCinnamon = ({
  className = "",
  saffronImage,
  saffron,
  propWidth,
  propPadding,
}) => {
  const saffronCinnamonStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={[styles.saffronCinnamon, className].join(" ")}
      style={saffronCinnamonStyle}
    >
      <img
        className={styles.saffronImageIcon}
        loading="lazy"
        alt=""
        src={saffronImage}
      />
      <div className={styles.saffronTitle}>
        <h3 className={styles.saffron}>{saffron}</h3>
      </div>
    </div>
  );
};

SaffronCinnamon.propTypes = {
  className: PropTypes.string,
  saffronImage: PropTypes.string,
  saffron: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default SaffronCinnamon;
