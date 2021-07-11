import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import { translate, Trans } from "react-i18next";

import AuthService from '../../services';
import logo from '../../img/logo.png';
import { withTranslation } from 'react-i18next';
import { Field, reduxForm, reset } from 'redux-form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
	  errors:{},
      response: {
        error: false,
        message: '',
      },
    };
  }
  
  handleSubmit = values => {
	this.setState({ loading: true });
        this.submit(values);
  };

  submit(credentials) {
    const { dispatch } = this.props;
    dispatch(AuthService.login(credentials))
    .catch((err) => {
      const error = Object.values(err.data.error);
      const response = {
        error: true,
        message: error,
      };
      this.setState({ response });
      this.setState({ loading: false });
    });
  }

	renderField = ({
		input,
		placeholder,
		type,
		meta: { touched, error, warning }
	}) => (
		<div className="form-group">
			<div className="input-group">
			<input {...input} type={type} placeholder={placeholder} className="form-control"/>
			</div>
			{touched &&
				(error && <span className="errorMessage">{error}</span>)
			}
		</div>
	)
	
  render() {
    // If user is already authenticated we redirect to entry location.
    const { isAuthenticated, t, user } = this.props;
    let goto = '/';
    if (isAuthenticated) {
		// if(user.role=='seller'){
			// goto = '/dashboard';
		// }
		// if(user.role=='customer'){
			// goto = '/dashboard';
		// }
		// if(user.role=='supplier'){
			// goto = '/dashboard';
		// }
		return <Redirect to={goto} />;
    }
    

    const { response, loading } = this.state;
	const { submitting, handleSubmit } = this.props;
    return (
			<div className="login-page">
				<div className="row">
					<div className="col-md-8 d-flex landing-right-content">
						<div className="flex-row">
							<div className="logo-front-page">
								<Link to="/" className="">
									<img className="logo-front-page" alt="" src={logo} />
								</Link>
							</div>
							<div className="row">
								<div className="col-md-4 mb-lg-3">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 1</h4>
									<p className="lead mb-0">New Featuring the latest build of the new Feature framework!</p>
								</div>
								<div className="col-md-4 mb-lg-3">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 2</h4>
									<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
								</div>
								<div className="col-md-4 mb-lg-3">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 3</h4>
									<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
								</div>
							</div>	

							<div className="row">
								<div className="col-md-4 mb-lg-3 secnd">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 1</h4>
									<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
								</div>
								<div className="col-md-4 mb-lg-3 secnd">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 2</h4>
									<p className="lead mb-0">Featuring the latest build of the new Feature  framework!</p>
								</div>
								<div className="col-md-4 mb-lg-3 secnd">	
									<div className="features-icons-icon">
									<i className='fas fa-layer-group front-icon'></i>
									</div>
									<h4>New Feature 3</h4>
									<p className="lead mb-0">Featuring the latest build of the new Feature  framework!</p>
								</div>
							</div>	

						</div>
					</div>
					<div className="col-md-4 d-flex align-items-center">
						<div className="login-box">     
							<p className="login-box-msg">{t('translation:sign')} {t('translation:in')}</p>
							
							{response.error && (
								<div
								className="alert alert-danger"
								role="alert"
								>
									Credentials were incorrect. Try again!
								</div>
							)}

							<form onSubmit={handleSubmit(this.handleSubmit)}>
							
									<Field 
									name="email" 
									component={this.renderField}
									placeholder="E-Mail"
									type="email" 
									/>
								
									<Field 
									name="password" 
									component={this.renderField}
									placeholder="Password"
									type="password" 
									/>
									
								<div className="form-group">
										<Link to="/forgot-password" className="float-right">{t('translation:forgot')} {t('translation:password')}?</Link>   
								</div>
								<div className="form-group">
									<button type="submit"className={classNames('btn btn-primary btn-flat btn-block', {
									'btn-loading': loading,
									})}
									disabled={submitting}
									>
										{t('translation:sign')} {t('translation:in')}
									</button>
								</div>
							</form>

							<div className="row">
								<div className="col-md-12">
									<p>{t('translation:donthaveanaccount')}? <Link to="/register">{t('translation:register')}</Link></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	
    );
  }
}

Login.defaultProps = {
  location: {
    state: {
      pathname: '/dashboard',
    },
  },
};


const validate = (values) => {
  const errors = {}
  //email
  if (!values.email) {
    errors.email = 'Email Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  //password
  if (!values.password) {
    errors.password = 'Password Required'
  }
  else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or grater'
  }
  return errors
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.shape({
    state: {
      pathname: PropTypes.string,
    },
  }),
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated,
	user: state.Auth.user,
});

Login = reduxForm({
	form: 'login',
	validate
})(Login);

export default withTranslation(['translation'])(connect(mapStateToProps)(Login));
