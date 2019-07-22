import update from "immutability-helper";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class NormaDataActions {
  /**
   * @param {() => import('../_initial-state').normaData} getState
   * @param {(state:import('../_initial-state').normaData ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  setIdNorma = idNorma => {
    this.setState({ ...this.getState(), idNorma });
  };

  setNorma = norma => {
    this.setState({ ...this.getState(), norma });
  };
}
