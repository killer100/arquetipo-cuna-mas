import { buildModalFormAnexoExpediente } from "../_initial-state";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class ModalFormAnexoExpedienteActions {
  /**
   * @param {() => import('../_initial-state').modalFormAnexoExpediente} getState
   * @param {(state:import('../_initial-state').modalFormAnexoExpediente ) => void} setState
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
    this.setState(buildModalFormAnexoExpediente());
  };
}
