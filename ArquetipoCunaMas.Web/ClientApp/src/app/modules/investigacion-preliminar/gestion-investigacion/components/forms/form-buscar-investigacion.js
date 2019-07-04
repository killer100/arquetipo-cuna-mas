import React, { Component, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormSearchContainer from "app/core/components/form-search-container";
import GridToolbar from "app/core/components/grid-toolbar";
import { buildFormBuscarInvestigacion } from "../../_store/_initial-state";

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
              <TextField
                fullWidth
                select
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
              >
                {filterLists.dependencias.value.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextField
                fullWidth
                select
                label="Abogado responsable del expediente"
                value={state.idDependenciaDenunciante}
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
              >
                {filterLists.abogados.value.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <TextField
                label="Primer apellido"
                value={state.primerApellido}
                onChange={e =>
                  setState({ ...state, primerApellido: e.target.value })
                }
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <TextField
                label="Segundo apellido"
                className={classes.textField}
                value={state.segundoApellido}
                onChange={e =>
                  setState({ ...state, segundoApellido: e.target.value })
                }
                margin="normal"
              />
            </Grid>
          </FormSearchContainer>
        </CardContent>
      </Card>
      <GridToolbar onClickNew={onClickNew} />
    </>
  );
};

export default FormBuscarInvestigacion;
