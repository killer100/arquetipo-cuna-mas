import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const ModalFormContainer = ({
  open,
  onSubmit,
  onClose,
  onExited,
  title,
  children,
  loading,
  maxWidth,
  fullWidth,
  onEnter
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
    >
      {loading && <LinearProgress />}
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button type="button" onClick={onClose} color="default">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

ModalFormContainer.defaultProps = {
  maxWidth: "xs",
  fullWidth: false
};

export default ModalFormContainer;
