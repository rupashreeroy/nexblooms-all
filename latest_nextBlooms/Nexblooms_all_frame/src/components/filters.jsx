import PropTypes from "prop-types";
import styles from "./filters.module.css";

const Filters = ({ className = "" }) => {
  return (
    <form className={[styles.filters, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.filtersContent}>
          <div className={styles.filterLabelWrapper}>
            <div className={styles.filters1}>Filters</div>
          </div>
          <img
            className={styles.filterDropdownIcon}
            alt=""
            src="/filter-dropdown-icon.svg"
          />
          <div className={styles.filterOptionsWrapper}>
            <div className={styles.filterDropdown}>
              <div className={styles.filterCategories}>
                <div className={styles.categories}>Categories</div>
                <div className={styles.categoryItems}>
                  <div className={styles.categorySubItems}>
                    <img
                      className={styles.categoryIcons}
                      alt=""
                      src="/vector-51.svg"
                    />
                  </div>
                  <div className={styles.spices}>Spices</div>
                </div>
                <div className={styles.categoryItems1}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-62.svg"
                    />
                  </div>
                  <div className={styles.teaCoffee}>{`Tea & Coffee`}</div>
                </div>
                <div className={styles.categoryItems2}>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-71.svg"
                    />
                  </div>
                  <div
                    className={styles.dryFruits}
                  >{`Dry  Fruits & Snacks`}</div>
                </div>
                <div className={styles.categoryItems3}>
                  <div className={styles.vectorFrame}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-81.svg"
                    />
                  </div>
                  <div className={styles.dairyProducts}>Dairy Products</div>
                </div>
                <div className={styles.categoryItems4}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-91.svg"
                    />
                  </div>
                  <div className={styles.groceries}>Groceries</div>
                </div>
                <div className={styles.more}>+ 5 more</div>
              </div>
              <div className={styles.categoriesIconWrapper}>
                <img
                  className={styles.categoriesIcon}
                  alt=""
                  src="/vector-101.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.brandsIconWrapper}
          alt=""
          src="/filter-dropdown-icon.svg"
        />
        <div className={styles.brandsDropdown}>
          <div className={styles.brandsContent}>
            <div className={styles.brandLabelWrapper}>
              <div className={styles.brand}>Brand</div>
              <div className={styles.brandsDropdownIconWrapper}>
                <img
                  className={styles.brandDropdownIcon}
                  alt=""
                  src="/vector-112.svg"
                />
              </div>
            </div>
            <div className={styles.brandDescriptionWrapper}>
              <div className={styles.theOneAndContainer}>
                <p className={styles.theOneAnd}>
                  The one and only nexblooms brand,
                </p>
                <p className={styles.weHaveNo}>we have no branches.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceRange}>
          <img
            className={styles.priceIcons}
            loading="lazy"
            alt=""
            src="/filter-dropdown-icon.svg"
          />
          <div className={styles.priceSlider}>
            <div className={styles.priceLabelWrapper}>
              <div className={styles.minPrice}>
                <div className={styles.price}>Price</div>
                <div className={styles.priceDropdownIconWrapper}>
                  <img
                    className={styles.priceDropdownIcon}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <img
                className={styles.priceLabelWrapperChild}
                loading="lazy"
                alt=""
                src="/group-1000006390.svg"
              />
              <div className={styles.priceRangeSlider}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.min}>min</div>
                  <div className={styles.vectorWrapper1}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/polygon-11.svg"
                    />
                  </div>
                </div>
                <div className={styles.rangeTo}>
                  <div className={styles.to}>to</div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.max}>max</div>
                  <div className={styles.vectorWrapper2}>
                    <img
                      className={styles.polygonIcon}
                      alt=""
                      src="/polygon-11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.priceIcons1}
            loading="lazy"
            alt=""
            src="/filter-dropdown-icon.svg"
          />
          <div className={styles.discountContainerWrapper}>
            <div className={styles.discountContainer}>
              <div className={styles.discountOptions}>
                <div className={styles.discount}>Discount</div>
                <div className={styles.discountPercentage}>
                  <div className={styles.discountBoxes}>
                    <div className={styles.percentageBox} />
                    <div className={styles.percentageLabel}>
                      <div className={styles.andAbove}>10% and above</div>
                    </div>
                  </div>
                  <div className={styles.discountBoxes1}>
                    <div className={styles.discountBoxesChild} />
                    <div className={styles.andAboveWrapper}>
                      <div className={styles.andAbove1}>20% and above</div>
                    </div>
                  </div>
                  <div className={styles.discountBoxes2}>
                    <div className={styles.discountBoxesItem} />
                    <div className={styles.andAboveContainer}>
                      <div className={styles.andAbove2}>30% and above</div>
                    </div>
                  </div>
                  <div className={styles.discountBoxes3}>
                    <div className={styles.discountBoxesInner} />
                    <div className={styles.andAboveFrame}>
                      <div className={styles.andAbove3}>40% and above</div>
                    </div>
                  </div>
                  <div className={styles.discountBoxes4}>
                    <div className={styles.discountBoxesChild1} />
                    <div className={styles.andAboveWrapper1}>
                      <div className={styles.andAbove4}>50% and above</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.discountIcon}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filterContainerWrapper}>
        <div className={styles.filterContainer}>
          <div className={styles.filterOptions}>
            <div className={styles.topSpicesFilter}>
              <div className={styles.topSpicesLabel}>
                <h3 className={styles.topSpices}>Top Spices</h3>
                <img
                  className={styles.topSpicesIcon}
                  alt=""
                  src="/categories-view-more-icon.svg"
                />
              </div>
              <div className={styles.flowerFilter}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-4400.svg"
                  />
                  <div className={styles.flower}>Flower</div>
                  <div className={styles.flowerIcon}>
                    <img
                      className={styles.flowerIconChild}
                      alt=""
                      src="/group-1000006398.svg"
                    />
                  </div>
                </div>
                <div className={styles.brandClearFilter}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild1} />
                    <div className={styles.brand1}>Brand</div>
                    <div className={styles.frameWrapper}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-1000006398.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild2} />
                    <div className={styles.andAbove5}>10% and above</div>
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.frameChild3}
                        alt=""
                        src="/group-1000006398.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.clearAllButton}>
                  <a className={styles.clearAll}>Clear All</a>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.cardItemsParent}>
                <div className={styles.cardItems}>
                  <img
                    className={styles.cardImageIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-625271.svg"
                  />
                  <div className={styles.cardDetails}>
                    <b className={styles.coriander}>Coriander</b>
                    <div
                      className={styles.duisAuctorAt}
                    >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                    <div className={styles.cardFooter}>
                      <div className={styles.cardPrice}>$79.00</div>
                      <div className={styles.cardRating}>$99.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <b className={styles.viewDetails}>View Details</b>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-62527-11.svg"
                />
                <div className={styles.cuminParent}>
                  <b className={styles.cumin}>Cumin</b>
                  <div
                    className={styles.duisAuctorAt1}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.separator}>
                    <div className={styles.dot}>$79.00</div>
                    <div className={styles.buttonSeparator}>
                      <div className={styles.dot1}>$99.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild5} />
                  <b className={styles.viewDetails1}>View Details</b>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/frame-62527-2.svg"
                />
                <div className={styles.cinnamonParent}>
                  <b className={styles.cinnamon}>Cinnamon</b>
                  <div
                    className={styles.duisAuctorAt2}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.parent}>
                    <div className={styles.div}>$79.00</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>$99.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild7} />
                  <b className={styles.viewDetails2}>View Details</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.saffronCards}>
            <div className={styles.saffronItemsParent}>
              <div className={styles.saffronItems}>
                <img
                  className={styles.saffronImageIcon}
                  alt=""
                  src="/frame-62527-3.svg"
                />
                <div className={styles.saffronCardDetails}>
                  <b className={styles.saffron}>Saffron</b>
                  <div
                    className={styles.duisAuctorAt3}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.saffronFooter}>
                    <div className={styles.saffronPrice}>$79.00</div>
                    <div className={styles.saffronRating}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild8} />
                <b className={styles.viewDetails3}>View Details</b>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <img
                className={styles.frameChild9}
                alt=""
                src="/frame-62527-4.svg"
              />
              <div className={styles.greenCardamomParent}>
                <b className={styles.greenCardamom}>Green Cardamom</b>
                <div
                  className={styles.duisAuctorAt4}
                >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                <div className={styles.priceRatingSeparator}>
                  <div className={styles.priceDot}>$79.00</div>
                  <div className={styles.ratingSeparator}>
                    <div className={styles.ratingDot}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent6}>
                <div className={styles.frameChild10} />
                <b className={styles.viewDetails4}>View Details</b>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/frame-62527-5.svg"
              />
              <div className={styles.blackCardamomParent}>
                <b className={styles.blackCardamom}>Black Cardamom</b>
                <div
                  className={styles.duisAuctorAt5}
                >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                <div className={styles.group}>
                  <div className={styles.div2}>$79.00</div>
                  <div className={styles.container}>
                    <div className={styles.div3}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent7}>
                <div className={styles.frameChild12} />
                <b className={styles.viewDetails5}>View Details</b>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <img
                  className={styles.frameChild13}
                  alt=""
                  src="/frame-62527-6.svg"
                />
                <div className={styles.fenugreekParent}>
                  <b className={styles.fenugreek}>Fenugreek</b>
                  <div
                    className={styles.duisAuctorAt6}
                  >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                  <div className={styles.parent1}>
                    <div className={styles.div4}>$79.00</div>
                    <div className={styles.div5}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent8}>
                <div className={styles.frameChild14} />
                <b className={styles.viewDetails6}>View Details</b>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <img
                className={styles.frameChild15}
                alt=""
                src="/frame-62527-7.svg"
              />
              <div className={styles.starAniseParent}>
                <b className={styles.starAnise}>Star Anise</b>
                <div
                  className={styles.duisAuctorAt7}
                >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                <div className={styles.parent2}>
                  <div className={styles.div6}>$79.00</div>
                  <div className={styles.frame}>
                    <div className={styles.div7}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent9}>
                <div className={styles.frameChild16} />
                <b className={styles.viewDetails7}>View Details</b>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <img
                className={styles.frameChild17}
                alt=""
                src="/frame-62527-8.svg"
              />
              <div className={styles.blackPepperParent}>
                <b className={styles.blackPepper}>Black Pepper</b>
                <div
                  className={styles.duisAuctorAt8}
                >{`Duis auctor at lorem ipsum dolor ipsum `}</div>
                <div className={styles.parent3}>
                  <div className={styles.div8}>$79.00</div>
                  <div className={styles.wrapper1}>
                    <div className={styles.div9}>$99.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild18} />
                <b className={styles.viewDetails8}>View Details</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

Filters.propTypes = {
  className: PropTypes.string,
};

export default Filters;
