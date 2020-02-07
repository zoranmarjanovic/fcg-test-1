import { toast } from "react-toastify";

export const NotifyError = (value = "Some Error Occured") => {
  toast.error(value);
};

export const NotifySuccess = (value = "Success") => {
  toast.success(value);
};
