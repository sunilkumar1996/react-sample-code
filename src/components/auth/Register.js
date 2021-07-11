import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ReeValidate from 'ree-validate';
import classNames from 'classnames';
import AuthService from '../../services';
import logo from '../../img/logo.png';
import { withTranslation } from 'react-i18next';
import { Field, reduxForm, reset } from 'redux-form';
import Select from 'react-select';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      response: {
        error: false,
        message: '',
      },
      success: false,
    };
  }


  handleSubmit = values => {
	this.setState({ loading: true });
	values['role'] = values.role.value;
	this.submit(values);
  };

  submit(credentials) {
    this.props
	.dispatch(AuthService.register(credentials))
      .then((credentials) => {
	  // console.log(credentials)
        // this.registrationForm.reset();
        this.setState({ loading: false, success: true });
      })
      .catch((err) => {
	   
		const errors = Object.values(err.data.errors);
        errors.join(" ");
		// console.log(errors)
        const response = {
			error: true,
			message: errors,
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
	
	renderSelect({input, options, meta: { touched, error }}) {
		return (
			<div className="form-group">
				<Select 
					{...input} 
					onChange={value => input.onChange(value)}
					onBlur={() => input.onBlur(input.value)}
					options={options}
					/>
				{touched &&
					(error && <span className="errorMessage">{error}</span>)
				}
			</div>
		)
	};
	
  render() {
    // If user is already authenticated we redirect to dashboard.
	const { isAuthenticated, t } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { response, errors, loading } = this.state;
	const { submitting, handleSubmit } = this.props;
    return (
			<>
				<div className="register-page">
					<div className="row">
						<div className="col-md-8 d-flex landing-right-content">
							<div className="flex-row">
								<div className="logo-front-page">
									<Link to="/" className="brand-wrap">
										<img className="logo-front-page" alt="" src={logo} />
									</Link>
								</div>
								<div className="row">
									<div className="col-md-4 mb-lg-3">	
										<div className="features-icons-icon">
										<i className='fas fa-layer-group front-icon'></i>
										</div>
										<h4>New Feature 1</h4>
										<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
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
										<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
									</div>
									<div className="col-md-4 mb-lg-3 secnd">	
										<div className="features-icons-icon">
										<i className='fas fa-layer-group front-icon'></i>
										</div>
										<h4>New Feature 3</h4>
										<p className="lead mb-0">Featuring the latest build of the new Feature framework!</p>
									</div>
								</div>	
							
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center">
							<div className="register-box">     
								<p className="register-box-msg">{t('translation:create')} {t('translation:new')} {t('translation:account')}</p>
									
									{response.error && (
									<div
									className="alert alert-danger"
									role="alert"
									>
										{response.message}
									</div>
									)}
									
									{this.state.success && (
									<div
									className="alert alert-success"
									role="alert"
									>
										Registration successful.
										<br />
										<Link to="/login">
										Please log in with your new email and password.
										</Link>
									</div>
									)}

									<form onSubmit={handleSubmit(this.handleSubmit)}>
									
									<Field 
									name="username" 
									component={this.renderField}
									placeholder="Username"
									type="text" 
									/>
									
									<Field 
									name="email" 
									component={this.renderField}
									placeholder="E-Mail"
									type="email" 
									/>
									
									<Field 
									name="role"
									component={this.renderSelect}
									options={[
										{ value: 'customer', label: 'Customer' },
										{ value: 'seller', label: 'Seller' },
										{ value: 'supplier', label: 'Supplier' },
									]}
									/>
									
									<Field 
									name="password" 
									component={this.renderField}
									placeholder="Password"
									type="password" 
									/>
									
									<Field 
									name="password_confirmation" 
									component={this.renderField}
									placeholder="Confirm Password"
									type="password" 
									/>
									
									<Field 
									name="phone" 
									component={this.renderField}
									placeholder="Phone Number"
									type="number" 
									/>
										
									<div className="form-group">
										<button type="submit" className={classNames('btn btn-primary btn-flat btn-block', {
										'btn-loading': loading,
										})}
										disabled={submitting}
										>
											{t('translation:register')}
										</button>
									</div>
									
									<div className="form-group">
										<p>{t('translation:already')} {t('translation:registered')}? <Link to="/login">{t('translation:log')} {t('translation:in')}</Link></p> 
									</div>
									
								</form>
							</div>
						</div>
					</div>
				</div>
		</>
    );
  }
}

const validate = (values) => {
    const errors = {};
    if(!values.username) {
        errors.username = "UserName is required";
    }
    if(!values.email) {
        errors.email = "E-Mail Name is required";
    }
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

    if(!values.password) {
        errors.password = "Password is required";
    }
	else if (values.password.length < 6) {
		errors.password = 'Must be 6 characters or grater'
	}
    if(!values.password_confirmation) {
        errors.password_confirmation = "Confirm Password is required";
    }	
	else if (values.password_confirmation !== values.password) {
		errors.password_confirmation = "Confirm Password is don't match with password";
	}
	
	if(!values.phone) {
        errors.phone = "Phone Number is required";
    }
	else if(values.phone.length!==10){
		errors.phone = "Phone Number is must be 10 digits";
	}
    
    return errors;
};

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

Register = reduxForm({
	form: 'register',
	validate
})(Register);

export default withTranslation(['translation'])(connect(mapStateToProps)(Register));