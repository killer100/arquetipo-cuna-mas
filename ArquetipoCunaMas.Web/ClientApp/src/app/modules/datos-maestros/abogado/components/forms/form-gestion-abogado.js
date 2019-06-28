import React, { useState } from 'react';
import ModalFormContainer from 'app/core/components/modal-form-container';
import { buildAbogado } from '../../_variables';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from 'app/core/components/autocomplete';

const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '100%'
	}
}));

const FormGestionAbogado = ({ open, onClose, onReset, title }) => {

	const [state, setState] = useState(buildAbogado());

	return (
		<ModalFormContainer
			open={open}
			onClose={onClose}
			title={title}
			onExited={onReset}>

			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Autocomplete
						disabled={false}
						placeholder="Buscar Resolución"
						clearOnSelect
						labelProp="nro_resol"
						onSelect={()=> {}}
						url="/api/sitradoc/resoluciones"
						suggestionsProp="data.resoluciones"
					/>
				</Grid>
			</Grid>

		</ModalFormContainer>
	);
}

export default FormGestionAbogado;
