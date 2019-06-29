import React, { Component } from "react";
import { intialState, buildAbogado, buildModalAbogado } from "./_variables";
import DataTable from "app/core/components/datatable";
import Card from "@material-ui/core/Card";
import FormBuscar from "./components/forms/form-buscar";
import PageTitle from "app/core/components/page-title";
import FormGestionAbogado from "./components/forms/form-gestion-abogado";
import update from "immutability-helper";
import GridActionButtons from "./components/buttons/grid-action-buttons";
import { FORM_TYPE } from "app/core/enums/enums";

export default class AbogadoContainer extends Component {
  state = { ...intialState };

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
          onClickShow={this.handleOpenModalShow}
          onClickEdit={this.handleOpenModalUpdate}
        />
      )
    };

    this.setState(
      update(this.state, {
        tableDef: {
          columns: { $push: [newColumn] }
        }
      })
    );
  };

  handleOpenModalNew = () => {
    const { modalGestionAbogado } = this.state;

    this.setState({
      modalGestionAbogado: { ...modalGestionAbogado, open: true }
    });
  };

  handleOpenModalShow = id => {
    this.setState(
      update(this.state, {
        modalGestionAbogado: {
          title: { $set: "Ver Abogado" },
          formType: { $set: FORM_TYPE.CONSULTAR },
          idAbogado: { $set: id },
          open: { $set: true }
        }
      })
    );
  };

  handleOpenModalUpdate = id => {
    this.setState(
      update(this.state, {
        modalGestionAbogado: {
          title: { $set: "Editar Abogado" },
          formType: { $set: FORM_TYPE.EDITAR },
          idAbogado: { $set: id },
          open: { $set: true }
        }
      })
    );
  };

  handleCloseModal = () => {
    this.setState({
      modalGestionAbogado: { ...this.state.modalGestionAbogado, open: false }
    });
  };

  resetModal = () => {
    this.setState({ modalGestionAbogado: buildModalAbogado() });
  };

  setModal = newModalState => {
    this.setState({ modalGestionAbogado: newModalState });
  };

  render() {
    const { tableDef, pagination, modalGestionAbogado } = this.state;

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
          onClickNew={this.handleOpenModalNew}
        />

        <Card elevation={8}>
          <DataTable
            tableDef={tableDef}
            pagination={pagination}
            onLoadData={e => {
              console.log(e);
            }}
          />
        </Card>

        <FormGestionAbogado
          modal={modalGestionAbogado}
          setModal={this.setModal}
          onClose={this.handleCloseModal}
          onReset={this.resetModal}
        />
      </>
    );
  }
}
