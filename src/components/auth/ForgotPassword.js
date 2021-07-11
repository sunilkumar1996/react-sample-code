import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import ReeValidate from 'ree-validate';
import classNames from 'classnames';

import AuthService from '../../services';
import logo from '../../img/logo.png';
import { withTranslation } from 'react-i18next';

class ForgotPassword extends Component {
  constructor() {
    super();

    // this.validator = new ReeValidate({
      // email: 'required|email',
    // });

    this.state = {
      loading: false,
      email: '',
      errors: {},
      response: {
        error: false,
        message: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  };

  handleBlur = (e) => {
    const { name, value } = e.target;

    // Avoid validation until input has a value.
    if (value === '') {
      return;
    }

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
    };

    // Set response state back to default.
    this.setState({ response: { error: false, message: '' } });

  };

  submit(credentials) {
    this.props
      .dispatch(AuthService.resetPassword(credentials))
      .then((res) => {
        this.forgotPasswordForm.reset();
        const response = {
          error: false,
          message: res.message,
        };
        this.setState({ loading: false, success: true, response });
      })
      .catch((err) => {
        this.forgotPasswordForm.reset();
        const errors = Object.values(err.errors);
        errors.join(' ');
        const response = {
          error: true,
          message: errors,
        };
        this.setState({ response });
        this.setState({ loading: false });
      });
  }

  render() {
    // If user is already authenticated we redirect to entry location.
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated, t} = this.props;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    const { response, errors, loading } = this.state;

    return (
      <div className="forgot-page">
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
            <div className="forgot-box">     
              <p className="forgot-box-msg">{t('translation:request')} {t('translation:password')} {t('translation:reset')}</p>
                <form method="POST"
                  onSubmit={this.handleSubmit}
                  ref={(el) => {
                  this.forgotPasswordForm = el;
                  }}
                  >
                <div className="form-group">
                  <input
                  id="email"
                  type="email"
                  name="email"
                  className={classNames('form-control', {
                  'is-invalid': 'email' in errors,
                  })}
                  placeholder={t('translation:email')}
                  required
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <button type="submit"className={classNames('btn btn-primary btn-flat btn-block', {
                  'btn-loading': loading,
                  })}>
                    {t('translation:send')} {t('translation:password')} {t('translation:reset')} {t('translation:em')}
                  </button>
                </div>
                <div className="form-group">
                  <p>{t('translation:back')} {t('translation:to')}? <Link to="/login">{t('translation:log')} {t('translation:in')}</Link></p> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.defaultProps = {
  location: {
    state: {
      pathname: '/',
    },
  },
};

ForgotPassword.propTypes = {
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
});

export default withTranslation(['translation'])(connect(mapStateToProps)(ForgotPassword));
