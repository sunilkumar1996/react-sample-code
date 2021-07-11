import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import logo from '../../img/logo.png';
import { withTranslation } from 'react-i18next';
import Http from '../../Http';

class Header extends Component {
	constructor(props){
		super(props);
		
		const {persistStore} = props;
		let logo = persistStore.logo ? persistStore.logo : 'images/logo.png';
		if(props.user.role!=='customer'){
			logo = props.user.logo ? props.user.logo : 'images/logo.png';
		}
		
		this.state = {
			logo: logo
		}
	}
	
	componentWillReceiveProps(){
		const {persistStore} = this.props;
		if(persistStore.logo){
			this.setState({logo: persistStore.logo});
		}
	}


	handleLogout = (e) => {
		e.preventDefault();
		this.props.dispatch(actions.authLogout());
	};

	render() {
		const { isAuthenticated, t, user } = this.props;		

		return (
			<section className="header-main border-bottom">
				<div className="container small">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-md-2">
							<button className="p-1" type="button" data-toggle="collapse" data-target=".collapse" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<Link to='/' className="brand-wrap">
								<img className="logo" alt="" src={this.state.logo} />
							</Link>	
						</div>
						<div className="col-xl-6 col-lg-5 col-md-6">
							<form action="#" className="search-header icons">
								<div className="input-group w-100">
									<input type="text" className="form-control" placeholder={t('translation:search')} />

									<div className="input-group-append">
										<button className="btn btn-sm btn-primary" type="submit">
											<i className="fa fa-search"></i> {t('translation:search')}
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="widgets-wrap float-md-right icons2">
																

								{isAuthenticated &&
								<>
									<div className="widget-header mr-3">
										<Link to="/" className="widget-view" data-toggle="dropdown" title={t('translation:profile')}>
											<div className="avatar avatar-xl">
												{user.username.substr(0,1)}
											</div>
										</Link>
										
										<div className="dropdown-menu">
										<Link className="dropdown-item" to="/dashboard">{t('translation:dashboard')}</Link>
										<Link className="dropdown-item" to="/profile">{t('translation:profile')}</Link>
											<span className="dropdown-item" onClick={this.handleLogout}>{t('translation:logout')}</span>
										</div>
									
									</div>
									<div className="widget-header mr-3">
										<Link to="/" className="widget-view" title={t('translation:message')}>
											<div className="icon-area">
												<i className="fa fa-comment-dots"></i>
												<span className="notify">1</span>
											</div>
										</Link>
									</div>
								</>
								}
								{!isAuthenticated &&
								<>
									<div className="widget-header mr-3">
										<Link to="/login" className="btn btn-sm btn-primary" title={t('translation:login')}>{t('translation:login')}</Link>
									</div>
									<div className="widget-header mr-3">
										<Link to="/register" className="btn btn-sm btn-primary" title={t('translation:register')}>{t('translation:register')}</Link>
									</div>
								</>
								}

								<div className="widget-header">
									<Link to="/cart" className="widget-view" title={t('translation:cart')}>
										<div className="icon-area">
											<i className="fa fa-shopping-cart"></i>
											<span className="notify">0</span>
										</div>
									</Link>
								</div>
								
							</div>
						</div>
					
						<div className="col-3 p-0 h-100 w-sidebar navbar-collapse collapse sidebar">
							<div className="position-fixed bg-dark text-white h-100 w-sidebar">
								<button className="m-1 btn btn-sm btn-primary pull-right" type="button" data-toggle="collapse" data-target=".collapse" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
									X
								</button>

								<ul className="nav flex-column">
									<li className="nav-item">
										<Link className="nav-link" to="/">Link</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" to="/">Link</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">Link</Link>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</section>
		);
	}
}


const mapStateToProps = (state) => (
{
	isAuthenticated: state.Auth.isAuthenticated,
	user: state.Auth.user,
	persistStore: state.persistStore,
});


export default withTranslation(['translation'])(connect(mapStateToProps)(Header));




