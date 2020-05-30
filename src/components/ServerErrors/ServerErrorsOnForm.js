/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import ServerSideErrorHelpBlock from "components/ServerSideErrorHelpBlock/ServerSideErrorHelpBlock";

/**Component to show serversideErrorHelpBlock on the form components */
const ServerErrorOnForm = props => {
  const { messages } = props;
  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <ServerSideErrorHelpBlock message={messages} />
      </Col>
    </Row>
  );
};

ServerErrorOnForm.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string)
};

ServerErrorOnForm.defaultProps = {
  messages: []
};

export default ServerErrorOnForm;
