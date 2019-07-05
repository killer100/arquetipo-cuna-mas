import React, { Component, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormSearchContainer from "app/core/components/form-search-container";
import GridToolbar from "app/core/components/grid-toolbar";
import { buildFormBuscarInvestigacion } from "../../_store/_initial-state";
import SelectField from "app/core/components/select-field";
//import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

/**
 *
 * @param {{
 *  onSearch: () => void,
 *  onClear: () => void,
 *  filterLists: import('../../_store/_initial-state').IFilterList
 * }} param0
 */
const FormBuscarInvestigacion = ({
  onSearch,
  onClear,
  onClickNew,
  filterLists
}) => {
  const [state, setState] = useState(buildFormBuscarInvestigacion());

  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <FormSearchContainer
            onSearch={() => {
              onSearch(state);
            }}
            onClear={() => {
              setState(buildFormBuscarInvestigacion());
              onClear(buildFormBuscarInvestigacion());
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <SelectField
                fullWidth
                label="Unidad orgánica"
                value={state.idDependenciaDenunciante}
                onChange={e => {
                  setState({
                    ...state,
                    idDependenciaDenunciante: e.target.value
                  });
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                options={filterLists.dependencias.value}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <SelectField
                fullWidth
                label="Abogado responsable del expediente"
                value={state.idAbogado}
                onChange={e => {
                  setState({
                    ...state,
                    idAbogado: e.target.value
                  });
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                options={filterLists.abogados.value}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="Nombre del investigado"
                value={state.nombreInvestigado}
                onChange={e =>
                  setState({ ...state, nombreInvestigado: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <SelectField
                fullWidth
                label="Estado del expediente"
                value={state.idEstadoExpediente}
                onChange={e => {
                  setState({
                    ...state,
                    idEstadoExpediente: e.target.value
                  });
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                options={filterLists.estados.value}
              />
            </Grid>
            <Grid>
              {/* <DatePicker
                emptyLabel="dd/mm/yyyy"
                format={dateFormat}
                autoOk
                className={classes.textField}
                clearable
                label="Buscar desde"
                value={filters.fecha_inicio}
                onChange={onDateChange("fecha_inicio")}
                animateYearScrolling={false}
                disabled={loading}
                fullWidth
                cancelLabel="Cancelar"
                disableFuture
              /> */}
            </Grid>
          </FormSearchContainer>
        </CardContent>
      </Card>
      <GridToolbar onClickNew={onClickNew} />
    </>
  );
};

export default FormBuscarInvestigacion;
