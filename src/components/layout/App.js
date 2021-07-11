import React from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";

import Sidebar from './Sidebar';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollIntoView from '../ScrollIntoView';

const App = ({ children, user, ...rest }) => {
	// console.log(user);
	let history = createBrowserHistory();
	const pathname = history.location.pathname.split('/');
	const filtered = pathname.filter(function (el) {
		if(el !== ""){
			return el;
		}
	});
	let segment = '/';
	if(filtered.length>0){
		segment = segment + filtered[0];
	}
	
	let type= 'front';
	
	if(user.role==='customer'){
		if(segment==='/' || segment==='/designer' || segment==='/designers' || segment==='/product'){
			type= 'front';
		}
		else {
			type= 'admin';
		}
	}
	else {
		type= 'admin';
	}
	
	if(segment==='/cart'){
		type= 'front';
	}
	
	
	return (
		<>
			<ScrollIntoView>
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
			
				
				{type==='front' && children}

				{type==='admin' && 
					<section className="section-content padding-y">
						<div className="container">
							<div className="row">
								<aside className="col-md-3">
									<Sidebar />
								</aside>
								<main className="col-md-9">
									{children}
								</main>
							</div>
						</div>
					</section>
				}

				<Footer />
			</ScrollIntoView>
		</>		
	)
}


const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated,
	user: state.Auth.user,
});

export default connect(mapStateToProps)(App);
