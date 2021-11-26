import React from 'react';
import { useState, useEffect } from 'react';
import { getUserList } from '../utils/ApiCalls';
import UserCard from './UserCard';
import '../styles/users.css';

export default function UserList() {
	const [userList, setUserList] = useState([]);
	useEffect(() => {
		getUserList().then(data => {
			setUserList(data);
		});
		return;
	}, []);

	return (
		<div className='UserContainer'>
			{userList.map(user => {
				return <UserCard key={user.username} user={user} />;
			})}
		</div>
	);
	// )
}
