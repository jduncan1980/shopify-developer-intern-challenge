import { Snackbar, MuiAlert, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import CardContainer from './CardContainer.js';
import Banner from './FiveNomsBanner';

const useStyles = makeStyles((theme) => ({
	root: {},
}));
export default function Nominations({ nominations, setNominations }) {
	const classes = useStyles();
	return (
		<Fragment>
			<Typography>Nominations</Typography>
			<Banner nominations={nominations} />
			<CardContainer
				cards={nominations}
				nominations={nominations}
				setNominations={setNominations}
				isNomContainer={true}
			/>
		</Fragment>
	);
}
