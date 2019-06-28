import AbogadoContainer from "./abogado/abogado.container";

const parentRoute = "/datos-maestros";

export const datosMaestroRoutes = [
  { path: `${parentRoute}/abogado`, component: AbogadoContainer }
];