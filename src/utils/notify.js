import { toast } from "react-toastify";

export const notifySuccess = (msg) =>
  toast.success(msg || "Operation successful");

export const notifyError = (msg) => toast.error(msg || "Something went wrong");

export const notifyInfo = (msg) => toast.info(msg);

export const notifyWarning = (msg) => toast.warning(msg);
