import React from 'react';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import { getTopics } from '../utils/ApiCalls';
import '../styles/header.css';
import { useContext } from 'react';
import { userContext } from '../Contexts/UserContext';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const [topicList, setTopicsList] = useState([]);
	const { user } = useContext(userContext);

	useEffect(() => {
		getTopics().then(({ topics }) => {
			setTopicsList(topics);
		});
		return () => {};
	}, []);

	if (showMenu === true) {
		setTimeout(() => {
			setShowMenu(false);
		}, 2000);
		return (
			<header id='Header'>
				<h1 id='HeaderH1'>Northcoders News</h1>
				<p className='welcomeUser'>Welcome : {user}</p>
				<Menu topics={topicList} setShowMenu={setShowMenu} />
			</header>
		);
	} else {
		return (
			<header id='Header'>
				<h1 id='HeaderH1'>Northcoders News</h1>
				<p className='welcomeUser'>Welcome : {user}</p>
				<span
					onClick={() => {
						setShowMenu(true);
					}}
					id='menuIcon'>
					Menu
				</span>
				<Nav topics={topicList} />
			</header>
		);
	}
}
