import { useState, useEffect } from "react";
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	Container,
	Typography,
	makeStyles,
} from "@material-ui/core";

import "./App.css";

function App() {
	const [data, setData] = useState([]);

	const useStyles = makeStyles({
		card: {
			maxWidth: 345,
			boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
			backgroundColor: "#fafafa",
		},
		media: {
			height: 300,
		},
	});

	useEffect(() => {
		fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const styling = useStyles();

	return (
		<Container className="containerStyle">
			<Typography color="textPrimary" gutterBottom variant="h2" align="center">
				React Material UI Example
			</Typography>
			<Grid container spacing={3}>
				{data.map((character) => (
					<Grid item xs={12} sm={4} key={character.id}>
						<Card className={styling.card}>
							<CardMedia className={styling.media} image={character.img_url} />
							<CardContent>
								<Typography color="primary" variant="h5">
									{character.name}
								</Typography>
								<Typography color="secondary" variant="subtitle2">
									{character.status}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default App;
