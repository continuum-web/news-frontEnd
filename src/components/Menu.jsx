import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu({ topicList }) {
    return (
        <div className="Menu">
            <ul id="menuList">
                <li><Link className="navLink" to="/">Home</Link></li>
          {topicList.map(({slug}) => {
	                return (
	                    <li key={slug} className="navLi">
	                        <Link className="navLink" to="">{slug}</Link></li>
	                )
				})}
			</ul>
        </div>
    )
}
