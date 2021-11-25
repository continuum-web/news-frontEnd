import React from 'react';
import '../styles/users.css';
export default function UserCard({ user }) {
	const { name, username, avatar_url } = user;
	console.log(name, username, avatar_url);
	const altStr = `avatar image for ${username}`;
	return (
		<div className='UserProfile'>
			<img className='userAvatar' src={avatar_url} alt={altStr} />
			<h4 className='userName'>{username}</h4>
			<p className='userRealName'>{name}</p>
		</div>
	);
}
