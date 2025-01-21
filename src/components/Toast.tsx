import { ToastType } from "./types";
import { toaster } from "./ui/toaster";

export const Toast = ({ title, description, type }: ToastType) => {
  toaster.create({
    title: title,
    description: description,
    type: type,
  });
};
