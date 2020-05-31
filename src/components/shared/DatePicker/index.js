/** @format */

import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import { DATE_FORMAT } from "appConstants";
import { Label } from "reactstrap";

const BWDatePicker = props => {
  const {
    selected,
    onChange,
    placeholderText,
    maxDate,
    showMonthYearPicker,
    className,
    readOnly,
    dateFormat,
    minDate,
    fixedHeight,
    showYearDropdown,
    yearDropdownItemNumber,
    scrollableYearDropdown,
    errorMsg,
    disabled,
    showTimeSelect,
    timeIntervals,
    timeCaption,
    timeFormat,
    label,
    isRequired,
    minTime,
    maxTime,
    handleOnBlur
  } = props;

  const classNames = errorMsg
    ? `${className} form-control is-invalid`
    : `${className} form-control`;

  return (
    <>
      {label && (
        <>
          &nbsp;
          <Label>
            &nbsp;
            {label} : {isRequired && <span className="text-danger">*</span>}
          </Label>
          &nbsp; &nbsp;
        </>
      )}
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        minDate={minDate}
        maxDate={maxDate}
        showMonthYearPicker={showMonthYearPicker}
        className={classNames}
        readOnly={readOnly}
        dateFormat={dateFormat}
        fixedHeight={fixedHeight}
        showYearDropdown={showYearDropdown}
        yearDropdownItemNumber={yearDropdownItemNumber}
        scrollableMonthYearDropdown={scrollableYearDropdown}
        disabled={disabled}
        showTimeSelect={showTimeSelect}
        timeIntervals={timeIntervals}
        timeCaption={timeCaption}
        timeFormat={timeFormat}
        minTime={minTime}
        maxTime={maxTime}
        onBlur={handleOnBlur}
      />
      {errorMsg && <div className="error-block text-danger">{errorMsg}</div>}
    </>
  );
};

BWDatePicker.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  showMonthYearPicker: PropTypes.bool,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  dateFormat: PropTypes.string,
  fixedHeight: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  yearDropdownItemNumber: PropTypes.number,
  scrollableYearDropdown: PropTypes.bool,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  showTimeSelect: PropTypes.bool,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  timeCaption: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool, // This is just to show * icon
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  handleOnBlur: PropTypes.func
};

BWDatePicker.defaultProps = {
  dateFormat: DATE_FORMAT,
  readOnly: false,
  showMonthYearPicker: false
};

export default BWDatePicker;
