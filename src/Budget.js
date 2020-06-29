import React, { Component } from 'react';
import axios from 'axios';

class Budget extends Component {
  constructor() {
    super();
				
		this.state = {
			currentBudget: {},
			pricesArray: [],
			priceInfo: {},
			minPrice: {}
    };
  }

	filterShows(data) {
		const minPriceArray = []

		data.map((c) => {

			if (c.priceRanges) {
				minPriceArray.push(c.priceRanges[0].min)
			} else if (!c.priceRanges){
				minPriceArray.push(0) 
			}
		})
		
		return minPriceArray;
	}

	componentDidMount() {
			
		//variable representing url return will be in or in place of this axios call 
		axios({
			url:"https://app.ticketmaster.com/discovery/v2/events?apikey=Mh0RGGBfkgADAASrXM25WfhUueio9rgV&locale=*&sort=date,asc&city=Toronto&countryCode=CA&stateCode=ON&segmentName=music&includeSpellcheck=yes",
			// url:"https://app.ticketmaster.com/discovery/v2/suggest?apikey=Mh0RGGBfkgADAASrXM25WfhUueio9rgV&city=Toronto",
			method: 'GET',
			responseType: 'json',
			params: {
					apikey: 'Mh0RGGBfkgADAASrXM25WfhUueio9rgV',
			}
			//in the then function get the price from the array
		}).then((res) => {
			const budgetEventArray = res.data._embedded.events;
	
			const pricesArray = this.filterShows(budgetEventArray)
	
			this.setState({
				pricesArray,
			})
		}); 					 
	}
            
        

            
	render() {
		return (
			<div className="budgetAttempt">
				<h2>This is the minimum price of an event</h2>
				<h3>This is the event </h3>
			</div>
		);
	}
}


//must take in specific dollar amounts from API for events, events > priceRanges > min > $$$

//everything under an established budget dollar amount or maxPrice must be filtered for inclusion, or everything else filtered out
//filter method (state.price) > budget variable?  set to state    

//funds must be tracked in a variable per person per list

//events must be able to be added and removed with the variable for budget updating changes
//these searches must incorporate a 365 day range starting from present date

export default Budget;