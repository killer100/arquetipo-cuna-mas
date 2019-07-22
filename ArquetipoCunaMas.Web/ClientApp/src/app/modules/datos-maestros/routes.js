import AbogadoContainer from "./abogado/abogado.container";
import GestionArticuloContainer from "./articulo/gestion-articulo.container";
import GestionCapituloContainer from "./capitulo/gestion-capitulo.container";
import GestionNormaContainer from "./norma/gestion-norma.container";
import GestionTituloContainer from "./titulo/gestion-titulo.container";

const parentRoute = "/datos-maestros";

export const datosMaestroRoutes = [
  {
    path: `${parentRoute}/abogados`,
    component: AbogadoContainer
  },
  {
    path: `${parentRoute}/normas`,
    component: GestionNormaContainer
  },
  {
    path: `${parentRoute}/titulos`,
    component: GestionTituloContainer
  },
  {
    path: `${parentRoute}/capitulos`,
    component: GestionCapituloContainer
  },
  {
	path: `${parentRoute}/articulos`,
	component: GestionArticuloContainer
 }
];
