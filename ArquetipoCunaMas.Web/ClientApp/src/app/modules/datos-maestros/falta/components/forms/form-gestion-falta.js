import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { FORM_TYPE } from "app/core/enums/enums";
import confirm from "app/core/components/confirm";
import { buildFalta } from "../../_store/_initial-state";
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
 *  modal: import('../../_store/_initial-state').modalGestionFalta,
 *  store: import('../../_store/gestion-falta.store').GestionFaltaStore,
 *  articuloData: import('../../_store/_initial-state').articuloData
 * }} param0
 */
const FormGestionFalta = ({ modal, store, articuloData }) => {
  const [form, setForm] = useState(buildFalta());

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={handleClose(
        modal.formType,
        store.modalGestionFaltaActions.closeModal
      )}
      title={modal.title}
      onExited={() => {
        store.modalGestionFaltaActions.resetModal();
      }}
      onSubmit={() => {
        console.log(form);
      }}
      loading={modal.loading}
      showSubmitButton={modal.formType != FORM_TYPE.CONSULTAR}
    >
      {articuloData.articulo && (
        <>
          <DividerTitle title="Datos de la Norma Legal" marginTop={false} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número de la Norma"
                value={articuloData.articulo.capitulo.titulo.norma.numeroNorma}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción de la Norma Legal"
                value={articuloData.articulo.capitulo.titulo.norma.descripcion}
                fullWidth
              />
            </Grid>
          </Grid>

          <DividerTitle
            title="Datos del Título de la Norma Legal"
            marginTop={false}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número del Título"
                value={articuloData.articulo.capitulo.titulo.numeroTitulo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción del Título"
                value={articuloData.articulo.capitulo.titulo.descripcion}
                fullWidth
              />
            </Grid>
			 </Grid>
			 
			 <DividerTitle
            title="Datos del Capítulo de la Norma Legal"
            marginTop={false}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número del Capítulo"
                value={articuloData.articulo.capitulo.numeroCapitulo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción del Capítulo"
                value={articuloData.articulo.capitulo.descripcion}
                fullWidth
              />
            </Grid>
			 </Grid>
			 
			 <DividerTitle
            title="Datos del Artículo de la Norma Legal"
            marginTop={false}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Número / Literal del Artículo"
                value={articuloData.articulo.numeroArticulo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción del Artículo"
                value={articuloData.articulo.descripcion}
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}

      <DividerTitle title="Datos de la Falta de la Norma Legal" />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.numeroFalta}
            fullWidth
            label="Literal de la Falta"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, numeroFalta: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.descripcion}
            fullWidth
            label="Descripción de la Falta"
            disabled={modal.loading || modal.formType == FORM_TYPE.CONSULTAR}
            onChange={e => setForm({ ...form, descripcion: e.target.value })}
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionFalta;
