import React, { Component } from 'react';
import Http from '../../Http';
import classNames from 'classnames';
import * as actions from '../../store/actions';
import ImageUploader from 'react-images-upload';
import { withTranslation } from 'react-i18next';
import { Field, reduxForm, reset } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";

class Profile extends Component {
	
	constructor(props) {
		super(props);	
		
		this.state = {	
			loading: false,
			logo:null,
			response: {
				error: false,
				message: '',
			},
			success: false,
		}; 
		
		this.ImageLogo = this.ImageLogo.bind(this);
		// API endpoint.
		this.api = '/users/'+props.user.id;
		this.getData();
	}
	
 	//Logo images
	ImageLogo(picture, base64, type) {
        this.setState({
			[type]: base64[0]
        });
    }
	
	componentWillReceiveProps(){
		if(this.props.editUser && this.props.editUser.logo){
		  this.setState({logo: this.props.editUser.logo});
		  // console.log(this.props.editUser.logo)
		}
	}
	
	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
  
	getData(){
		Http.get(this.api).then(response => {
		// console.log(response.data)
			this.setState({
				loading:false,
			});
			this.props.dispatch(actions.persist_store({editUser:response.data}));
		}).catch(errors=>{
			// const errors = Object.values(err.data.errors);
			//console.log(errors);
		})
	
	
	}
	
	handleSubmit = values  => {
		const { logo } = this.state;
		values['logo'] = logo;
		values['email'] = this.props.editUser.email;
		values['phone'] =  this.props.editUser.phone;
		this.setState({ loading: true });
		this.updatePofile(values);
	};
  
  updatePofile = (data) => {
		Http.put(this.api, data)
		  .then((res) => {
		  // console.log(res.data)
			this.props.dispatch(actions.profile(res.data));

			this.setState({ loading: false, success: true, });
		  })
		  .catch((err) => {
			
			// this.setState({ loading: false, response });
			
		  });
	}
	
	renderImages(name, buttonText) {
		return (
				<div className="form-group">
					<div className="col-md-4">
						<div className="images_box">
							<ImageUploader
								name={name}
								withIcon={false}
								withPreview={true}
								singleImage={true}
								onChange={(picture, base64) => this.ImageLogo(picture, base64, name)}
								imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
								maxFileSize={1240000}
								fileSizeError="file size is too big"
								accept="accept=image/*"
								label={buttonText}
								/>
								<img className="thread_view" src={this.state.logo} />
						</div>
					</div>
				</div>
		)
	}
	
	renderField = ({
		input,
		label,
		type,
		disabled,
		meta: { touched, error, warning }
	}) => (
		<div className="form-group">
			<label>{label}</label>
	
			<div className="input-group">
				<input {...input} type={type} className="form-control" disabled={disabled}/>
			</div>
			{touched &&
				(error && <span className="errorMessage">{error}</span>)
			}
		</div>
	)
	
	render() {
	 const { response, errors, loading, logo } = this.state;
	 const { t, handleSubmit } = this.props;		
		return (

			<section className="section-conten">
				<article className="card mb-3">
					<div className="card-body">
					<h2 className="cart-area-title">{t('translation:profile')}</h2>
					
					{this.state.success && (
						<div
						className="alert alert-success"
						role="alert"
						>
							Profile Update successfully.
						</div>
					)}
					
					<form onSubmit={handleSubmit(this.handleSubmit)}>

						<div className="row">
							<div className="col-md-6">
								
								<Field 
								name="name" 
								component={this.renderField}
								label="Name"
								type="text" 
								/>
								
								<Field 
								name="username" 
								component={this.renderField}
								label="Username"
								type="text" 
								/>
								
								<Field 
								name="email" 
								component={this.renderField}
								label="E-Mail"
								type="email"
								disabled={true}
								/>

								<Field 
								name="slogan" 
								component={this.renderField}
								label="Slogan"
								type="text" 
								/>
								
								<Field 
								name="phone" 
								component={this.renderField}
								type="number" 
								disabled={true}
								/>
							
								<div className="imageLable">
									<label>{t('translation:upload')} {t('translation:your')} {t('translation:logo')} {t('translation:here')} *</label>
								</div>
								<div className="row">
									{this.renderImages('logo', 'Choose Logo')}
								</div>
						
								<div className="form-group">
									<button
									type="submit"
									className={classNames('btn btn-primary', {
									'btn-loading': loading,
									})}
									>
									{t('translation:update')}
									</button>
								</div>
							</div>
						</div>
					</form>
					</div>
				</article>
			</section>		
	
		);
	}
}

const profileInitialValues = (values) => {	
	// console.log(values)
	if(values) {
	let availability = values.availability === true ? "In Stock" : "Out of Stock";
		return {
			...values,
			name: values.name ? values.name : "",
			username: values.username ? values.username : "",
			email: values.email ? values.email : "",
			slogan: values.slogan ? values.slogan : "",
			phone: values.phone ? values.phone : "",
			logo: values.logo ? values.logo : "",
		}
	}
}
const mapStateToProps = (state, props) => {
	//console.log(state.persistStore);
	return {
		initialValues: profileInitialValues(state.persistStore.editUser),
		user: state.Auth.user,
		editUser: state.persistStore.editUser
	}
	
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

Profile = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "profile",
    // validate
  })
)(Profile);

export default withTranslation(['translation'])(Profile);