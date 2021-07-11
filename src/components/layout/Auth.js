import React from 'react';
import { createBrowserHistory } from "history";

import Header from './Header';
import Navbar from './Navbar';
import ScrollIntoView from '../ScrollIntoView';

const Auth = ({ children }) => {
	
	let history = createBrowserHistory();
	const pathname = history.location.pathname.split('/');
	const filtered = pathname.filter(function (el) {
		if(el !== ""){
			return el;
		}
	});
	let segment = '/';
	if(filtered.length>0){
		segment = segment + filtered[0] +"/"+ filtered[1];
	}	
	
	if(segment==='/designer/products'){
		return (
			<>	
				<ScrollIntoView>
					<header className="section-header">
						<Header />
						<Navbar />
					</header>
					{children}
				</ScrollIntoView>
			</>
		)
	}
	else {
		return (
			<>
				<ScrollIntoView>
					{children}
				</ScrollIntoView>
			</>
		)
	}
}

export default Auth;












