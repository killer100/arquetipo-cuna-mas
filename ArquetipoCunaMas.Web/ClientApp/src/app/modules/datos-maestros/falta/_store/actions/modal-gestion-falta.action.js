import update from "immutability-helper";
import {
	buildModalGestionFalta
} from "../_initial-state";
import {
	FORM_TYPE
} from "app/core/enums/enums";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalGestionFaltaActions {
	/**
	 * @param {() => import('../_initial-state').modalGestionFalta} getState
	 * @param {(state:import('../_initial-state').modalGestionFalta ) => void} setState
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

	openModalShow = idFalta => {
		this.setState({
			...this.getState(),
			open: true,
			idFalta,
			formType: FORM_TYPE.CONSULTAR,
			title: "Ver Falta"
		});
	};

	openModalEdit = idFalta => {
		this.setState({
			...this.getState(),
			open: true,
			idFalta,
			formType: FORM_TYPE.EDITAR,
			title: "Editar Falta"
		});
	};

	closeModal = () => {
		this.setState({
			...this.getState(),
			open: false
		});
	};

	resetModal = () => {
		this.setState(buildModalGestionFalta());
	};
}