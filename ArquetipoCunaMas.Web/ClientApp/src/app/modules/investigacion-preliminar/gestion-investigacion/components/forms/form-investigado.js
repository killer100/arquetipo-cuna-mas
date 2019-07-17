import React, { useState, useEffect } from "react";
import { buildInvestigado } from "../../_store/_initial-state";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import { FORM_TYPE } from "app/core/enums/enums";
import SelectField from "app/core/components/select-field";
import TextField from "@material-ui/core/TextField";
import ButtonIconInputSearch from "app/core/components/buttons/button-icon-input-search";
import { FetchDependencias } from "app/core/api/maestros.api";

const defaultListDependencias = {
  value: [],
  loading: false
};

const loadDependencias = (list, setList) => () => {
  setList({ ...list, loading: true });
  FetchDependencias().then(response => {
    setList({ loading: false, value: response.data.dependencias });
  });
};

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalFormInvestigado,
 *  store: import('../../_store/gestion-investigacion.store').GestionInvestigacionStore
 * }} param0
 */
const FormInvestigado = ({ modal, store }) => {
  const [listDependencias, setListDependencias] = useState(
    defaultListDependencias
  );
  const [foundInvestigado, setFoundInvestigado] = useState(false);
  const [form, setForm] = useState(buildInvestigado());

  useEffect(() => setForm(modal.investigado), [modal.investigado]);

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={store.modalFormInvestigacionActions.closeModal}
      fullWidth
      title={modal.title}
      onExited={store.modalFormInvestigacionActions.resetModal}
      onEnter={loadDependencias(listDependencias, setListDependencias)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Número del DNI"
            value={form.dniInvestigado}
            onChange={e =>
              setForm({
                ...form,
                dniInvestigado: e.target.value
              })
            }
            InputProps={{
              endAdornment: modal.formType != FORM_TYPE.CONSULTAR && (
                <ButtonIconInputSearch
                  disabled={modal.loading}
                  found={foundInvestigado}
                  onClickSearch={() => {
                    console.log("buscar investigado");
                  }}
                  onClickRemove={() => {
                    console.log("remover investigado");
                  }}
                />
              )
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nombres de la Persona"
            value={form.nombres}
            disabled={true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Primer Apellido de la Persona"
            value={form.primerApellido}
            disabled={true}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Segundo Apellido de la Persona"
            value={form.segundoApellido}
            disabled={true}
          />
        </Grid>

        <Grid item xs={12}>
          <SelectField
            fullWidth
            label="Unidad Orgánica"
            value={form.idDependencia}
            onChange={e => {
              setForm({
                ...form,
                idDependencia: e.target.value
              });
            }}
            options={listDependencias.value}
            loading={listDependencias.loading}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormInvestigado;
