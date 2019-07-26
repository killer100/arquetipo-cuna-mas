import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import { buildAbogado } from "../../_store/_initial-state";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { FORM_TYPE } from "app/core/enums/enums";
import ButtonIconInputSearch from "app/core/components/buttons/button-icon-input-search";
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
 *  modal: import('../../_store/_initial-state').modalGestionAbogado,
 *  store: import('../../_store/abogado.store').AbogadoStore
 * }} param0
 */

const FormGestionAbogado = ({ modal, store }) => {
  const [foundPerson, setFoundPerson] = useState(false);
  const [form, setForm] = useState(buildAbogado());

  useEffect(() => {
    setFoundPerson(false);
    if (modal.idAbogado != null) {
      store.modalGestionAbogadoActions
        .asyncGetAbogado(modal.idAbogado)
        .then(abogado => {
          if (abogado) setFoundPerson(true);
        });
    }
  }, [modal.idAbogado]);

  useEffect(() => setForm(modal.abogado), [modal.abogado]);

  const removeDni = () => {
    setFoundPerson(false);
    setForm(buildAbogado());
  };

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={handleClose(
        modal.formType,
        store.modalGestionAbogadoActions.closeModal
      )}
      title={modal.title}
      onExited={() => {
        store.modalGestionAbogadoActions.resetModal();
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
                <ButtonIconInputSearch
                  disabled={modal.loading}
                  found={foundPerson}
                  onClickSearch={() => {
                    console.log("buscar dni");
                  }}
                  onClickRemove={removeDni}
                />
              )
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField value={form.nombres} fullWidth label="Nombres" disabled />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.primerApellido}
            fullWidth
            label="Primer Apellido"
            disabled
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.segundoApellido}
            fullWidth
            label="Segundo Apellido"
            disabled
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  );
};

export default FormGestionAbogado;
