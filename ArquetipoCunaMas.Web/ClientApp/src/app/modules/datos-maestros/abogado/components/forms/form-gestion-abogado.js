import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import { buildAbogado } from "../../_variables";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FORM_TYPE } from "app/core/enums/enums";

const useStyles = makeStyles(theme => ({}));
/**
 *
 * @param {{
 * 	modal: {title: string, open: boolean, loading: boolean, formType: number, abogado: any },
 *  setModal: (modal: {title: string, open: boolean, loading: boolean, formType: number, abogado: any }) => void
 * }} param0
 */

const FormGestionAbogado = ({ modal, setModal, onClose, onReset }) => {
  const [foundPerson, setFoundPerson] = useState(false);
  const [form, setForm] = useState(buildAbogado());
  const classes = useStyles();

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={onClose}
      title={modal.title}
      onExited={onReset}
      onSubmit={() => {
        console.log(form);
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.dniAbogado}
            fullWidth
            label="N° DNI"
            disabled={modal.loading}
            onChange={e => setForm({ ...form, dniAbogado: e.target.value })}
            inputProps={{
              maxLength: 8,
              readOnly: foundPerson
            }}
            InputProps={{
              endAdornment: modal.formType != FORM_TYPE.CONSULTAR && (
                <InputAdornment position="end">
                  {foundPerson ? (
                    <IconButton onClick={() => {}}>
                      <Icon>delete</Icon>
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => {}}>
                      <Icon>search</Icon>
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.nombres}
            fullWidth
            label="Nombres"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.primerApellido}
            fullWidth
            label="Primer Apellido"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.segundoApellido}
            fullWidth
            label="Segundo Apellido"
            disabled={true}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionAbogado;
