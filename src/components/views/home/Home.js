import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";
import Dashboard from '../../../components/dashboard/Dashboard';
import Front from './Front';
	
class Home extends Component {
	
	render() {
		const {user} = this.props;
		
		// if(user.role!='customer'){
			// return <Redirect to='/dashboard' />;
		// }
		// if(user.role=='supplier'){
			// return <Redirect to='/dashboard' />;
		// }

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
		
		if(segment==='/'){
			if(user.role==='customer'){
				 type= 'front';
			}
			else {
				type= 'dashboard';
			}
		}
		
		return (
			<>
			{type==='dashboard' && 
				<Dashboard />
			}
			
			{type==='front' && 
				<Front />
			}
			</>
		);
	}
}


const mapStateToProps = (state) => (
{
	isAuthenticated: state.Auth.isAuthenticated,
	user: state.Auth.user,
});

export default connect(mapStateToProps)(Home);