import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ topics }) {
	return (
		<nav id='Nav'>
			<ul id='navList'>
				<Link to='/' className='navLink'>
					Home
				</Link>
				<li>
					<Link className='navLink' to='/users'>
						Users
					</Link>
				</li>
				{topics.map(({ slug }) => {
					return (
						<li key={slug} className='navLi'>
							<Link className='navLink' to={`/topic/${slug}`}>
								{slug}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
