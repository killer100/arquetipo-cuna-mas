import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const ModalFormContainer = ({ open, onSubmit, onClose, onExited, title, children }) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			onExited={onExited}
			aria-labelledby="form-dialog-title">
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="default">
					Cancelar
          	</Button>
				<Button onClick={onClose} color="primary">
					Guardar
          	</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ModalFormContainer;
