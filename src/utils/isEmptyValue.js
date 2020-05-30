/**
 * Checks whether the object is empty or not.
 *
 * @format
 * @param : obj
 */

export const isEmptyObject = (obj = {}) => {
  const keys = Object.values(obj);
  return !keys.filter(key => key).length;
};

export const isEmptyArray = (arr = []) => {
  return !arr.filter(ele => ele).length;
};
