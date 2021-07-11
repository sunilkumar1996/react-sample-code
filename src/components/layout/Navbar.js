import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';

class Navbar extends Component {	

	changeLanguage = (lng) => {
		const { i18n } = this.props;
		i18n.changeLanguage(lng);
	}

	render() {
		const history = createBrowserHistory();
		const pathname = history.location.pathname.split('/');	
		const filtered = pathname.filter(function (el) {
			if(el !== ""){
				return el;
			}
		});
		let path = '/';
		
		if(filtered.length>2){
			path += filtered[0]+"/"+filtered[1];
		}
		else {
			path += filtered[0] ?? '';
		}

		const { t, user } = this.props;

		return (
			<>
			{user && user.role==='customer' &&
				<nav className="navbar navbar-main navbar-expand-lg border-bottom">
					<div className="container">
						<ul className="navbar-nav">
							<li className={classNames("nav-item ", {'active' : (path==='/designers')})}>
								<Link className="nav-link" to="/designers">{t('translation:designers')}</Link>
							</li>
							
						{/* <li className="nav-item">
								<Link className="nav-link" to="/">{t('translation:services')}</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">{t('translation:sell')} {t('translation:with')} {t('translation:us')}</Link>
							</li> */}
						</ul>
						{/*<ul className="navbar-nav ml-md-auto">
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-expanded="false">English</Link>
								<div className="dropdown-menu dropdown-menu-right">
									<Link to="/" className="dropdown-item" onClick={() => this.changeLanguage("en")}>English</Link>
									<Link to="/" className="dropdown-item" onClick={() => this.changeLanguage("fr")}>French</Link>
								</div>
							</li>
						</ul>
						*/}
					</div>
				</nav>
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

export default withTranslation(['translation'])(connect(mapStateToProps)(Navbar));