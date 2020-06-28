import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './App.js';

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
            const budgetFilterForPrice = budgetEventArray.filter(budgetEventArray => budgetEventArray.priceRanges)
            // const budgetGetMinPrice = budgetFilterForPrice.map(budgetFilterForPrice);
            // console.log(budgetFilterForPrice[1].priceRanges[0].min)
            // console.log(budgetFilterForPrice);
            console.log(budgetEventArray);
            const priceArray = budgetEventArray.map(({priceRanges}) => {
            return priceRanges
        }); 
            
                console.log(priceArray);
                // {priceRanges[0].min}
            // const budgetGetMinPrice = budgetEventArray.map(budgetFilterForPrice => budgetFilterForPrice.min)
            // const budgetGetMinPrice2 = budgetGetMinPrice1.map(budgetEventArray => budgetEventArray.min)
            // console.log(budgetGetMinPrice)
            // console.log(budgetEventArray[3].priceRanges[0].min);

            // const finalPrice = priceInfo.min
            // console.log(finalPrice);
            // return (
                // console.log(budgetFilterForPrice)
                // this.setState({price: finalPrice})
            //     )
            
            // } 
            })
            
        }

            
            render() {
                return (
                    <div className="budgetAttempt">
                        {/* <p>${this.state.price}</p> */}
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