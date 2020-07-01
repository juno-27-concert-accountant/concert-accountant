import React, {Component} from "react";
import axios from 'axios';
import "./ConcertDetailsPopUp.css";

class ConcertDetailsPopUp extends Component {
	constructor() {
		super();
		
		this.state = {
			modalEvent: {
				artist: [],
			},
		}
	}

	dateConvert(d) {
		let newDate = new Date(d);
		
		newDate = new Date(newDate.setTime(newDate.getTime() + 1 * 86400000));

		const date = newDate.toDateString();

		return date;
	};

	componentDidMount() {
		axios({
			url: `https://app.ticketmaster.com/discovery/v2/events/${this.props.match.params.eventID}`,
			method: "GET",
			responseType: "JSON",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				locale: "en-us",
				segment: "music",
			}
		}).then(response => {			
			const res = response.data;
			
			const dateStr = res.dates.start.localDate;
			// const dateNum = Date.parse(dateStr);
			const dateFormat = this.dateConvert(dateStr)
			
			const artist = res._embedded.attractions.map(art => {
				return art.name
			})

			this.setState({
				modalEvent: {
					eventID: res.id, 
					name: res.name, 
					venue: res._embedded.venues[0].name, 
					location: { 
						city: res._embedded.venues[0].city.name, 
						country: res._embedded.venues[0].country.name,
					},
					info: res.info,
					// date: {
					// 	dateStr,
					// 	dateNum,
					// 	dateFormat,
					// },
					date: dateFormat,
					status: (res.dates.status.code).toUpperCase(),
					imgUrl: res.images[0].url,
					tickets: res.url,
					artist,
					// priceRange: {
						// min: res.priceRanges[0].min,
						// max: res.priceRanges[0].max,
					// },
				},
			})
		})
	}

	render() {
		return (
			<div className="modalContainer">
				<div className="wrapper">
				<div className="modalContent">
					<div>
						<h1>{this.state.modalEvent.name}</h1>
						<h2> @ {this.state.modalEvent.venue}</h2>
						<h3>{this.state.modalEvent.date}</h3>

						<div className="modalImage">
							<img src={this.state.modalEvent.imgUrl} alt={this.state.modalEvent.name}/>
						</div>
					</div>
					<div className="modalEvent">
						<div className="modalEventDetails">
							{/* { */}
								{/* this.state.modalEvent.status === "CANCELLED" */}
								{/* ? <h3>{this.state.modalEvent.status}</h3> : */}
								<>
									<h3>{this.state.modalEvent.status}</h3>
									<h3>Tickets start at </h3>
									<h3>Featuring: </h3>
									<ul>

										{this.state.modalEvent.artist.map(art => {
										return (
											<li>
												{art}
											</li>
											
										)})}
									</ul>
								</>
							
							
							
							<h3>{this.state.modalEvent.info}</h3>
						</div>
						<div className="modalButtons">
							{
								this.state.modalEvent.status === "CANCELLED" 
								? <button>Add to Wishlist</button>
								: <>
									<button>Add to Wishlist</button>
									<button>Add to List</button>

									<a href={this.state.modalEvent.tickets}>
										<button>Buy Tickets</button>
									</a>
								</>
							}
						</div>
					</div>
						


						
					
				</div>
				</div>
			</div>
		)
	}
}

export default ConcertDetailsPopUp;