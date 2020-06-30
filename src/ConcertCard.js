import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ConcertCard.css";

class ConcertCard extends Component {
	constructor() {
		super();

		this.state = {
			currentCity: "Toronto",
			event: [],
			modalEvent: "",
			filteredResults: [],
			isFiltered: false,
			filterPrice: "0",
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
				min: `${data.priceRanges[0].min.toFixed(2)}`,
				max: `${data.priceRanges[0].max.toFixed(2)}`,
				
			})
		} else {
			return ({
				type: false,
				currency: false,
				min: "N/A",
				max: "N/A",
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
			const imgUrl = data.images[2].url;

			// Link to purchase tickets
			const tickets = data.url;

			// To get price
			const price = this.collectPrice(data);

			// Return obj to push to this.state.event
			return ({
				eventID,
				name,
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
	
	handleChange(event) {

		this.filterResults(event.target.value);

		this.setState({
			filterPrice: parseFloat(event.target.value),
		})
	}

	renderConcertCell(entry) {
		return (
					
			<div key={entry.eventID} className="concertCell">
				<div className="imageContainer">

					
					
					<Link to={`/event/${entry.eventID}`}>
						<img src={entry.imgUrl} alt={entry.name} />
					</Link>

				</div>
				<div className="concertInfo">
					<h2>{entry.name}</h2>
					<p>{entry.date.dateFormat}</p>
					
					{
						entry.price.min === 'N/A' 
						? <p>No prices currently available.</p>
						: <p>Prices starting as low as ${entry.price.min}</p>
					}
				</div>
			</div>
		)
	}

	filterResults() {
		const eventCopy = this.state.event;
		let price = parseFloat(this.state.filterPrice);

		const filteredResults = eventCopy.filter((event) => {
				const shouldFilter = parseFloat(event.price.min) <= parseFloat(price)

				return shouldFilter
		})

		this.setState({
			filteredResults,
		})
	}

	showFiltered() {
		let isFiltered = true;

		if (this.state.filterPrice == "0") {
			isFiltered = false;
		} else {
			isFiltered = true;
		}

		this.setState({
			isFiltered,
		})

		this.filterResults();
	}

	componentDidMount() {
		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events",
			method: "GET",
			responseType: "JSON",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				locale: "en-us",
				segmentName: "music",
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
			<div className="wrapper">
			<div className="budgetFilter">
				<p>Filter results for your budget: </p>
				<select value={this.state.filterPrice} onChange={(e) => this.handleChange(e)}>
					<option value="0">All</option>
					<option value="25">$25 or Less</option>
					<option value="50">$50 or Less</option>
					<option value="75">$75 or Less</option>
					<option value="100">$100 or Less</option>
				</select>
				<button onClick={(e) => this.showFiltered(e)}>Filter</button>
			</div>
			<div className="concertCards">
			
			{
				this.state.isFiltered === false 
				? this.state.event.map(event => this.renderConcertCell(event)) 
				: this.state.filteredResults.map(event => this.renderConcertCell(event)) 
			}

			</div>
			</div>
		)
	
}}

export default ConcertCard;