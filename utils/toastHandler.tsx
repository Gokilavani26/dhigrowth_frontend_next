import toast, { ToastOptions } from "react-hot-toast";

const baseToastConfig: ToastOptions = {
  duration: 4000,
  position: "top-right",
};

export const toastSuccess = (
  message: string
): void => {
  toast.success(message, {
    ...baseToastConfig,
    className:
      "bg-green-50 border border-green-300 text-green-800 p-4 rounded-lg shadow-md",
    iconTheme: {
      primary: "#10B981",
      secondary: "#FFF",
    },
  });
};

export const toastError = (
  message: string
): void => {
  toast.error(message, {
    ...baseToastConfig,
    className:
      "bg-red-50 border border-red-300 text-red-800 p-4 rounded-lg shadow-md",
    iconTheme: {
      primary: "#EF4444",
      secondary: "#FFF",
    },
  });
};