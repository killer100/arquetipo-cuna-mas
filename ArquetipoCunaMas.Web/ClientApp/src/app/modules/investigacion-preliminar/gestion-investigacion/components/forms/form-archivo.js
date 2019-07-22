import React, { useState } from "react";
import ModalFormContainer from "app/core/components/modal-form-container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import ListFiles from "../lists/list-files";
import update from "immutability-helper";
import { UploadTempFile } from "app/core/api/file-upload.api";
import toast from "app/core/components/toast";
import confirm from "app/core/components/confirm";

const MAX_LOAD_FILES = 5;

const useStyles = makeStyles(theme => ({
  dropzone: {
    minHeight: 150,
    height: 150
  },
  hide: {
    display: "none"
  }
}));

const mapUploadedFiles = (files, descripcion) => {
  return files.map(file => ({
    ...file,
    tipoArchivo: descripcion,
    nombreArchivo: file.name,
    descripcionArchivo: descripcion
  }));
};

/**
 *
 * @param {{
 *  modal: import('../../_store/_initial-state').modalFormArchivo,
 *  store: import('../../_store/gestion-investigacion.store').GestionInvestigacionStore
 * }} param0
 */
const FormArchivo = ({ modal, store, onUploadFinish }) => {
  const [errorDescripcion, setErrorDescripcion] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [files, setFiles] = useState([]);
  const classes = useStyles();

  const handleClose = () => {
    confirm("Va cerrar el formulario, ¿Continuar?").then(confirm => {
      if (confirm) store.modalFormArchivoActions.closeModal();
    });
  };

  const handleSave = () => {
    setErrorDescripcion(null);

    if (!descripcion) {
      setErrorDescripcion("Debe ingresar la descripción");
      return false;
    }

    confirm("Va a subir los archivos seleccionados, ¿Continuar?").then(
      confirm => {
        if (confirm) {
          store.modalFormArchivoActions.setLoading(true);
          UploadTempFile(files)
            .then(resp => {
              toast("Archivos subidos correctamente!", "success");
              store.modalFormArchivoActions.setLoading(false);
              onUploadFinish(
                mapUploadedFiles(resp.data.files, modal.tipoArchivo.descripcion)
              );
              store.modalFormArchivoActions.closeModal();
            })
            .catch(err => {
              console.error(err);
              toast("Hubo un error al subir los archivos", "error");
              store.modalFormArchivoActions.setLoading(false);
            });
        }
      }
    );
  };

  return (
    <ModalFormContainer
      loading={modal.isLoading}
      open={modal.open}
      onClose={handleClose}
      onExited={() => {
        setFiles([]);
        setDescripcion("");
      }}
      fullWidth
      title="Agregar Archivo Adjunto"
      onSubmit={handleSave}
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
            helperText={errorDescripcion}
            error={errorDescripcion != null}
            disabled={modal.isLoading}
          />
        </Grid>

        <Grid item xs={12}>
          <DropzoneArea
            dropzoneClass={`${classes.dropzone} ${
              files.length >= MAX_LOAD_FILES ? classes.hide : ""
            }`}
            dropzoneText="Arrastre un archivo o click aquí"
            onDrop={fileDroped => {
              if (files.length < MAX_LOAD_FILES) {
                setFiles([...files, fileDroped]);
              }
            }}
            showAlerts={false}
            showPreviewsInDropzone={false}
            showPreviews={false}
            filesLimit={10000}
          />
        </Grid>

        {files.length > 0 && (
          <Grid item xs={12}>
            <ListFiles
              disabled={modal.isLoading}
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
