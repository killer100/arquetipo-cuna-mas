import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import { buildAnexoExpediente } from "../../_store/_initial-state";
import DatePicker from "app/core/components/datepicker";
import TextField from "@material-ui/core/TextField";
import ButtonIconInputSearch from "app/core/components/buttons/button-icon-input-search";
import { FORM_TYPE } from "app/core/enums/enums";
import confirm from "app/core/components/confirm";

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalFormAnexoExpediente,
 *  store: import('../../_store/gestion-investigacion.store').GestionInvestigacionStore
 * }} param0
 */
const FormAnexoExpediente = ({ modal, store, OnSaveAnexoExpediente }) => {
  const [foundExpediente, setFoundExpediente] = useState(false);
  const [form, setForm] = useState(buildAnexoExpediente());

  useEffect(() => setForm(modal.expediente), [modal.expediente]);

  const handleClose = () => {
    confirm("Va cerrar el formulario, ¿Continuar?").then(confirm => {
      if (confirm) store.modalFormAnexoExpedienteActions.closeModal();
    });
  };

  const handleSave = () => {
    if (!modal.idAnexoExpediente) {
      OnSaveAnexoExpediente(form);
      store.modalFormAnexoExpedienteActions.closeModal();
    } else {
    }
  };

  return (
    <>
      <ModalFormContainer
        open={modal.open}
        onClose={handleClose}
        onExited={store.modalFormAnexoExpedienteActions.resetModal}
        fullWidth
        maxWidth="md"
        title={modal.title}
        onSubmit={handleSave}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Número de Expediente"
              value={form.numeroExpedienteAnexo}
              onChange={e =>
                setForm({
                  ...form,
                  numeroExpedienteAnexo: e.target.value,
                })
              }
              InputProps={{
                endAdornment: modal.formType != FORM_TYPE.CONSULTAR && (
                  <ButtonIconInputSearch
                    disabled={modal.loading}
                    found={foundExpediente}
                    onClickSearch={() => {
                      console.log("buscar expediente");
                    }}
                    onClickRemove={() => {
                      console.log("remover expediente");
                    }}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePicker
              label="Fecha de Ingreso"
              value={form.fechaExpedienteDocumentario}
              disabled={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Remitente"
              value={form.remitente}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              fullWidth
              label="Descripción"
              value={form.descripcion}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Folios"
              value={form.folioExpediente}
              onChange={e =>
                setForm({
                  ...form,
                  folioExpediente: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>
      </ModalFormContainer>
    </>
  );
};

export default FormAnexoExpediente;
