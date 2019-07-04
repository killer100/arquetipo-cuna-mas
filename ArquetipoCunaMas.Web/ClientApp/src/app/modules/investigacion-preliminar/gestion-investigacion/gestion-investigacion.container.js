import React from "react";
import FormBuscarInvestigacion from "./components/forms/form-buscar-investigacion";
import { intialState } from "./_store/_initial-state";
import { GestionInvestigacionStore } from "./_store/gestion-investigacion.store";

class GestionInvestigacionContainer extends React.Component {
  state = { ...intialState };
  store = new GestionInvestigacionStore(
    () => this.state,
    this.setState.bind(this)
  );

  render() {
    const { filterLists } = this.state.buscadorInvestigacion;
    return (
      <>
        <FormBuscarInvestigacion filterLists={filterLists} />
      </>
    );
  }
}

export default GestionInvestigacionContainer;
