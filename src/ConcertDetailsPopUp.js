import React, {Component} from "react";
import axios from 'axios'

class ConcertDetailsPopUp extends Component {
	constructor() {
		super();
		
		this.state = {
			modalEvent: {},
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

			const artist = res._embedded.attractions.map(member => {
				return (member.name)
			})
			
			const dateStr = res.dates.start.localDate;
			const dateNum = Date.parse(dateStr);
			const dateFormat = this.dateConvert(dateStr)
			
			this.setState({
				modalEvent: {
					eventID: res.id, 
					name: res.name, 
					artist, 
					venue: res._embedded.venues[0].name, 
					location: { 
						city: res._embedded.venues[0].city.name, 
						country: res._embedded.venues[0].country.name,
					},
					date: {
						dateStr,
						dateNum,
						dateFormat,
					},
					status: res.dates.status.code,
					imgUrl: res.images[0].url,
					tickets: res.url,
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
				<div className="modalContent">
					<div className="modalImage">
						<img src={this.state.modalEvent.imgUrl} alt={this.state.modalEvent.name}/>
					</div>
					
					<div>
						<h1>{this.state.modalEvent.name}</h1>
						<h2> @ {this.state.modalEvent.venue}</h2>

						
						<a href={this.state.modalEvent.tickets}>
							<button>Buy Tickets</button>
						</a>
						
					</div>
				</div>
			</div>
		)
	}
}

export default ConcertDetailsPopUp;