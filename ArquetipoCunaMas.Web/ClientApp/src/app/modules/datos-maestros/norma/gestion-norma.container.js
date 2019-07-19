import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import DataTable from "app/core/components/datatable";
import { GestionNormaStore } from "./_store/gestion-norma.store";
import { initialState } from "./_store/_initial-state";
import { useStore } from "app/core/hooks/use-store.hook";
import update from "immutability-helper";

const gridDefinition = {
  columns: [
    { label: "Nro. Norma", property: "numeroNorma" },
    {
      label: "Descripción de la Norma",
      property: "descripcion",
    },
    { label: "Fecha de Registro", property: "fechaRegistro", isDate: true },
  ],
};

const GestionNormaContainer = ({}) => {
  const [gridDef, setGridDef] = useState(gridDefinition);
  const [state, setState] = useState(initialState);
  /**
   * @type {[GestionNormaStore]}
   */
  const [store] = useStore(state, setState, GestionNormaStore);

  const { loading, pagination } = state.buscadorNorma;

  useEffect(() => {
    setGridDef(
      update(gridDef, {
        columns: {
          $push: [{ label: "Acciones", render: (item, loading) => "Acciones" }],
        },
      }),
    );
  }, []);

  useEffect(() => {
    if (store) store.buscadorNormaActions.asyncFetchNormas();
  }, [store]);

  return (
    <>
      <Card elevation={8}>
        <DataTable
          loading={loading}
          tableDef={gridDef}
          pagination={pagination}
          onLoadData={() => {}}
        />
      </Card>
    </>
  );
};

export default GestionNormaContainer;
