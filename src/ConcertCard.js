import React, { Component, Fragment } from 'react';
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
			error: false
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
	handleChange(e) {
		this.filterResults(e.target.value);
		this.setState({
			filterPrice: parseFloat(e.target.value),
		})
	}

	renderConcertCell(entry) {
		const {eventID, imgUrl, name, date, price} = entry;
		return (	
			<div key={eventID} className="concertCell">
				<Link to={`/event/${eventID}`}>
				<div className="imageContainer">
					<img src={imgUrl} alt={name} />	

				</div>
				<div className="concertInfo">
					<h2>{name}</h2>
					<p>{date.dateFormat}</p>
					{price.min === 'N/A' 
						? <p>No prices currently available.</p>
						: <p>Prices starting as low as ${price.min}</p>}
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

	showFiltered(e) {
		e.preventDefault();
		let isFiltered;

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
		let city;
		let keyword;
		if (!this.props.data) {
			city = "Toronto";
			keyword = "";
		} else {
			city = this.props.data.location[0]
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
				this.setState({
					error: true,
				})
			} else {
				const res = response.data._embedded.events;
				const resEvent = this.mapToAppData(res);
				this.setState({
					event: resEvent,
				})
			}
		})
	}

	componentDidUpdate() {
		this.runAxios();
	}

	componentDidMount() {
		this.runAxios();
	}
	handleError = (e) => {
		e.preventDefault();
		this.setState({
			error: false
		})
	};

	render() {
		const {filterPrice, error, isFiltered, event, filteredResults} = this.state
		return (
			<div className="wrapper">
				<section className="budgetFilter">
					<p>Filter results for your budget: </p>
						
					<select value={filterPrice} onChange={(e) => this.handleChange(e)}>
						<option value="0">All</option>
						<option value="25">$25 or Less</option>
						<option value="50">$50 or Less</option>
						<option value="75">$75 or Less</option>
						<option value="100">$100 or Less</option>
					</select>
					<button onClick={(e) => this.showFiltered(e)}>Filter</button>
				</section>
				{ error ? 
				<Fragment>
					<div className="modal__back">
						<div className="modal__front">
							<h4>Error</h4>
							<hr/>
							<p>No results found</p>
							<button onClick={this.handleError}>Close</button>
						</div>
					</div>
				</Fragment> :
				null }
				<section className="concertCards">
					{
						isFiltered === false ?
						event.map(event => this.renderConcertCell(event)) :
						filteredResults.map(event => this.renderConcertCell(event)) 
					}
				</section>
			</div>
		)
	
}}

export default ConcertCard;