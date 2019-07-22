import update from "immutability-helper";
import { buildModalGestionCapitulo } from "../_initial-state";
import { FORM_TYPE } from "app/core/enums/enums";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalGestionCapituloActions {
  /**
   * @param {() => import('../_initial-state').modalGestionCapitulo} getState
   * @param {(state:import('../_initial-state').modalGestionCapitulo ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  openModalNew = () => {
    this.setState({ ...this.getState(), open: true });
  };

  openModalShow = idCapitulo => {
    this.setState({
      ...this.getState(),
      open: true,
      idCapitulo,
      formType: FORM_TYPE.CONSULTAR,
      title: "Ver Capítulo"
    });
  };

  openModalEdit = idCapitulo => {
    this.setState({
      ...this.getState(),
      open: true,
      idCapitulo,
      formType: FORM_TYPE.EDITAR,
      title: "Editar Capítulo"
    });
  };

  closeModal = () => {
    this.setState({ ...this.getState(), open: false });
  };

  resetModal = () => {
    this.setState(buildModalGestionCapitulo());
  };
}
