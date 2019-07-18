import React, { useState, useEffect } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import ListFiles from "../lists/list-files";
import update from "immutability-helper";

const MAX_LOAD_FILES = 5;

const useStyles = makeStyles(theme => ({
  dropzone: {
    minHeight: 150,
    height: 150
  }
}));

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalFormArchivo,
 *  store: import('../../_store/gestion-investigacion.store').GestionInvestigacionStore
 * }} param0
 */
const FormArchivo = ({ modal, store }) => {
  const [descripcion, setDescripcion] = useState([]);
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  return (
    <ModalFormContainer
      open={modal.open}
      onClose={store.modalFormArchivoActions.closeModal}
      onExited={() => {
        setFiles([]);
      }}
      fullWidth
      title="Agregar Archivo Adjunto"
      onSubmit={() => {
        console.log(files);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            disabled={true}
            fullWidth
            label="Tipo de Archivo"
            value={modal.tipoArchivo.descripcion}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Descripción del Archivo"
            value={descripcion}
            onChange={e => {
              setDescripcion(e.target.value);
            }}
          />
        </Grid>

        {files.length < MAX_LOAD_FILES && (
          <Grid item xs={12}>
            <DropzoneArea
              dropzoneClass={classes.dropzone}
              dropzoneText="Arrastre un archivo o click aquí"
              onDrop={fileDroped => {
                console.log("---", fileDroped);
                setFiles([...files, fileDroped]);
              }}
              showAlerts={false}
              showPreviewsInDropzone={false}
              showPreviews={false}
              filesLimit={MAX_LOAD_FILES}
            />
          </Grid>
        )}

        {files.length > 0 && (
          <Grid item xs={12}>
            <ListFiles
              files={files}
              icon={modal.tipoArchivo.icon}
              onRemove={i => () => {
                setFiles(update(files, { $splice: [[i, 1]] }));
              }}
            />
          </Grid>
        )}
      </Grid>
    </ModalFormContainer>
  );
};

export default FormArchivo;
