import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Http from '../../../Http';
import * as actions from '../../../store/actions';

class Front extends Component {
	constructor(props) {
		super(props);
		this.state={
			designerProducts:[],
			loading:true,
		}
		this.api = '/products/customer_index';
		this.getData();
	}
	
	getData(){
		Http.get(this.api).then(response => {
			if(response.data.logo){
				this.props.dispatch(actions.persist_store({logo:response.data.logo}));
			}
			this.setState({
				designerProducts:response.data.products,
				loading:false
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}
	
	
	render() {
	const { designerProducts } = this.state;
		return(
			<div className="container">
					<section className="section-main padding-y-small">
						<div className="row">
							
							<div className="col-md-12 col-xl-12 col-lg-12">
								<Carousel autoPlay={true}>
									<div>
										<img src="images/banners/slide1.jpg" alt="" />
									</div>
									<div>
										<img src="images/banners/slide2.jpg" alt="" />
									</div>
									<div>
										<img src="images/banners/slide3.jpg" alt="" />
									</div>
								</Carousel>
								
							</div>
							
						</div>
					</section>

					<section className="section-main padding-bottom-sm">
						<header className="section-heading heading-line">
							<h4 className="title-section text-uppercase">Apparel</h4>
						</header>
						<div className="row row-sm">
						{designerProducts.length>0 && designerProducts.map((item, index) => {
							let url = '/product/detail/'+item.id;
							return(
							<div className="col-xl-2 col-lg-3 col-md-4 col-6" key={index}>
								<div href="#" className="card card-sm card-product-grid">
									<Link to={url} className="img-wrap">
									<img src={item.thread_view} alt="" alt="" /> </Link>
									<figcaption className="info-wrap">
										<Link to={url} className="title">
										{item.name}</Link>
										<div className="price mt-1">&#8377; {item.price}</div>
									</figcaption>
									</div>
							</div>
								);
						})}
						
						</div>
					</section>
				</div>
		);
	}	
}


const mapStateToProps = (state) => ({
	persistStore: state.persistStore,
});

export default connect(mapStateToProps)(Front);