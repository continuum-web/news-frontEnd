import React from 'react';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import { getTopics } from '../utils/ApiCalls';
import '../styles/header.css';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [topicList, setTopicsList] = useState([]);

    useEffect(() => {
			getTopics().then(({ topics }) => {
				setTopicsList(topics);
			});
			return () => {};
		}, []);

	if (showMenu === true) {
		
		return (
			<header id='Header'>
				<h1 id='HeaderH1'>Northcoders News</h1>
                <Menu topics={topicList} setShowMenu={setShowMenu}/>
			</header>
		);
		
	} else {
		return (
			<header id='Header'>
				<h1 id='HeaderH1'>Northcoders News</h1>
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
