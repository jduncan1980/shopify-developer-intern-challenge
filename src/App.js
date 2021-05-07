import React, { Fragment } from 'react';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import SearchBar from './components/Searchbar';
import CardContainer from './components/CardContainer';
function App() {
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
			<Container maxWidth='md'>
				<CardContainer
					searchResults={searchResults}
					searchParams={searchParams}
					nominations={nominations}
					setNominations={setNominations}
				/>
			</Container>
		</Fragment>
	);
}

export default App;
