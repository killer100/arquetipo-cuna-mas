import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListTable from "app/core/components/list-table";
import update from "immutability-helper";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import GridToolbar from "app/core/components/grid-toolbar";

const useStyles = makeStyles(theme => ({
  typography: {
    marginTop: theme.spacing(3)
  },
  dividerTitle: {
    marginBottom: theme.spacing(3)
  },
  tableToolbar: {
    display: "flex"
  },
  toolbarItemsLeft: {
    flex: 1
  }
}));

const gridExpedientesDef = {
  columns: [
    { label: "Nro. de Expediente", property: "numeroExpedienteAnexo" },
    { label: "Fecha trámite", property: "fechaExpedienteDocumentario" },
    { label: "Remitente", property: "remitente" },
    { label: "Descripción", property: "descripcion" },
    { label: "Folios", property: "folioExpediente" }
  ]
};

const GridExpediente = ({ expedientes }) => {
  const classes = useStyles();
  const [gridDef, setGridDef] = useState(gridExpedientesDef);

  useEffect(() => {
    setGridDef(
      update(gridDef, {
        columns: {
          $push: [
            {
              label: "Acciones",
              render: () => <div>acciones</div>
            }
          ]
        }
      })
    );
  }, []);

  return (
    <>
      <GridToolbar
        hideNew
        rightSection={
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Icon>add_circle</Icon>
            Agregar
          </Button>
        }
      />

      <ListTable
        items={expedientes}
        tableDef={gridDef}
        emptyMessage="No hay expedientes"
      />
    </>
  );
};

GridExpediente.defaultProps = {
  expedientes: []
};

export default GridExpediente;
