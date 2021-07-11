import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Http from '../../Http';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { withTranslation } from 'react-i18next';
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-awesome-modal';
import ImageUploader from 'react-images-upload';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import swal from 'sweetalert';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import ScrollIntoView from '../ScrollIntoView';
import * as actions from '../../store/actions';

class ProductEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0,
			visible : false,
			generalArray: [],
			dataArray: [],
			variantArray: [],
			variant_name: '',
			variant_quantity: '',
			variant_color: '',
			variant_height: '',
			variant_width: '',
			variant_price: '',
			pictures: [],
			products: [],
			variants:[],
			};
		this.api = '/products/'+props.match.params.id;
		this.onDrop = this.onDrop.bind(this);
		this.getData();
	}
	
	getData(){
	  Http.get(this.api).then(response => {
	  // console.log(response.data.variants)
			this.setState({
				products:response.data.product,
				variants:response.data.variants,
				loading:false
			});
			this.props.dispatch(actions.persist_store({editProduct:response.data.product}));
		}).catch(errors=>{
			//console.log(errors);
		})
	}
	
	onDrop(picture, base64) {
        this.setState({
            pictures: this.state.pictures.concat(base64),
        });
    }
	


	handleVariantChange = event => {
		const { name, value } = event.target;
		this.setState({[name]: value});
	}

	renderField = ({
		input,
		label,
		type,
		flabel,
		nlabel,
		meta: { touched, error, warning }
	}) => (
		<div className="form-group">
			<label>{label}</label>
	
			<div className="input-group">
				{flabel && (<span className="input-group-addon">{flabel}</span>) }
				<input {...input} type={type} className="form-control"/>
				{nlabel && (<span className="input-group-addon">{nlabel}</span>) }
			</div>
			{touched &&
				(error && <span className="errorMessage">{error}</span>)
			}
		</div>
	)

	renderEditor({input, label, meta: { touched, error }}) {
		return (
			<div className="form-group">
				<label>{label}</label>
				<CKEditor
					data={input.value}
					editor={ ClassicEditor }
					onChange={(event, editor) => {
						return input.onChange(editor.getData())
					}
					}
				/>
				{touched &&
					(error && <span className="errorMessage">{error}</span>)
				}
			</div>
		)
	}

	openModal = e => {
		this.setState({
			visible : true,
			variant_name : '',
			variant_quantity : '',
			variant_color : '',
			variant_height : '',
			variant_width : '',
			variant_price : '',
			variant_images : [],
		});
	}

	renderSelect({input, options, label, meta: { touched, error }}) {
		return (
			<div className="form-group">
				<label>{label}</label>
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

	_general() {
		const { t, submitting, handleSubmit } = this.props;
		const productName = " "+t('translation:product')+" "+t('translation:name');
		const productDescription = " "+t('translation:product')+" "+t('translation:description');
		const metaTitle = " "+t('translation:meta')+" "+t('translation:title');
		const metaDescription = " "+t('translation:meta')+" "+t('translation:description');
		const metaKeywords = " "+t('translation:meta')+" "+t('translation:keywords');
		return(
	
		<ScrollIntoView>
			<form onSubmit={handleSubmit(this.generalSubmit)}>
				<div className="row">
					<div className="col-md-12">
						
						<Field 
						name="product_name" 
						component={this.renderField}
						label={productName}
						type="text" 
						/>

						<Field
						name="product_description"
						label ={productDescription}
						component={this.renderEditor}
						/>
					
						<Field 
						name="product_meta_title" 
						component={this.renderField} 
						label={metaTitle}
						type="text" 
						/>

						<Field 
						name="product_meta_description" 
						component={this.renderField}
						label={metaDescription}
						type="text"
						/>
					
						<Field 
						name="product_meta_keywords" 
						component={this.renderField}
						label={metaKeywords}
						type="text" 
						/>
						<div className="form-group">
							<button
							type="submit"
							className="btn btn-success pull-right" 
							disabled={submitting}
							>
							{t('translation:next')}
							</button>
						</div>

					</div>
				</div>
			</form>
		</ScrollIntoView>
		);
	}
	
	_data() {
		const { t, submitting, handleSubmit } = this.props;
		const productAvailability = " "+t('translation:product')+" "+t('translation:availability');
		return(
			<ScrollIntoView>
			<form onSubmit={handleSubmit(this.dataSubmit)}>
				<div className="row">
					<div className="col-md-12">
							
						<div className="row">
							<div className="col-md-6">
								<Field
								label={t('translation:quantity')}
								name="product_quantity"
								component={this.renderField}
								type="number"
								/>
							</div>
							<div className="col-md-6">
								<Field
								label={t('translation:color')}
								name="product_color"
								component={this.renderField}
								type="text"
								/>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<Field
								label={t('translation:height')}
								name="product_height"
								component={this.renderField}
								type="number"
								nlabel="inch"
								/>
							</div>
							<div className="col-md-6">
								<Field
								label={t('translation:width')}
								name="product_width"
								component={this.renderField}
								type="number"
								nlabel="inch"
								/>
							</div>
						</div>
							
						<Field
						label={t('translation:price')}
						name="product_price"
						component={this.renderField}
						type="number"
						flabel="&#8377;"
						/>
						
						<div className="form-group">
							<label>{t('translation:upload')} {t('translation:images')} {t('translation:here')} *</label>
							<div className="images_box">
								<ImageUploader
								  withIcon={false}
								  withPreview={true}
								  label=""
								  onChange={this.onDrop}
								  imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
								  maxFileSize={1240000}
								  fileSizeError="file size is too big"
								  accept="accept=image/*"
								  />
							</div>
						</div>
					
						<Field 
						name="product_availability"
						label={productAvailability}
						component={this.renderSelect}
						options={[
							{ value: 'In Stock', label: 'In Stock' },
							{ value: 'Out of Stock', label: 'Out of Stock' },
						]}
						/>

						<Field 
						name="product_stock_status"
						label={t('translation:status')}
						component={this.renderSelect}
						options={[
							{ value: 'Enable', label: 'Enable' },
							{ value: 'Disable', label: 'Disable' },
						]}
						/>
						
						
						
						<div className="form-group">
							<button
							onClick={() => this.setState({tabIndex:0})}
							className="btn btn-warning"
							>
							{t('translation:back')}
							</button>

							<button
							type="submit"
							className="btn btn-success pull-right" 
							disabled={submitting}
							>
							{t('translation:next')}
							</button>
						</div>

					</div>
				</div>
			</form>
			</ScrollIntoView>
		);
	}
	
	_variants() {
		const { t, submitting, handleSubmit } = this.props;
		const { variantArray } = this.state;
		const addVariantTrans = "+ "+t('translation:add')+" "+t('translation:variants');
		return(
			<ScrollIntoView>
			<div className="row">
				<div className="col-md-12">
				
					<h5 className="card-title mb-4">{t('translation:variants')} {t('translation:list')}
						<div className="pull-right">

							<button onClick={e => { this.openModal()}} className="btn btn-success btn-sm">
								{addVariantTrans}
							</button>
						</div>
						{this._addVariants()}
					</h5>
					<table className="table">
						<thead>
							<tr>
								<th>{t('translation:name')}</th>
								<th>{t('translation:quantity')}</th>
								<th>{t('translation:color')}</th>
								<th>{t('translation:height')}</th>
								<th>{t('translation:width')}</th>
								<th>{t('translation:price')}</th>
								<th>{t('translation:action')}</th>
							</tr>
						</thead>  
						<tbody>

						{variantArray.length>0 && variantArray.map((item, key) => {
							return(
								<tr key={key}>
									<td>{item.variant_name}</td>
									<td>{item.variant_quantity}</td>
									<td>{item.variant_color}</td>
									<td>{item.variant_height}</td>
									<td>{item.variant_width}</td>
									<td>{item.variant_price}</td>
									<span className="link delete" onClick={()=> this.variantDelete(key)} title="Delete">
										<i className="far fa-trash-alt ml-3" aria-hidden="true"></i>
									</span>
								</tr>
							);
						})}
						</tbody>
					</table>
				</div>

				<div className="col-md-12 mt-20">
					<form onSubmit={handleSubmit(this.handleSubmit)}>
						<div className="form-group">
							<button
							onClick={() => this.setState({tabIndex:1})}
							className="btn btn-warning"
							>
							{t('translation:back')}
							</button>

							<button
							type="submit"
							className="btn btn-success pull-right" 
							disabled={submitting}
							>
							{t('translation:add')} {t('translation:product')}
							</button>
						</div>
					</form>

				</div>
			</div>
			</ScrollIntoView>
		);
	}

	_addVariants() {
		const { t } = this.props;

		return(
			<Modal visible={this.state.visible} className="modal" width="600" height="500" effect="fadeInUp" onClickAway={() => this.setState({visible : false})}>
				<div className="col-md-12 scrollmodal">
					<h4 className="card-title mb-4">
						{t('translation:add')} {t('translation:variants')}
						<div className="pull-right">
							<div className="closeModal" onClick={() => this.setState({visible : false})}>X</div>
						</div>
					</h4>
					{this.state.isError &&
						<div className="alert alert-danger">
						{t('translation:allfieldsarerequired')}
						</div>
					}

					<FormWithConstraints
						ref={form => this.form = form}
						onSubmit={this.storeVariants}
						noValidate>
						{this._VariantsFiled()}

						<button className="btn btn-primary pull-right">
						{t('translation:add')} {t('translation:variants')}
						</button>
					</FormWithConstraints>
					
				</div>
			</Modal>
		);
	}
	
	_VariantsFiled() {

		const {variant_name, variant_quantity, variant_color, variant_height, variant_width, variant_price} = this.state;
		const { t } = this.props;	
		return(
			<>
				<div className="form-group">
					<label>{t('translation:name')}</label>
					<div className="input-group">
						<input name="variant_name" size="255" required value={variant_name}
						onChange={this.handleVariantChange} className="form-control" />
					</div>
					<FieldFeedbacks for="variant_name">
						<FieldFeedback when="*" />
					</FieldFeedbacks>
				</div>
				
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>{t('translation:quantity')}</label>
							<div className="input-group">
								<input name="variant_quantity" type="number" size="10" required value={variant_quantity}
								onChange={this.handleVariantChange} className="form-control" />
							</div>
							<FieldFeedbacks for="variant_quantity">
								<FieldFeedback when="*" />
							</FieldFeedbacks>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>{t('translation:color')}</label>
							<div className="input-group">
								<input name="variant_color" size="100" required value={variant_color} 
								onChange={this.handleVariantChange} className="form-control" />
							</div>
							<FieldFeedbacks for="variant_color">
								<FieldFeedback when="*" />
							</FieldFeedbacks>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>{t('translation:height')}</label>
							<div className="input-group">
								<input name="variant_height" type="number" size="10" required value={variant_height}
								onChange={this.handleVariantChange} className="form-control" />
								<span className="input-group-addon">inch</span>
							</div>
							<FieldFeedbacks for="variant_height">
								<FieldFeedback when="*" />
							</FieldFeedbacks>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>{t('translation:width')}</label>
							<div className="input-group">
								<input name="variant_width" type="number" size="10" required value={variant_width}
								onChange={this.handleVariantChange} className="form-control" />
								<span className="input-group-addon">inch</span>
							</div>
							<FieldFeedbacks for="variant_width">
								<FieldFeedback when="*" />
							</FieldFeedbacks>
						</div>
					</div>
				</div>				
					
				<div className="form-group">
					<label>{t('translation:price')}</label>
					<div className="input-group">
						<span className="input-group-addon">&#8377;</span>
						<input name="variant_price" type="number" size="10" required value={variant_price} 
						onChange={this.handleVariantChange} className="form-control" />
					</div>
					<FieldFeedbacks for="variant_price">
						<FieldFeedback when="*" />
					</FieldFeedbacks>
				</div>
				
				<div className="form-group">
					<label>{t('translation:upload')} {t('translation:images')} {t('translation:here')} *</label>
					<div className="images_box">
						<ImageUploader
						  withIcon={false}
						  withPreview={true}
						  label=""
						  onChange={this.onDrop}
						  imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
						  maxFileSize={1240000}
						  fileSizeError="file size is too big"
						  accept="accept=image/*"
						  />
					</div>
				</div>
			</>
		);
	}

				
	handleSubmit = values  => {
		const { dataArray, variantArray, pictures } = this.state;
		// console.log(variantArray);
		let variants = [];
		if(variantArray.length>0){
			for (let item of variantArray) {
				variants.push({
					'name' : item.variant_name,
					'quantity' : item.variant_quantity,
					'color' : item.variant_color,
					'height' : item.variant_height,
					'width' : item.variant_width,
					'price' : item.variant_price,
				});
			}
		}
		
		const data = {
			'name' : dataArray.product_name,
			'description' : dataArray.product_description,
			'meta_tag' : dataArray.product_meta_title,
			'meta_description' : dataArray.product_meta_description,
			'meta_keywords' : dataArray.product_meta_keywords,
			'availability' : dataArray.product_availability.value,
			'stock_status' : dataArray.product_stock_status.value,
			'quantity' : dataArray.product_quantity,
			'color' : dataArray.product_color,
			'height' : dataArray.product_height,
			'width' : dataArray.product_width,
			'price' : dataArray.product_price,
			'images' : pictures,
			'product_variants_attributes' : variants
		};
		
		this.submit(data);
	}
	
	
	
	submit(data) {
		Http.post(this.api, data)
		.then((res) => {
			// console.log(res)
			this.props.history.push('/product');
			// const response = {
				// error: false,
				// message: res.message,
			// };
			//this.setState({ loading: false, success: true,  response });
			//this.SendInvitation.reset();
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

	generalSubmit = (values) => {
		this.setState({
			generalArray: values,
			tabIndex:1
		});
	}

	dataSubmit = (values) => {
		this.setState({
			dataArray: values,
			tabIndex:2
		});
	}

	storeVariants = e => {
		e.preventDefault();
		this.form.validateFields();

		if (!this.form.isValid()) {
			console.log('form is invalid: do not submit');
		} else {
			const {variant_name, variant_quantity, variant_color, variant_height, variant_width, variant_price} = this.state;
			const data = {
				variant_name, variant_quantity, variant_color, variant_height, variant_width, variant_price
			}
			let arr = this.state.variantArray;
			// console.log(data);
			arr.push(data);
			this.setState({
				variantArray : arr,
				visible : false,
			});
		}
	}
	
	variantDelete(key){
		swal({
			title: "Warning",
			text: "Are you sure to Delete?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		
		.then(willDelete => {
			if (willDelete) {
				const { variantArray } = this.state;
				let array = []
				for (let i=0; i<variantArray.length; i++) {
					if(i!==key){
						array.push(variantArray[i]);
					}
				}
				this.setState({
					variantArray : array
				});
				swal("Deleted!", "Product Variants has been deleted!", "success");
			}
			else{
				swal("Oops!", "Something went wrong!", "error");
			}
		})
	}

	render() {
		const { t } = this.props;
		return (
			<section className="section-conten">
				<article className="card mb-3">
					<div className="card-body">
						<h5 className="card-title mb-4">{t('translation:create')} {t('translation:product')}</h5>
						<Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex  => this.setState({ tabIndex })}>
							<TabList>
								<Tab disabled>{t('translation:general')}</Tab>
								<Tab disabled>{t('translation:data')}</Tab>
								<Tab disabled>{t('translation:variants')}</Tab>
							</TabList>

							<TabPanel>
								{this._general()}
							</TabPanel>
							<TabPanel>
								{this._data()}
							</TabPanel>
							<TabPanel>
								{this._variants()}
							</TabPanel>

						</Tabs>
					</div>
				</article>
			</section>
		);
	}
}

const validate = (values) => {
	const errors = {}
	//product name
	if (!values.product_name) {
		errors.product_name = 'Product Name Required'
	}
	//Product Description
	if (!values.product_description) {
		errors.product_description = 'Product Description Required'
	}
	//meta title
	if (!values.product_meta_title) {
		errors.product_meta_title = 'Meta Title Required'
	}
	//meta description
	if (!values.product_meta_description) {
		errors.product_meta_description = 'Meta Description Required'
	}
	//meta keywords
	if (!values.product_meta_keywords) {
		errors.product_meta_keywords = 'Meta Keywords Required'
	}

	//product quantity
	if (!values.product_quantity) {
		errors.product_quantity = 'Product Quantity Required'
	}
	//product color
	if (!values.product_color) {
		errors.product_color = 'Product color Required'
	}
	//product height
	if (!values.product_height) {
		errors.product_height = 'Product Height Required'
	}
	//product width
	if (!values.product_width) {
		errors.product_width = 'Product Width Required'
	}
	//product price
	if (!values.product_price) {
		errors.product_price = 'Product Price Required'
	}
	//product availability
	if (!values.product_availability) {
		errors.product_availability = 'Product Availability Required'
	}
	//status
	if (!values.product_stock_status) {
		errors.product_stock_status = 'Status Required'
	}
	return errors;
}


const validateInitialValues = (values) => {	
	console.log(values)
	if(values) {
		
		let availability = values.availability === true ? "In Stock" : "Out of Stock";
		let stock_status = values.stock_status === true ? "Enable" : "Disable";
		
		return {
			...values,
			product_name: values.name ? values.name : "",
			product_description: values.description ? values.description : "",
			product_meta_title: values.meta_tag ? values.meta_tag : "",
			product_meta_description: values.meta_description ? values.meta_description : "",
			product_meta_keywords: values.meta_keywords ? values.meta_keywords : "",
			product_quantity: values.quantity ? values.quantity : "",
			product_color: values.color ? values.color : "",
			product_height: values.height ? values.height : "",
			product_width: values.width ? values.width : "",
			product_price: values.price ? values.price : "",
			product_availability: {
				label: availability,
				value: availability
			},
			product_stock_status: {
				label: stock_status,
				value: stock_status
			},
		}
	}
}

const mapStateToProps = (state, props) => {
	return {
		initialValues: validateInitialValues(state.persistStore.editProduct),
	}
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


ProductEdit = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "productEdit",
    validate
  })
)(ProductEdit);

export default withTranslation(['translation'])(ProductEdit);







