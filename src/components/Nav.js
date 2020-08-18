import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<div>
				<ul className='nav justify-content-start'>
					<li className='nav-item'>
						<a className='nav-link text-white active' href='/'>
							Weatherly
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Nav;
