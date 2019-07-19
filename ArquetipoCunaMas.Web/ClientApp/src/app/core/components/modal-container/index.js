import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const ModalContainer = ({
  open,
  onSave,
  onClose,
  onExited,
  title,
  children,
  loading,
  maxWidth,
  fullWidth,
  onEnter,
  disableBackdropClick,
  disableEscapeKeyDown,
}) => {
  return (
    <Dialog
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      onExited={onExited}
      aria-labelledby="form-dialog-title"
      fullWidth={fullWidth}
      onEnter={onEnter}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      {loading && <LinearProgress />}
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button type="button" onClick={onClose} color="default">
          Cancelar
        </Button>
        <Button type="button" color="primary" onClick={onSave}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalContainer.defaultProps = {
  maxWidth: "xs",
  fullWidth: false,
  disableBackdropClick: true,
  disableEscapeKeyDown: true
};

export default ModalContainer;
