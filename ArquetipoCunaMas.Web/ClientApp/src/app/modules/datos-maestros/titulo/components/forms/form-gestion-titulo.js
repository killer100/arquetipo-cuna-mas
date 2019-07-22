import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FORM_TYPE } from "app/core/enums/enums";
import confirm from "app/core/components/confirm";
import { buildTitulo } from "../../_store/_initial-state";
import DividerTitle from "app/core/components/divider-title";

const handleClose = (formType, close) => () => {
  if (formType == FORM_TYPE.CONSULTAR) {
    close();
  } else {
    confirm("Va a cerrar el Formulario. ¿Continuar?").then(confirm => {
      if (confirm) close();
    });
  }
};

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalGestionTitulo,
 *  store: import('../../_store/gestion-titulo.store').GestionTituloStore,
 *  normaData: import('../../_store/_initial-state').normaData
 * }} param0
 */
const FormGestionTitulo = ({ modal, store, normaData }) => {
  const [form, setForm] = useState(buildTitulo());

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={handleClose(
        modal.formType,
        store.modalGestionTituloActions.closeModal
      )}
      title={modal.title}
      onExited={() => {
        store.modalGestionTituloActions.resetModal();
      }}
      onSubmit={() => {
        console.log(form);
      }}
      loading={modal.loading}
      showSubmitButton={modal.formType != FORM_TYPE.CONSULTAR}
    >
      {normaData.norma && (
        <>
          <DividerTitle title="Datos de la Norma Legal" marginTop={false} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                value={normaData.norma.numeroNorma}
                fullWidth
                label="Número de la Norma"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={normaData.norma.descripcion}
                fullWidth
                label="Descripción de la Norma Legal"
              />
            </Grid>
          </Grid>
        </>
      )}

      <DividerTitle title="Datos de Título de la Norma Legal" />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.numeroTitulo}
            fullWidth
            label="Número del Título"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, numeroTitulo: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.descripcion}
            fullWidth
            label="Descripción del Título"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, descripcion: e.target.value })}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionTitulo;
