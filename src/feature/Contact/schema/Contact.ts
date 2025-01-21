import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  from_name: yup.string().required("Name is required"),
  from_email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  subject: yup.string().required("Message is required"),
});
