/** @format */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import LoaderSvg from "./LoaderSvg";

import "./LoaderSvg.scss";

/**This is used to show loader while submitting the forms. */
const Loader = props => {
  const { fixed, className, isLoading } = props,
    classes = classNames(
      "form-loader-box form-loader-box",
      fixed ? "position-fixed" : "",
      className ? className : ""
    );

  if (isLoading) {
    return (
      <div className={classes}>
        <LoaderSvg />
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;

Loader.propTypes = {
  /** Apply any class with **className** prop. */
  className: PropTypes.string,
  /** **fixed** prop, you can pass either *true* or *false* value to it. Default value is *false*. */
  fixed: PropTypes.bool,
  isLoading: PropTypes.bool
};

Loader.defaultProps = {
  fixed: false,
  isLoading: false
};
