import update from "immutability-helper";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class BuscadorAbogadoActions {
  /**
   * @param {() => import('./_initial-state').buscadorAbogados} getState
   * @param {(state:import('./_initial-state').buscadorAbogados ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  setGridButtons = newColumn => {
    this.setState(
      update(this.getState(), {
        tableDef: {
          columns: { $push: [newColumn] }
        }
      })
    );
  };
}
