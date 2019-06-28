import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		marginBottom: theme.spacing(2)
	},
	leftSection: {
		flex: 1
	},
	rightSection: {

	}
}));

const GridToolbar = ({ hideNew, rightSection, leftSection, onClickNew }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.leftSection}>
				{leftSection}
			</div>
			<div className={classes.rightSection}>
				{rightSection}
				{!hideNew &&
					<Button type="button" variant="contained" color="primary" className={classes.button} onClick={onClickNew}>
						<Icon>add_circle</Icon>
						Nuevo
					</Button>
				}
			</div>
		</div>
	);
};

GridToolbar.defaultProps = {
	hideNew: false
};
export default GridToolbar;
