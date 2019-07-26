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

const gridRequerimientosDef = {
  columns: [
    { label: "Descripción", property: "descripcionArchivo" },
    { label: "Nombre del archivo", property: "nombreArchivo" },
    { label: "Fecha de Carga", property: "fechaRegistro" }
  ]
};

const GridRequerimiento = ({ requerimientos, onClickNew }) => {
  const classes = useStyles();
  const [gridDef, setGridDef] = useState(gridRequerimientosDef);

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
            onClick={onClickNew}
          >
            <Icon>add_circle</Icon>
            Agregar
          </Button>
        }
      />

      <ListTable
        items={requerimientos}
        tableDef={gridDef}
        emptyMessage="No hay requerimientos"
      />
    </>
  );
};

GridRequerimiento.defaultProps = {
  requerimientos: []
};

export default GridRequerimiento;
