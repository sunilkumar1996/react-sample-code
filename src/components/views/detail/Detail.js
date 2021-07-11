import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Http from '../../../Http';
import {Helmet} from "react-helmet";
import ReactImageMagnify from 'react-image-magnify';
import * as actions from '../../../store/actions';

class Detail extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'',
			description:'',
			color:'',
			price:'',
			height:'',
			width:'',
			quantity:'',
			availability:'',
			thread_view:null,
			variants:[],
			loading:true,
		}
		this.api = '/products/'+props.match.params.id;
		this.getData();
	}
  
	getData(){
		Http.get(this.api).then(response => {
			if(response.data.logo){
				this.props.dispatch(actions.persist_store({logo:response.data.logo}));
			}
			this.setState({		
				name:response.data.product.name,
				description:response.data.product.description,
				color:response.data.product.color,
				price:response.data.product.price,
				height:response.data.product.height,
				width:response.data.product.width,
				quantity:response.data.product.quantity,
				availability:response.data.product.availability,
				thread_view:response.data.product.thread_view,
				variants:response.data.variants,
				loading:false
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}

	render() {
	const { variants, loading, thread_view } = this.state;
		return (		
				<section className="section-content bg-white padding-y">
					<div className="container">
						<div className="row">
							<aside className="col-md-6">
								<div className="card">
									 
										<div className="img-big-wrap fluid">
											<div className="fluid__image-container">
												<ReactImageMagnify {...{
													smallImage: {
														alt: 'items',
														isFluidWidth: true,
														src: thread_view,
													},
													largeImage: {
														src: thread_view,
														width: 1200,
														height: 1800
													}
												}} />

											</div>
										</div>
											<div className="gallery-wrap zoomimagewrap">
												<div className="thumbs-wrap">
													<div className="item-thumb"> <img src="/images/items/1.jpg" /></div>
													<div className="item-thumb"> <img src="/images/items/1.jpg" /></div>
													<div className="item-thumb"> <img src="/images/items/1.jpg" /></div>
													<div className="item-thumb"> <img src="/images/items/1.jpg" /></div>
												</div>
											</div>
									</div>
							</aside>
								
								<main className="col-md-6">
									<div className="fluid__instructions"></div>	
									
									<article className="product-info-aside">
									   <h2 className="title mt-3">{this.state.name}</h2>
									   <div className="mb-3"> 
										  <var className="price h4">&#8377; {this.state.price}</var> 
									   </div>
									   
										
										{variants.length>0 &&
											<>
											<h3 className="title mt-3">Availabile Variant</h3>
											<div className="row">
												<div className="col-md-6">
													<div className="row">
														<article className="gallery-wrap">
														  <div className="thumbs-wrap">
															{variants.length>0 && variants.map((item, index) => {
																	let url = '/product/detail/'+this.props.match.params.id+''+'/v/'+item.id;
																	return(
																		<Link to={url} className="item-thumb" key={index}> 
																			<img src={item.thread_view} />
																		</Link>
																	);
																})}
														  </div>
														</article>
													</div>
												</div>
											</div>
											</>
										}
										
									   <p>{this.state.description.replace(/<[^>]+>/g, '')}</p>
									   <dl className="row">
										  <dt className="col-sm-3">Color</dt>
										  <dd className="col-sm-9">{this.state.color}</dd>
										  <dt className="col-sm-3">Height</dt>
										  <dd className="col-sm-9">{this.state.height} inch</dd>
										  <dt className="col-sm-3">Width</dt>
										  <dd className="col-sm-9">{this.state.width} inch</dd>
										  <dt className="col-sm-3">Quantity</dt>
										  <dd className="col-sm-9">{this.state.quantity}</dd>
										  <dt className="col-sm-3">Availability</dt>
										  {this.state.availability === true &&
											<dd className="col-sm-9">In Stock</dd>
										  }
										  {this.state.availability === false &&
											<dd className="col-sm-9">Out of Stock</dd>
										  }

									   </dl>
							   
									   <div className="form-row  mt-4">
										  <div className="form-group col-md flex-grow-0">
											 <div className="input-group mb-3 input-spinner">
												<div className="input-group-prepend">
												   <button className="btn btn-light" type="button" id="button-plus"> + </button>
												</div>
												<input type="text" className="form-control" value="1" />
												<div className="input-group-append">
												   <button className="btn btn-light" type="button" id="button-minus"> − </button>
												</div>
											 </div>
										  </div>
										  <div className="form-group col-md">
											 <div className="btn  btn-primary"> 
												<i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span> 
											</div>
										  </div>
									</div>
								</article>
							</main>
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
});

export default connect(mapStateToProps)(Detail);