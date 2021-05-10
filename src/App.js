import React, { Fragment, useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useLocalStorage } from './hooks/useLocalStorage';
import SearchBar from './components/Searchbar';
import Results from './components/Results';
import Nominations from './components/Nominations';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '40%',
		},
	},
	gridContainer: {
		width: '100%',
	},
}));

function App() {
	const classes = useStyles();
	const [searchResults, setSearchResults] = useState(null);
	const [searchParams, setSearchParams] = useState('');
	const [nominations, setNominations] = useLocalStorage('nominations', []);

	return (
		<Fragment>
			<SearchBar
				setSearchResults={setSearchResults}
				searchResults={searchResults}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<Grid
				className={classes.gridContainer}
				container
				direction='row'
				justify='space-around'
				alignItems='flex-start'
			>
				<Grid className={classes.gridItem} item>
					<Results
						cards={searchResults}
						nominations={nominations}
						setNominations={setNominations}
					/>
				</Grid>
				<Grid className={classes.gridItem} item>
					<Nominations
						nominations={nominations}
						setNominations={setNominations}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default App;
