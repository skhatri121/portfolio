import { useRoutes } from "react-router-dom";

import { allRoutes } from "./Routes";

const AppRoutes = () => {
  const routes = useRoutes(allRoutes);
  return routes;
};

export { AppRoutes };
