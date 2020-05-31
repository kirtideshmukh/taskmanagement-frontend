/** @format */

import React from "react";
import PropTypes from "prop-types";
import { isEmptyArray } from "utils/isEmptyValue";

import "./ServerSideErrorHelpBlock.scss";

const ServersideErrorHelpBlock = props => {
  const { message } = props;

  if (!isEmptyArray(message)) {
    return (
      <div className="error-wrap server-error-wrap">
        <div className="error-block">
          {message.map((msg, index) => {
            return (
              <p
                className={`error-msg server-side-error-message-${index} alert alert-danger`}
                key={index}
              >
                {msg}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

ServersideErrorHelpBlock.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string)
};

ServersideErrorHelpBlock.defaultProps = {
  message: []
};

export default ServersideErrorHelpBlock;
