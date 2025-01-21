import { PAGE_ROUTES } from "@/routes/routes.constant";

export const navbarItems = [
  { path: PAGE_ROUTES.LANDING, label: "Home" },
  { path: PAGE_ROUTES.SERVICES, label: "Services" },
  { path: PAGE_ROUTES.PROJECTS, label: "Projects" },
  { path: PAGE_ROUTES.ABOUT, label: "About " },
  { path: PAGE_ROUTES.CONTACT, label: "Contact" },
];

export const EMAIL_JS_SERVICE_KEY = import.meta.env.VITE_APP_SERVICES;
export const EMAIL_JS_TEMPLATE_KEY = import.meta.env.VITE_APP_TEMPLATE;
export const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC;
