/** @format */

import { store as notificationStore } from "react-notifications-component";

const defaultOptions = {
  type: "success",
  insert: "bottom",
  container: "top-right",
  dismiss: {
    duration: 3000,
    pauseOnHover: true,
    onScreen: false,
    showIcon: true
  }
};

export const addNotification = ({
  type,
  title,
  message,
  insert,
  container,
  dismissOptions
}) => {
  return notificationStore.addNotification({
    type: type || defaultOptions.type,
    title,
    message,
    insert: insert || defaultOptions.insert,
    container: container || defaultOptions.container,
    dismiss: dismissOptions
      ? { ...defaultOptions.dismiss, ...dismissOptions }
      : defaultOptions.dismiss
  });
};

export const dangerNotification = (message, duration = 3000, title = "") => {
  return addNotification({
    type: "danger",
    title,
    message,
    duration
  });
};

export const successNotification = (message, title = "") => {
  return addNotification({
    type: "success",
    title,
    message
  });
};

export const removeNotification = notificationId => {
  return notificationStore.removeNotification(notificationId);
};
