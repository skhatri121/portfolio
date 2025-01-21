import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContactFormType } from "../types/Contact";
import { contactDefaultValues } from "../constant/contactDefaultValues";
import { ContactSchema } from "../schema/Contact";

//TODO: schema not working
export const useContactForm = () => {
  const formMethods = useForm<ContactFormType>({
    defaultValues: contactDefaultValues,
    resolver: yupResolver(ContactSchema),
  });

  return {
    contactMethods: formMethods,
  };
};
