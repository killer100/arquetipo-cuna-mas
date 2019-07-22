import update from "immutability-helper";
import {
	buildModalGestionArticulo
} from "../_initial-state";
import {
	FORM_TYPE
} from "app/core/enums/enums";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalGestionArticuloActions {
	/**
	 * @param {() => import('../_initial-state').modalGestionArticulo} getState
	 * @param {(state:import('../_initial-state').modalGestionArticulo ) => void} setState
	 */
	constructor(getState, setState) {
		this.getState = getState;
		this.setState = setState;
	}

	openModalNew = () => {
		this.setState({
			...this.getState(),
			open: true
		});
	};

	openModalShow = idArticulo => {
		this.setState({
			...this.getState(),
			open: true,
			idArticulo,
			formType: FORM_TYPE.CONSULTAR,
			title: "Ver Artículo"
		});
	};

	openModalEdit = idArticulo => {
		this.setState({
			...this.getState(),
			open: true,
			idArticulo,
			formType: FORM_TYPE.EDITAR,
			title: "Editar Artículo"
		});
	};

	closeModal = () => {
		this.setState({
			...this.getState(),
			open: false
		});
	};

	resetModal = () => {
		this.setState(buildModalGestionArticulo());
	};
}