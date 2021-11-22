import React from 'react';
import { useState, useEffect } from 'react';
import { getTopics } from '../utils/ApiCalls';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Nav() {
	const [topicList, setTopicsList] = useState([]);

	useEffect(() => {
		getTopics().then(({ topics }) => {
			console.log(topics);
			setTopicsList(topics);
		});
		return () => {};
	}, []);
	return (
        <nav>
            <h4 id="menuIcon">Menu</h4>
            <Menu topicList={topicList }/>
		</nav>
	);
	// return (
	// 	<nav id='Nav'>
	// 		<ul id="navList">
	//             {topicList.map(({slug}) => {
	//                 return (
	//                     <li key={slug} className="navLi">
	//                         <Link className="navLink" to="">{slug}</Link></li>
	//                 )
	// 			})}
	// 		</ul>
	// 	</nav>
	// );
}
