import emailjs from "emailjs-com";

import { Toast } from "@/components/Toast";
import { ToastEnum } from "@/components/types";
import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_KEY,
  EMAIL_JS_TEMPLATE_KEY,
} from "@/constant";

import { ContactFormType } from "../types/Contact";

export const useSendEmail = (data: ContactFormType) => {
  emailjs
    .send(
      EMAIL_JS_SERVICE_KEY,
      EMAIL_JS_TEMPLATE_KEY,
      data,
      EMAIL_JS_PUBLIC_KEY
    )
    .then(
      () => {
        Toast({
          title: "Success",
          description: "Message sent successfully",
          type: ToastEnum.SUCCESS,
        });
      },
      () => {
        Toast({
          title: "Error",
          description: "Email not sent",
          type: ToastEnum.ERROR,
        });
      }
    );
};
