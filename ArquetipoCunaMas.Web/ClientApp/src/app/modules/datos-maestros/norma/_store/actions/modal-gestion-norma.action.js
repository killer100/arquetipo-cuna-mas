import update from "immutability-helper";
import { buildModalGestionNorma } from "../_initial-state";
import { FORM_TYPE } from "app/core/enums/enums";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalGestionNormaActions {
  /**
   * @param {() => import('../_initial-state').modalGestionNorma} getState
   * @param {(state:import('../_initial-state').modalGestionNorma ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  openModalNew = () => {
    this.setState({ ...this.getState(), open: true });
  };

  openModalShow = idNorma => {
    this.setState({
      ...this.getState(),
      open: true,
      idNorma,
      formType: FORM_TYPE.CONSULTAR,
      title: "Ver Norma / Reglamento"
    });
  };

  openModalEdit = idNorma => {
    this.setState({
      ...this.getState(),
      open: true,
      idNorma,
      formType: FORM_TYPE.EDITAR,
      title: "Editar Norma / Reglamento"
    });
  };

  closeModal = () => {
    this.setState({ ...this.getState(), open: false });
  };

  resetModal = () => {
    this.setState(buildModalGestionNorma());
  };
}
