/** @format */

const appActions = {
  resetToInitialState: "RESET_APP_REDUCER_TO_INITIAL_STATE"
};

export const resetToInitialState = () => ({
  type: appActions.resetToInitialState,
  payload: {}
});

export default appActions;
