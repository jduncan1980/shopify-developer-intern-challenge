import { Grid } from '@material-ui/core';
import React from 'react';
import MovieCard from './MovieCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		width: '30%',
		margin: '2%',
	},
}));

export default function CardContainer({
	searchResults,
	searchParams,
	nominations,
	setNominations,
}) {
	const classes = useStyles();
	return (
		<Grid container direction='row' justify='center' alignItems='stretch'>
			{/* {searchResults ? (
				<p>Search results for {searchParams}</p>
			) : (
				<p>No results found for {searchParams}</p>
			)} */}
			{searchResults &&
				searchResults.map((result) => {
					return (
						<Grid item className={classes.gridItem}>
							<MovieCard
								title={result.Title}
								year={result.Year}
								image={result.Poster}
								setNominations={setNominations}
								nominations={nominations}
							/>
						</Grid>
					);
				})}
		</Grid>
	);
}
