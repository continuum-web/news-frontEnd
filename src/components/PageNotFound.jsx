import React from 'react'
import '../styles/PageNotFound.css'
import gif from '../assets/404.gif'

export default function PageNotFound({error}) {
    return (
			<main className='errorContainer'>
				<p className='errorStatus'>404</p>
				<p className='errorMsg'>Oh no did you take a wrong turn</p>
				<img className='gif' src={gif} alt='a funny gif' />
			</main>
		);
}
