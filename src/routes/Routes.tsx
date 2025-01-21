import AboutScreen from "@/feature/About/screens";
import HomeScreen from "@/feature/Landing/screens";
import ContactScreen from "@/feature/Contact/screens";
import ProjectScreen from "@/feature/Projects/screens";
import ServiceScreen from "@/feature/ServiceScreen/screens";

import { Layout } from "@/components/Layout/RootLayout";

import { PAGE_ROUTES } from "./routes.constant";

export const allRoutes = [
  {
    path: PAGE_ROUTES.LANDING,
    element: (
      <Layout>
        <HomeScreen />
      </Layout>
    ),
  },
  {
    path: PAGE_ROUTES.PROJECTS,
    element: (
      <Layout>
        <ProjectScreen />
      </Layout>
    ),
  },
  {
    path: PAGE_ROUTES.SERVICES,
    element: (
      <Layout>
        <ServiceScreen />
      </Layout>
    ),
  },
  {
    path: PAGE_ROUTES.ABOUT,
    element: (
      <Layout>
        <AboutScreen />
      </Layout>
    ),
  },
  {
    path: PAGE_ROUTES.CONTACT,
    element: (
      <Layout>
        <ContactScreen />
      </Layout>
    ),
  },
];
