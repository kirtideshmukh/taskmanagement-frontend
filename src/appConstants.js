export const ROUTES = {
  dashboard: "/dashboard",
  setPassword: "/set-password",
  login: "/login",
  signUp: "/sign-up",
  index: "/",
  boards: "/boards"
};

export const BTN_LABELS = {
  create: "Save",
  update: "Update",
  save: "Save",
  delete: "Delete",
  confirm: "Confirm",
  cancel: "Cancel"
};

export const ERRORS = {
  required: "can't be blank"
}

export const API_ENDPOINTS = {
  board: "board",
  signUp: "signUp",
  login: "login",
  tasks: "tasks"
};

export const HTTP_METHODS = {
  get: "GET",
  put: "PUT",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE"
};

/**The below api-end-points don't require auth_token. */
export const PUBLIC_API_END_POINTS = [
  API_ENDPOINTS.signUp,
  API_ENDPOINTS.login
];

export const UNAUTHORIZED_CODE = 401;

export const USER_ID = 101;
