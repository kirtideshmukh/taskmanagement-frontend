/** @format */

export const loadLocalStorageState = () => {
  const serializableState = localStorage.getItem("appState");
  console.log({serializableState})
  console.log(JSON.parse(serializableState))

  if (serializableState !== null) {
    return JSON.parse(serializableState);
  }
};

export const saveLocalStorageState = state => {
  const serializableState = JSON.stringify(state);

  localStorage.setItem("appState", serializableState);
};

export const removeLocalStorageState = () => {
  localStorage.removeItem("appState");
};
