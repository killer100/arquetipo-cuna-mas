import AbogadoContainer from "./abogado/abogado.container";
import GestionNormaContainer from "./norma/gestion-norma.container";

const parentRoute = "/datos-maestros";

export const datosMaestroRoutes = [

	{
		path: `${parentRoute}/abogado`,
		component: AbogadoContainer
	},

	{
		path: `${parentRoute}/norma`,
		component: GestionNormaContainer
	}

];