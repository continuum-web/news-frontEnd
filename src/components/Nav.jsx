import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ topics }) {
	return (
		<nav id='Nav'>
			<ul id='navList'>
				<Link to='/' className='navLink'>Home</Link>
				{topics.map(({ slug }) => {
					return (
						<li key={slug} className='navLi'>
							<Link className='navLink' to=''>
								{slug}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
