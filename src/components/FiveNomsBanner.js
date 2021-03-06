import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Banner({ nominations }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (nominations.length === 5) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [nominations]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Congratulations! Five movies nominated!
				</Alert>
			</Snackbar>
		</div>
	);
}
