import { BuscadorInvestigacionActions } from "./actions/buscador-investigacion.action";
import { BaseStore } from "app/core/store/base-store";

export class GestionInvestigacionStore extends BaseStore {
  /**
   * @param {() => import('./_initial-state').intialState} getState
   * @param {(state:import('./_initial-state').intialState, callback?: () => void ) => void} setState
   */
  constructor(getState, setState) {
    super(getState, setState);
    this.buscadorInvestigacionActions = new BuscadorInvestigacionActions(
      this.buildScopedGetState("buscadorInvestigacion"),
      this.buildScopedSetState("buscadorInvestigacion")
    );
  }
}
