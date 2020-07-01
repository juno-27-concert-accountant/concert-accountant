import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navBar">
				<ul className="wrapper">
					<li>
						<Link className="link" to="/login/">
							Log In
						</Link>
					</li>
					<li>
						<Link className="link" to="/event/">
							Events
						</Link>
					</li>
					<li>
						<Link className="link" to="/list/">
							List
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;