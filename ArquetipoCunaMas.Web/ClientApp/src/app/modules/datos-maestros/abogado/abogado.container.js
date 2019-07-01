import React, { Component } from "react";
import { intialState } from "./store/_initial-state";
import DataTable from "app/core/components/datatable";
import Card from "@material-ui/core/Card";
import FormBuscar from "./components/forms/form-buscar";
import PageTitle from "app/core/components/page-title";
import FormGestionAbogado from "./components/forms/form-gestion-abogado";
import GridActionButtons from "./components/buttons/grid-action-buttons";
import { abogadoStore } from "./store/abogado.store";

export default class AbogadoContainer extends Component {
  //=============================================
  // Configuracion del estado y el store
  //=============================================
  state = { ...intialState };

  store = abogadoStore(
    () => this.state,

    state => {
      this.setState(state);
    }
  );
  //=============================================

  componentDidMount() {
    this.buildGridButtons();
  }

  buildGridButtons = () => {
    const newColumn = {
      label: "Acciones",
      render: (item, loading) => (
        <GridActionButtons
          item={item}
          disabled={loading}
          onClickShow={this.store.modalGestionAbogadoActions.openModalShow}
          onClickEdit={this.store.modalGestionAbogadoActions.openModalUpdate}
        />
      )
    };

    this.store.buscadorAbogadoActions.setGridButtons(newColumn);
  };

  render() {
    const { buscadorAbogados, modalGestionAbogado } = this.state;
    const { modalGestionAbogadoActions } = this.store;

    return (
      <>
        <PageTitle text={"Titulo"}>asdasd</PageTitle>

        <FormBuscar
          onSearch={form => {
            console.log(form);
          }}
          onClear={form => {
            console.log(form);
          }}
          onClickNew={modalGestionAbogadoActions.openModalNew}
        />

        <Card elevation={8}>
          <DataTable
            tableDef={buscadorAbogados.tableDef}
            pagination={buscadorAbogados.pagination}
            onLoadData={e => {
              console.log(e);
            }}
          />
        </Card>

        <FormGestionAbogado modal={modalGestionAbogado} store={this.store} />
      </>
    );
  }
}
