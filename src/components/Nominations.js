import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CardContainer from './CardContainer.js';
import Banner from './FiveNomsBanner';

const useStyles = makeStyles((theme) => ({
	typo: {
		marginBottom: '10%',
	},
	root: {
		backgroundColor: 'lightgray',
		minHeight: '500px',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '20px',
		borderStyle: 'solid 4px black',
		margin: '20px 0 20px 0',
	},
}));
export default function Nominations({ nominations, setNominations }) {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Typography className={classes.typo} align='center' variant='h3'>
				Nominations
			</Typography>
			<Banner nominations={nominations} />
			<CardContainer
				cards={nominations}
				nominations={nominations}
				setNominations={setNominations}
				isNomContainer={true}
			/>
		</Container>
	);
}
