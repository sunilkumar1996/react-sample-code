import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Http from '../../../Http';
import ReactImageMagnify from 'react-image-magnify';

class Variant extends Component {
	constructor(props){
	super(props);
	// console.log(props)
		this.state={
			variants:[],
			product:[],
			name: '',
			loading:true,
		}
		this.api = '/products/'+props.match.params.id;
		this.getData();
	}
  	
	getData(){
		Http.get(this.api).then(response => {
			this.setState({
				variants:response.data.variants,
				product:response.data.product,
				loading:false
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}
	
	render() {
	const { variants, product } = this.state;	
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
													src: '/images/items/1.jpg',
												},
												largeImage: {
													src: '/images/items/1.jpg',
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
						{variants.length>0 && variants.map((item, key) => {
							let url = '/product/detail/'+this.props.match.params.id+''+'/v/'+item.id;
							if(item.id == this.props.match.params.vid){
								return(
								<article className="product-info-aside">
									<h2 className="title mt-3">{item.name}</h2>
								   <div className="mb-3"> 
									<var className="price h4">&#8377; {item.price}</var> 
								   </div>
								   
								   <h3 className="title mt-3">Availabile Variants</h3>
									<div className="row">
										<div className="col-md-6">
											<div className="row">
												<article className="gallery-wrap">
												  <div className="thumbs-wrap">
												{variants.length>0 && variants.map((item, key) => {
													let url = '/product/detail/'+this.props.match.params.vid+''+'/v/'+item.id;
													return(
														<Link to={url} className="item-thumb"> 
															<img src={item.thread_view} />
														</Link>
													)
												})}

												  </div>
												</article>
											</div>
										</div>
									</div>
									<p>{product.description.replace(/<[^>]+>/g, '')}</p>
								   <dl className="row">
									  <dt className="col-sm-3">Color</dt>
									  <dd className="col-sm-9">{item.color}</dd>
									  <dt className="col-sm-3">Height</dt>
									  <dd className="col-sm-9">{item.height} inch</dd>
									  <dt className="col-sm-3">Width</dt>
									  <dd className="col-sm-9">{item.width} inch</dd>
									  <dt className="col-sm-3">Quantity</dt>
									  <dd className="col-sm-9">{item.quantity}</dd>
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
								);
							}
						})}
						 </main>
					</div>
				</div>
			
			</section>
		);
	}
}
	
export default Variant;