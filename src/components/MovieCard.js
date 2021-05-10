import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'stretch',
		flexDirection: 'column',
	},
	media: {
		width: '100%',
		minHeight: '300px',
		backgroundSize: 'contain',
		marginTop: '10px',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function MovieCard({
	movie,
	nominations,
	setNominations,
	isNomContainer,
}) {
	const classes = useStyles();

	const handleNomination = (movie) => {
		setNominations([...nominations, movie]);
		console.log(nominations);
	};

	const handleUnnomination = (movie) => {
		setNominations(nominations.filter((nom) => nom !== movie));
	};
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={movie.Poster}
					title={movie.Title}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant='h5' component='h2'>
						{movie.Title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{movie.Year}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{isNomContainer ? (
					<Button
						fullWidth
						variant='contained'
						size='small'
						color='secondary'
						onClick={() => handleUnnomination(movie)}
						disabled={false}
					>
						Remove Nominee
					</Button>
				) : (
					<Button
						fullWidth
						variant='contained'
						size='small'
						color='primary'
						onClick={() => handleNomination(movie)}
						disabled={nominations.includes(movie) ? true : false}
					>
						Add Nominee
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
