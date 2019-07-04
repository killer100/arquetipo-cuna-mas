import update from "immutability-helper";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class BuscadorInvestigacionActions {
  /**
   * @param {() => import('../_initial-state').buscadorInvestigacion} getState
   * @param {(state:import('../_initial-state').buscadorInvestigacion ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }
}
