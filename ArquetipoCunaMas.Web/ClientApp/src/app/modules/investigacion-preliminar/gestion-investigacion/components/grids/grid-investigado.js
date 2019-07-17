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

const gridInvestigadosDef = {
  columns: [
    { label: "DNI", property: "dniInvestigado" },
    { label: "Nombres", property: "nombres" },
    { label: "Primer Apellido", property: "primerApellido" },
    { label: "Segundo Apellido", property: "segundoApellido" },
    { label: "Unidad Orgánica", property: "dependencia" }
  ]
};

const GridInvestigado = ({ investigados, onClickNew }) => {
  const classes = useStyles();
  const [gridDef, setGridDef] = useState(gridInvestigadosDef);

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
        items={investigados}
        tableDef={gridDef}
        emptyMessage="No hay investigados"
      />
    </>
  );
};

GridInvestigado.defaultProps = {
  investigados: []
};

export default GridInvestigado;
