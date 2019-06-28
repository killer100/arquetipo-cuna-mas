import React, { Component } from "react";
import { intialState } from "./_variables";
import DataTable from "app/core/components/datatable";
import Card from "@material-ui/core/Card";
import FormBuscar from "./components/forms/form-buscar";
import PageTitle from "app/core/components/page-title";

export default class AbogadoContainer extends Component {
  state = { ...intialState };

  componentDidMount() {
    console.log("componente monto");
  }

  render() {
    const { tableDef, pagination } = this.state;
    //console.log(pagination);
    return (
      <div>
        <PageTitle text={"Titulo"}>asdasd</PageTitle>
        <FormBuscar />

        <Card elevation={8}>
          <DataTable
            tableDef={tableDef}
            pagination={pagination}
            onLoadData={e => {
              console.log(e);
            }}
          />
        </Card>
      </div>
    );
  }
}
