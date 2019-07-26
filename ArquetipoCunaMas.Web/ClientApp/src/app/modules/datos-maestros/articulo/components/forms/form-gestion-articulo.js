import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FORM_TYPE } from "app/core/enums/enums";
import confirm from "app/core/components/confirm";
import { buildArticulo } from "../../_store/_initial-state";
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
 *  modal: import('../../_store/_initial-state').modalGestionArticulo,
 *  store: import('../../_store/gestion-articulo.store').GestionArticuloStore,
 *  capituloData: import('../../_store/_initial-state').capituloData
 * }} param0
 */
const FormGestionCapitulo = ({ modal, store, capituloData }) => {
  const [form, setForm] = useState(buildArticulo());

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={handleClose(
        modal.formType,
        store.modalGestionArticuloActions.closeModal
      )}
      title={modal.title}
      onExited={() => {
        store.modalGestionArticuloActions.resetModal();
      }}
      onSubmit={() => {
        console.log(form);
      }}
      loading={modal.loading}
      showSubmitButton={modal.formType != FORM_TYPE.CONSULTAR}
    >
      {capituloData.capitulo && (
        <>
          <DividerTitle title="Datos de la Norma Legal" marginTop={false} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número de la Norma"
                value={capituloData.capitulo.titulo.norma.numeroNorma}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción de la Norma Legal"
                value={capituloData.capitulo.titulo.norma.descripcion}
                fullWidth
              />
            </Grid>
          </Grid>

          <DividerTitle
            title="Datos de Título de la Norma Legal"
            marginTop={false}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número del Título"
                value={capituloData.capitulo.titulo.numeroTitulo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción del Título"
                value={capituloData.capitulo.titulo.descripcion}
                fullWidth
              />
            </Grid>
			 </Grid>
			 
			 <DividerTitle
            title="Datos de Capítulo de la Norma Legal"
            marginTop={false}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número del Capítulo"
                value={capituloData.capitulo.numeroCapitulo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción del Capítulo"
                value={capituloData.capitulo.descripcion}
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}

      <DividerTitle title="Datos de Artículo de la Norma Legal" />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.numeroArticulo}
            fullWidth
            label="Número / Literal del Artículo"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, numeroArticulo: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.descripcion}
            fullWidth
            label="Descripción del Artículo"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, descripcion: e.target.value })}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionCapitulo;
