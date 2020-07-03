import React, {Component, Fragment} from "react";
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
			const dateFormat = this.dateConvert(dateStr);
			let minPrice;

			if ('priceRanges' in res) {
				minPrice = res.priceRanges[0].min;
				minPrice = minPrice.toFixed(2);
			} else {
				minPrice = "0"
			}

			let artist;
			if ("attractions" in res) {
				res._embedded.attractions.map(art => {
					return art.name;
				})
			} else {
				artist = "N/A"
			}
			

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
					minPrice,
					date: dateFormat,
					status: (res.dates.status.code).toUpperCase(),
					imgUrl: res.images[0].url,
					tickets: res.url,
					artist,
				},
			})
		})
	}

	render() {
		const {modalEvent} = this.state
		return (
			<div className="modalContainer">
				<div className="wrapper">
				<div className="modalContent">
					<div>
						<h1>{modalEvent.name}</h1>
						<h2> @ {modalEvent.venue}</h2>
						<h3>{modalEvent.date}</h3>

						<div className="modalImage">
							<img src={modalEvent.imgUrl} alt={modalEvent.name}/>
						</div>
					</div>
					<div className="modalEvent">
						<div className="modalEventDetails">
							{
								modalEvent.status === "CANCELLED" 
								? <> 
								<h3 className="modalStatus">{modalEvent.status}</h3> 
								<p>Due to Covid-19, this show has been cancelled or rescheduled.</p>
								</>
								:
								<>
									<h3 className="modalStatus">{modalEvent.status}</h3>
									<h3>Tickets start at ${modalEvent.minPrice}</h3>

									

									{/* 
									LAST MINUTE BUG

									<h3>Featuring: </h3>
									<ul>
									
									{modalEvent.artist.map(art => {
										return (
											
											<li key={art}>
												<p>
													{art}
												</p>
											</li>											
									)})}  
									
									</ul>
									*/}
	
								</>
							}
						<h3>{modalEvent.info}</h3>
						</div>
						<div className="modalButtons">
							{
								modalEvent.status === "CANCELLED" ?
								<button>Add to Wishlist</button> :
								<Fragment>
									<button>Add to List</button>
									<button href={modalEvent.tickets}>Buy Tickets</button>
								</Fragment>
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