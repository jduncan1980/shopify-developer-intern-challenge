import React, { Fragment } from 'react';
import { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SearchBar from './components/Searchbar';
import CardContainer from './components/CardContainer';
import Nominations from './components/Nominations';

const useStyles = makeStyles((theme) => ({
	gridItem: {
		width: '100%',
		margin: '2%',
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
	const [nominations, setNominations] = useState([]);
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
				justify='center'
				alignItems='center'
			>
				<Grid className={classes.gridItem} item>
					<CardContainer
						cards={searchResults}
						nominations={nominations}
						setNominations={setNominations}
						isNomContainer={false}
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
