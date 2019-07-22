import update from "immutability-helper";
import { buildModalGestionTitulo } from "../_initial-state";
import { FORM_TYPE } from "app/core/enums/enums";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalGestionTituloActions {
  /**
   * @param {() => import('../_initial-state').modalGestionTitulo} getState
   * @param {(state:import('../_initial-state').modalGestionTitulo ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  openModalNew = () => {
    this.setState({ ...this.getState(), open: true });
  };

  openModalShow = idTitulo => {
    this.setState({
      ...this.getState(),
      open: true,
      idTitulo,
      formType: FORM_TYPE.CONSULTAR,
      title: "Ver Titulo"
    });
  };

  openModalEdit = idTitulo => {
    this.setState({
      ...this.getState(),
      open: true,
      idTitulo,
      formType: FORM_TYPE.EDITAR,
      title: "Editar Titulo"
    });
  };

  closeModal = () => {
    this.setState({ ...this.getState(), open: false });
  };

  resetModal = () => {
    this.setState(buildModalGestionTitulo());
  };
}
