import React, { useState } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { buildExpedienteInvestigacion } from "../../_store/_initial-state";
import FormDatosGenerales from "./form-datos-generales";
import { makeStyles } from "@material-ui/core/styles";
import GridExpediente from "../grids/grid-expediente";
import GridInvestigado from "../grids/grid-investigado";
import GridArchivo from "../grids/grid-archivo";
import update from "immutability-helper";

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginTop: theme.spacing(3)
  }
}));

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalGestionInvestigacion,
 *  store: import('../../_store/gestion-investigacion.store').GestionInvestigacionStore
 * }} param0
 */
const FormGestionInvestigacion = ({ modal, store }) => {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState(buildExpedienteInvestigacion());

  const classes = useStyles();

  const handleExited = () => {
    setForm(buildExpedienteInvestigacion());
    store.modalGestionInvestigacionActions.resetModal();
  };

  return (
    <>
      <ModalFormContainer
        open={modal.open}
        onClose={store.modalGestionInvestigacionActions.closeModal}
        title={modal.title}
        onExited={handleExited}
        onSubmit={form => {
          console.log(form);
        }}
        loading={modal.loading}
        maxWidth="lg"
        fullWidth
      >
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, value) => setTab(value)}
        >
          <Tab label="Datos Generales" />
          <Tab label="Datos de la Hoja de Trámite" />
          <Tab label="Datos del investigado(a)" />
          <Tab label="Archivos Adjuntos" />
        </Tabs>
        <div className={classes.tabContainer}>
          {tab == 0 && <FormDatosGenerales form={form} setForm={setForm} />}
          {tab == 1 && (
            <div>
              <GridExpediente
                expedientes={form.expedientes}
                onClickNew={store.modalFormAnexoExpedienteActions.openModal}
              />
            </div>
          )}
          {tab == 2 && (
            <GridInvestigado
              investigados={form.investigados}
              onClickNew={store.modalFormInvestigacionActions.openModal}
            />
          )}
          {tab == 3 && (
            <GridArchivo
              archivos={form.archivos}
              onClickUpload={store.modalFormArchivoActions.openModal}
              onAddArchivo={files => {
                setForm(
                  update(form, {
                    expedienteInvestigacion: {
                      archivos: {
                        $push: files
                      }
                    }
                  })
                );
              }}
            />
          )}
        </div>
      </ModalFormContainer>
    </>
  );
};

export default FormGestionInvestigacion;
