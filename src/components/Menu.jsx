import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ topics, setShowMenu }) {
	return (
		<div className='Menu'>
			<span
				id='closeMenu'
				onClick={() => {
					setShowMenu(false);
				}}>
				X
			</span>
			<ul id='menuList'>
				<li>
					<Link className='navLink' to='/'>
						Home
					</Link>
				</li>
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
		</div>
	);
}
