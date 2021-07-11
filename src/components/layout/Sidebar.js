import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import { createBrowserHistory } from "history";
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';

class Sidebar extends Component {

	render() {
		const history = createBrowserHistory();
		const pathname = history.location.pathname.split('/');	
		const filtered = pathname.filter(function (el) {
			if(el !== ""){
				return el;
			}
		});
		
		let path = '/';
		
		if(filtered.length>=2){
			path += filtered[0]+"/"+filtered[1];
		}
		else {
			path += filtered[0] ?? '';
		}
		const { t, user } = this.props;
		return (
			<>
				{user.role==='seller' &&
				<ul className="list-group">
					<Link className={classNames("list-group-item ", {'active' : (path==='/' || path==='/dashboard')})} to="/dashboard"> {t('translation:account')} {t('translation:overview')} </Link>
					<Link className={classNames("list-group-item ", {'active' : (path==='/product' || path==='/product/create' || path==='/product/edit')})} to="/product"> {t('translation:product')} </Link>
					<Link className={classNames("list-group-item ", {'active' : (path==='/invitation')})} to="/invitation"> {t('translation:invitation')} </Link>
				</ul>
				}

				{user.role==='customer' &&
				<ul className="list-group">
					<Link className={classNames("list-group-item ", {'active' : (path==='/dashboard')})} to="/dashboard"> {t('translation:account')} {t('translation:overview')} </Link>
				</ul>
				}

				{user.role==='supplier' &&
				<ul className="list-group">
					<Link className={classNames("list-group-item ", {'active' : (path==='/' || path==='/dashboard')})} to="/dashboard"> {t('translation:account')} {t('translation:overview')} </Link>
					<Link className={classNames("list-group-item ", {'active' : (path==='/product' || path==='/product/create')})} to="/product"> {t('translation:product')} </Link>
					<Link className={classNames("list-group-item ", {'active' : (path==='/invitation')})} to="/invitation"> {t('translation:invitation')} </Link>
				</ul>
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

export default withTranslation(['translation'])(connect(mapStateToProps)(Sidebar));
