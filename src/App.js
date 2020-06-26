import React, { Component } from 'react';
// import firebase from './firebase';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {
			event: [],
		};
	}
	
	componentDidMount() {
		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events.json",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				// genre: "music",
				// name: "Madonna"
			}
		}).then(response => {
			const res = response.data._embedded.events;
			console.log(res)
			// Map over response to create obj with needed data
			const resEvent = res.map( (data) => {
				// To get ID
				const eventID = data.id;
				
				// To get the name of the artist
				const name = data.name;
				const artist = data._embedded.attractions.map(art => {
					return art.name
				});
				
				
				// To get the venue
				const venue =  data._embedded.venues[0].name;

				// To get city, state, and City, State combo
				const city = data._embedded.venues[0].city.name;
				const country = data._embedded.venues[0].country.name;
				const cityCountry = `${city}, ${country}`;
				
				// To get Date
				const dateStr = data.dates.start.localDate;
				const dateConvert = d => {
					const unixEpochTime = d;
					const newDate = new Date(unixEpochTime);
					const dateFull = new Date(newDate.setTime(newDate.getTime() + 1 * 86400000));

					const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

					const dateMonth = dateFull.getMonth();
					const dateDay = dateFull.getDate();

					const date = `${monthNames[dateMonth]} ${dateDay}`;
					console.log(date)
					return date;
				};

				const dateNum = dateConvert(dateStr);


				// To get image
				const imgUrl = data.images[0].url;

				// Link to purchase tickets
				const tickets = data.url;

				// To get price
				const price = "";

				// Return obj to push to this.state.event
				return ({
					eventID,
					name,
					artist,
					venue,
					location: {
						city,
						country,
						cityCountry,
					},
					date: {
						dateStr,
						dateNum
					},
					imgUrl,
					tickets,
					price
				})
				
			})

			// Update state with obj
			this.setState({
				event: resEvent,
			})

		})
	}
	
	render() {
		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
