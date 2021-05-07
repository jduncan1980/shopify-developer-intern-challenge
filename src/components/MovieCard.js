import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
	},
	media: {
		width: '100%',
		height: '150px',
	},
});

export default function MovieCard({
	title,
	image,
	year,
	nominations,
	setNominations,
}) {
	const classes = useStyles();

	const handleNomination = (movie) => {
		setNominations((prevState) => [...prevState, movie]);
		console.log(nominations);
	};
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} title={title} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{year}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size='small'
					color='primary'
					onClick={() => handleNomination(title)}
				>
					Nominate
				</Button>
			</CardActions>
		</Card>
	);
}
