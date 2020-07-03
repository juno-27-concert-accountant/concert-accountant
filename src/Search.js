import React, {Component, Fragment} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import ConcertCard from './ConcertCard';
import './Search.css'

class Search extends Component {
  constructor() {
        super();
        this.state = {
            cityNames: [],
            userLocationSplit: [],
            userLocation: '',
            userArtist: '',
		    displayDropdown: false,
            data: {}
      }
  }

  findCity = (input) => {
    axios({    
        method: 'GET',
        url: 'https://proxy.hackeryou.com',
        dataType: 'jsonp',
        params: {
            method: 'GET',
            reqUrl: `http://gd.geobytes.com/AutoCompleteCity?q=${input}&sort=size&`,
            proxyHeaders: {
                header_params: 'value'
            },
            xmlToJSON: false
        }
    }).then(res => {
        this.setState({
            cityNames: res.data
        })
        if (res.data.length >= 1) {
            this.setState({
                displayDropdown: true
            })
        }
    });
}

handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    if (e.target.name === 'userLocation' & e.target.value.length >= 3) {
        this.findCity(e.target.value)
    } else {
        this.setState({
            cityNames: [],
            displayDropdown: false
        })
    }
}

handleLocation = (e) => {
    e.preventDefault();
    const location = e.target.value.split(', ');
    this.setState({
        userLocationSplit: location,
        userLocation: e.target.value,
        displayDropdown: false
    })
}

handleSubmit = (e) => {
    e.preventDefault();        
    const userArtist = this.state.userArtist;
    const userLocation = this.state.userLocationSplit;
		this.setState({
            data: {
                artist: userArtist,
                location: userLocation,
            },
            userLocation: '',
            userArtist: '',
        })
}

    render() {
        const {userLocation, userArtist, displayDropdown, cityNames, data} = this.state;
        return(
            <Fragment>
                <div className="search wrapper">
                    <form className="wrapper">
                        <div>
												<label htmlFor="userLocation">Location</label>
                        <span className="input__container">
                            <input onChange={this.handleInputChange} type="text" name="userLocation" value={userLocation}/>
                            {displayDropdown ? 
                                <div className="city-options">
                                    <ul>
                                        {cityNames.map(city => {
                                            return <li key={city.replace(/ /g, '')}><button value={city} onClick={this.handleLocation}>{city}</button></li>
                                        })}
                                    </ul>
                                </div> : 
                                null }
                        </span>
												</div>
												<div>
                        <label htmlFor="userArtist">Artist</label>
                        <input onChange={this.handleInputChange} type="text" name="userArtist" value={userArtist}/>
												</div>
                        <button onClick={this.handleSubmit}>
                            <Link to="/event/">
                                Search
                            </Link>
                        </button>
                    </form>
                </div>
                {data.location || data.artist ? 
                    <Route exact path="/event/">
                    <ConcertCard data={data} /> 
                    </Route> :
                    null }
            </Fragment>
        )
		}
		
}

export default Search;