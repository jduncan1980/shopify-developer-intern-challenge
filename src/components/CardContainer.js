import { Grid } from '@material-ui/core';
import React from 'react';
import MovieCard from './MovieCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		width: '100%',
		margin: '2%',
		[theme.breakpoints.up('sm')]: {
			width: '100%',
		},
	},
	gridContainer: {
		width: '100%',
	},
}));

export default function CardContainer({
	cards,
	nominations,
	setNominations,
	isNomContainer,
}) {
	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.gridContainer}
			direction='column'
			justify='center'
			alignItems='stretch'
		>
			{cards &&
				cards.map((result, index) => {
					return (
						<Grid
							item
							className={classes.gridItem}
							key={`${result.Title} ${index}`}
						>
							<MovieCard
								movie={result}
								setNominations={setNominations}
								nominations={nominations}
								isNomContainer={isNomContainer}
							/>
						</Grid>
					);
				})}
		</Grid>
	);
}
