import { buildModalFormInvestigado } from "../_initial-state";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalFormInvestigacionActions {
  /**
   * @param {() => import('../_initial-state').modalFormInvestigado} getState
   * @param {(state:import('../_initial-state').modalFormInvestigado ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  openModal = () => {
    this.setState({ ...this.getState(), open: true });
  };

  closeModal = () => {
    this.setState({ ...this.getState(), open: false });
  };

  resetModal = () => {
    this.setState(buildModalFormInvestigado());
  };
}
