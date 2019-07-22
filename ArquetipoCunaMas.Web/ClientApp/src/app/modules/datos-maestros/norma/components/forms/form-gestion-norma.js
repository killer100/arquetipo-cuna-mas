import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FORM_TYPE } from "app/core/enums/enums";
import { buildNorma } from "../../_store/_initial-state";
import confirm from "app/core/components/confirm";

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
 *  modal: import('../../_store/_initial-state').modalGestionNorma,
 *  store: import('../../_store/gestion-norma.store').GestionNormaStore
 * }} param0
 */
const FormGestionNorma = ({ modal, store }) => {
  const [form, setForm] = useState(buildNorma());

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={handleClose(
        modal.formType,
        store.modalGestionNormaActions.closeModal
      )}
      title={modal.title}
      onExited={() => {
        store.modalGestionNormaActions.resetModal();
      }}
      onSubmit={() => {
        console.log(form);
      }}
      loading={modal.loading}
      showSubmitButton={modal.formType != FORM_TYPE.CONSULTAR}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.numeroNorma}
            fullWidth
            label="Número de la Norma / Reglamento"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, numeroNorma: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.descripcion}
            fullWidth
            label="Descripción de la Norma Legal / Reglamento"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, descripcion: e.target.value })}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionNorma;
