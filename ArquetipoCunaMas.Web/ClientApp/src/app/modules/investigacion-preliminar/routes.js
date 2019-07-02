import GestionInvestigacionContainer from "./gestion-investigacion/gestion-investigacion.container";

const parentRoute = "/investigacion";

export const investigacionPreliminarRoutes = [
  { path: `${parentRoute}`, component: GestionInvestigacionContainer }
];
