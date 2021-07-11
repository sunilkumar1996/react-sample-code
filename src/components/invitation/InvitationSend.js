import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Http from '../../Http';
import classNames from 'classnames';

class InvitationSend extends Component {
	constructor() {
    super();
    this.state = {
      loading: false,
      email: '',
	  phone: '',
      invitation: '',
      errors: {},
      response: {
        error: false,
        message: '',
      },
    };
	// API endpoint.
		this.api = '/invitation/send';
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleBlur = (e) => {
    const { value } = e.target;

    // Avoid validation until input has a value.
    if (value === '') {
      return;
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, invitation } = this.state;
    const credentials = {
      email,
	  phone,
      invitation,
	  };

    // Set response state back to default.
    this.setState({ response: { error: false, message: '' } });

    this.setState({ loading: true });
        this.submit(credentials);
  };
  
  submit(pass) {
		Http.post(this.api, pass)
		.then((res) => {
		// console.log(res)
			// const response = {
				// error: false,
				// message: res.message,
			// };
			this.setState({ loading: false,  success: true });
			this.SendInvitation.reset();
		})
		.catch((err) => {
			// const errors = Object.values(err.response.data.errors);
			// errors.join(' ');
			// const response = {
				// error: true,
				// message: errors,
			// };
			// this.setState({ loading: false, response });
		});
	};
	
	render() {
		const { t } = this.props;
		const { loading } = this.state;
		return (
			<section className="section-conten">
					<article className="card mb-3">
						<div className="card-body">
							<h1 className="h4 mb-2 text-gray-800">{t('translation:invitation')} {t('translation:send')}</h1>
							{this.state.success && (
								<div
								className="alert alert-success"
								role="alert"
								>
								User Invited and added to connection
								</div>
					
							)}
							<form
							method="POST"
							onSubmit={this.handleSubmit}
							ref={(el) => {
								this.SendInvitation = el;
								}}
							  >
								<div className="form-group">
								<label>Email</label>
									<div className="input-group">
										<input 
										type="email" 
										className="form-control" 
										name="email" 
										placeholder={t('translation:email')}
										onChange={this.handleChange}
										onBlur={this.handleBlur}
										disabled={loading}
										/>
									</div>
								</div>
								<div className="form-group">
								<label>Phone Number</label>
									<div className="input-group">
										<input 
										type="number" 
										className="form-control" 
										name="phone" 
										onChange={this.handleChange}
										onBlur={this.handleBlur}
										disabled={loading}
										/>
									</div>
								</div>
								<div className="form-group">
								<label>{t('translation:invitation')}</label>
									<select name="invitation"
									className="form-control"
									onChange={this.handleChange}
									onBlur={this.handleBlur}
									disabled={loading}
									>
										<option value="">{t('translation:select')}</option>
										<option value="customer">{t('translation:customer')}</option>
										<option value="supplier">{t('translation:supplier')}</option>
									</select>
								</div>
								<div className="form-group">
									<button
									type="submit"
									className={classNames('btn btn-primary ', {
											'btn-loading': loading,
										})}
									>
									{t('translation:send')}
									</button>
								</div>
							</form>
						</div>
					</article>
				</section>
			
				);
	}
}

export default withTranslation(['translation'])(InvitationSend);