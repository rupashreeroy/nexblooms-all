import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({
  className = "",
  roseboxBFdSCxmqvYcUnsplas,
  deliveries,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const categoryItemsStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={[styles.categoryItems, className].join(" ")}
      style={categoryItemsStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageIcon}
            alt=""
            src={roseboxBFdSCxmqvYcUnsplas}
          />
        </div>
        <div className={styles.teacoffee}>{deliveries}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  roseboxBFdSCxmqvYcUnsplas: PropTypes.string,
  deliveries: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
