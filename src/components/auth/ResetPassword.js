import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
//import ReeValidate from 'ree-validate';
import classNames from 'classnames';
import AuthService from '../../services';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    // @TODO Password confirmation validation.
    // this.validator = new ReeValidate({
      // password: 'required|min:8',
      // password_confirmation: 'required|min:8',
      // id: 'required',
      // token: 'required',
    // });

    this.state = {
      loading: false,
      id: this.getResetId(),
      token: this.getResetToken(),
      password: '',
      password_confirmation: '',
      errors: {},
      response: {
        error: false,
        message: '',
      },
    };
  }

  getResetId() {
    const params = new URLSearchParams(this.props.location.search);
    if (params.has('id')) {
      return params.get('id');
    }
    return '';
  }

  getResetToken() {
    const params = new URLSearchParams(this.props.location.search);
    if (params.has('token')) {
      return params.get('token');
    }
    return '';
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    // If a field has a validation error, we'll clear it when corrected.
    // const { errors } = this.state;
    // if (name in errors) {
      // const validation = this.validator.errors;
      // this.validator.validate(name, value).then(() => {
        // if (!validation.has(name)) {
          // delete errors[name];
          // this.setState({ errors });
        // }
      // });
    // }
  };

  handleBlur = (e) => {
    const { name, value } = e.target;
    // const validation = this.validator.errors;

    // Avoid validation until input has a value.
    if (value === '') {
      return;
    }

    // this.validator.validate(name, value).then(() => {
      // if (validation.has(name)) {
        // const { errors } = this.state;
        // errors[name] = validation.first(name);
        // this.setState({ errors });
      // }
    // });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      id: this.state.id,
      token: this.state.token,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    this.setState({ loading: true });

    this.props
      .dispatch(AuthService.updatePassword(credentials))
      .then((res) => {
        this.passwordResetForm.reset();
        const response = {
          error: false,
          message: res.message,
        };
        this.setState({ loading: false, success: true, response });
      })
      .catch((err) => {
        this.passwordResetForm.reset();
        const errors = Object.values(err.errors);
        errors.join(' ');
        const response = {
          error: true,
          message: errors,
        };
        this.setState({ response });
        this.setState({ loading: false });
      });
  };

  render() {
    // If user is already authenticated we redirect to entry location.
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    const { response, errors, loading } = this.state;

    return (
		<div className="login-registration-page-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="login-registration-field">
							<h2 className="cart-area-title">Request Password Reset</h2>
						
							{this.state.success && (
							<div
							className="alert alert-success"
							role="alert"
							>
								Your password has been reset!
								<br />
								<Link to="/" href="/">
								Please log in with your new password.
								</Link>
							</div>
							)}
							
							{response.error && (
							<div
							className="alert alert-danger"
							role="alert"
							>
								{response.message}
							</div>
							)}
							
							{!this.state.success && (
							<form
							className="user"
							method="POST"
							onSubmit={this.handleSubmit}
							ref={(el) => {
								this.passwordResetForm = el;
								}}
								>
								
								<label>Password *</label>
								<input
								id="password"
								type="password"
								className={classNames('form-control', {
								'is-invalid': 'password' in errors,
								})}
								name="password"
								placeholder="Enter Password"
								required
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								/>
								{'password' in errors && (
								<div className="invalid-feedback">
									{errors.password}
								</div>
								)}
								
								<label>Password Confirmation *</label>
								<input
								id="password_confirmation"
								type="password"
								className={classNames('form-control', {
								'is-invalid': 'password_confirmation' in errors,
								})}
								name="password_confirmation"
								placeholder="Confirm Password"
								required
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								/>
								{'password_confirmation' in errors && (
								<div className="invalid-feedback">
									{errors.password_confirmation}
								</div>
								)}
								
								<button
								type="submit"
								className={classNames('btn-send-message disabled', {
								'btn-loading': loading,
								})}
								>
									Reset Password
								</button>
							</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(ResetPassword);
