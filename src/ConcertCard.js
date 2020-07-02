import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ConcertCard.css";
import ConcertDetailsPopUp from './ConcertDetailsPopUp';

class ConcertCard extends Component {
	constructor() {
		super();
		this.state = {
			event: [],
			modalEvent: "",
			filteredResults: [],
			isFiltered: false,
			filterPrice: "0",
		};		
	};

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
				// tickets,
				price,
			});		
		})
		return resEvent;
	};
	//Update this.state.filterPrice on select
	handleChange(event) {

		this.filterResults(event.target.value);

		this.setState({
			filterPrice: parseFloat(event.target.value),
		})
	}

	renderConcertCell(entry) {
		return (
					
			<div key={entry.eventID} className="concertCell">
				<Link to={`/event/${entry.eventID}`}>
				<div className="imageContainer">

					<img src={entry.imgUrl} alt={entry.name} />	

				</div>
				<div className="concertInfo">
					<h2>{entry.name}</h2>
					<p>{entry.date.dateFormat}</p>
					
					{entry.price.min === 'N/A' 
						? <p>No prices currently available.</p>
						: <p>Prices starting as low as ${entry.price.min}</p>}
				</div>
			</Link>
				
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

	runAxios() {
		// let city = this.props.data.location[0] || "Toronto";
		// let keyword = this.props.data.artist || "";

		let city = "";
		let keyword = "";

		if (this.props.data === undefined) {
			city = "Toronto";
		} else {
			city = this.props.data.location[0]
		}

		if (this.props.data === undefined) {
			keyword = "";
		} else {
			keyword = this.props.data.artist
		}

		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events",
			method: "GET",
			responseType: "JSON",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				segmentName: "music",
				city,
				keyword,
			}
		}).then(response => {
			
			if (!response.data._embedded) {
				alert("No valid results");
				window.location.reload(false);
			}

			const res = response.data._embedded.events;
			
			const resEvent = this.mapToAppData(res);

			this.setState({
				event: resEvent,
			})
		})
	}

	componentDidUpdate() {
		this.runAxios();
	}

	componentDidMount() {
		this.runAxios();
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