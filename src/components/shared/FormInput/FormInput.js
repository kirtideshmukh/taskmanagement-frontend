/** @format */

import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, FormFeedback, Label } from "reactstrap";

import { hasErrorInField } from "utils/formHelpers";

/**Generic form-input element along with respective error msg */
const FormInput = props => {
  const {
    type,
    name,
    placeholder,
    value,
    handleOnChange,
    handleOnBlur,
    errorMsg,
    maxLength,
    disabled,
    label,
    isRequired,
    readOnly
  } = props;

  return (
    <FormGroup>
      {label && (
        <Label>
          {label} : {isRequired && <span className="text-danger">*</span>}
        </Label>
      )}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        invalid={hasErrorInField(errorMsg)}
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
      />
      {errorMsg ? <FormFeedback> {errorMsg}</FormFeedback> : null}
    </FormGroup>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  handleOnChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  isRequired: PropTypes.bool, //This is just to show * icon
  readOnly: PropTypes.bool
};

FormInput.defaultProps = {
  placeholder: "",
  maxLength: 100,
  label: ""
};

export default FormInput;
