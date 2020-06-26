import React, { Component } from 'react';
// import firebase from './firebase';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentCity: "Toronto",
			event: [],
		};
	}

	// Function to convert date from YYYY-MM-DD format to Weekday Month Day Year format
	dateConvert(d) {
		let newDate = new Date(d);
		
		newDate = new Date(newDate.setTime(newDate.getTime() + 1 * 86400000));

		const date = newDate.toDateString();

		return date;
	};

	// Function to parse data
	mapToAppData(res)  {
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

			// To get city, country, and City, Country combo as some entries will not have a state value (ie: Canada has provinces, not states)
			const city = data._embedded.venues[0].city.name;
			
			const country = data._embedded.venues[0].country.name;
			
			const cityCountry = `${city}, ${country}`;
			
			// To get Date
			const dateStr = data.dates.start.localDate;

			const dateFormat = this.dateConvert(dateStr);

			const dateNum = Date.parse(dateStr);

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
					dateNum,
					dateFormat
				},
				imgUrl,
				tickets,
				price //
			});		
		})
		return resEvent;
		}
	
	componentDidMount() {
		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events",
			method: "GET",
			responseType: "JSON",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				// type: "event",
				locale: "en-us",
				segment: "music",
				city: this.state.currentCity,
			}
		}).then(response => {
			const res = response.data._embedded.events;
			console.log(res)
			const resEvent = this.mapToAppData(res);

			this.setState({
				event: resEvent,
			})
		})
	}
		

	render() {
		return (
			<div className="App">
				<p>Hello</p>
			</div>
		)
	}
}

export default App;
