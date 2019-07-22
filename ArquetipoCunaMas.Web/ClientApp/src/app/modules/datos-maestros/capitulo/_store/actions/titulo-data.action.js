import update from "immutability-helper";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class TituloDataActions {
  /**
   * @param {() => import('../_initial-state').tituloData} getState
   * @param {(state:import('../_initial-state').tituloData ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  setIdTitulo = idTitulo => {
    this.setState({ ...this.getState(), idTitulo });
  };

  setTitulo = titulo => {
    this.setState({ ...this.getState(), titulo });
  };
}
