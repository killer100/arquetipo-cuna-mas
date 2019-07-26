import update from "immutability-helper";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ArticuloDataActions {
	/**
	 * @param {() => import('../_initial-state').articuloData} getState
	 * @param {(state:import('../_initial-state').articuloData ) => void} setState
	 */
	constructor(getState, setState) {
		this.getState = getState;
		this.setState = setState;
	}

	setIdArticulo = idArticulo => {
		this.setState({
			...this.getState(),
			idArticulo
		});
	};

	setArticulo = articulo => {
		this.setState({
			...this.getState(),
			articulo
		});
	};
}