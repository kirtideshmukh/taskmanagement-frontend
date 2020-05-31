/**
 * Check whether an error is present for a formfield.
 * If following function returns true, we will show red-border to the respective formfield.
 *
 * @format
 */

export const hasErrorInField = (errorMsg = "") => {
  return errorMsg.trim() ? true : false;
};

/**Returns the value of the form-input field */
export const getInputFieldValue = event => {
  const { currentTarget } = event;
  return currentTarget.value || "";
};
