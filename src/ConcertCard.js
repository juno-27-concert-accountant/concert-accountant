import React, { Component } from 'react';
import axios from 'axios';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import { Link } from 'react-router-dom';

class ConcertCard extends Component {
	constructor() {
		super();

		this.state = {
			currentCity: "Toronto",
			event: [],
			modalEvent: "",
		};
	}

	// Function to convert date from YYYY-MM-DD format to Weekday Month Day Year format
	dateConvert(d) {
		let newDate = new Date(d);
		
		newDate = new Date(newDate.setTime(newDate.getTime() + 1 * 86400000));

		const date = newDate.toDateString();

		return date;
	};

	collectPrice (data) {
		if (data.priceRanges) {
			return ({
				type: data.priceRanges[0].type,
				currency: data.priceRanges[0].currency,
				min: `$${data.priceRanges[0].min.toFixed(2)}`,
				max: `$${data.priceRanges[0].max.toFixed(2)}`,
				status: false,
			})
		} else {
			return ({
				type: false,
				currency: false,
				min: false,
				max: false,
				status: "No ticket prices to show."
			})
		}
	}

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
			const price = this.collectPrice(data);

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
				price,
			});		
		})
		return resEvent;
	};
	
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
			
			const resEvent = this.mapToAppData(res);

			this.setState({
				event: resEvent,
			})
		})
	}



	render() {
		return (
			<>
			{ this.state.event.map( entry => {
				return (
					<div key={entry.eventID} className="concertCell">
						<div eventID={entry.eventID} className="imageContainer">
							<Link to={`/event/${entry.eventID}`}>
								<img src={entry.imgUrl} alt={entry.name}/>
							</Link>
						</div>
						<div className="concertInfo">
							<h2>{entry.name}</h2>
							<h3>@ {entry.venue}</h3>
							<p>{entry.date.dateFormat}</p>

						</div>

						
					</div>
			)})}
			</>
		)
	
}}

export default ConcertCard;