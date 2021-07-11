import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Http from '../../../Http';
import {connect} from "react-redux";
import * as actions from '../../../store/actions';

class Products extends Component {
	constructor(props){
		super(props);
		this.state={
			products:[],
			//loading:true,
		}
		this.api = '/products/'+props.match.params.slug+''+'/designers';
		this.getData();
	}
  
	getData(){
		Http.get(this.api).then(response => {
			if(response.data.logo){
				this.props.dispatch(actions.persist_store({logo:response.data.logo}));
			}
			this.setState({		
				products:response.data.products,
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}
	
		
	render() {
	const { products } = this.state;
		return (
			<section className="section-content padding-y">
				<div className="container">
					<div className="card mb-3">
						<div className="card-body">
							<ol className="breadcrumb float-left">
								<li className="breadcrumb-item"><Link to="/">Home</Link></li>
								<li className="breadcrumb-item"><Link to="/">Category name</Link></li>
								<li className="breadcrumb-item active">Item details</li>
							</ol>
						</div>
					</div> 
					
					<div className="row">
						<aside className="col-md-2">
							<article className="filter-group">
								<h6 className="title">
									<Link to="/" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1"> Product type </Link>
								</h6>
								<div className="filter-content collapse show" id="collapse_1">
									<div className="inner">
										<ul className="list-menu">
											<li><Link to="/">Shorts  </Link></li>
											<li><Link to="/">Trousers </Link></li>
											<li><Link to="/">Sweaters  </Link></li>
											<li><Link to="/">Clothes  </Link></li>
											<li><Link to="/">Home items </Link></li>
											<li><Link to="/">Jackats</Link></li>
											<li><Link to="/">Somethings </Link></li>
										</ul>
									</div>
								</div>
							</article> 
							
							<article className="filter-group">
								<h6 className="title">
									<Link to="/" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Price range </Link>
								</h6>
								<div className="filter-content collapse show" id="collapse_3">
									<div className="inner">
										<input type="range" className="custom-range" min="0" max="100" name="" />
										<div className="form-row">
											<div className="form-group col-md-6">
												<label>Min</label>
												<input className="form-control" placeholder="$0" type="number" />
											</div>
											<div className="form-group text-right col-md-6">
												<label>Max</label>
												<input className="form-control" placeholder="$1,0000" type="number" />
											</div>
										</div>
										<button className="btn btn-block btn-primary">Apply</button>
									</div>
								</div>
							</article>
							<article className="filter-group">
								<h6 className="title">
									<Link to="/" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Sizes </Link>
								</h6>
								<div className="filter-content collapse show" id="collapse_4">
									<div className="inner">
										<label className="checkbox-btn">
											<input type="checkbox" />
											<span className="btn btn-light"> XS </span>
										</label>
										
										<label className="checkbox-btn">
											<input type="checkbox" />
											<span className="btn btn-light"> SM </span>
										</label>
										
										<label className="checkbox-btn">
											<input type="checkbox" />
											<span className="btn btn-light"> LG </span>
										</label>
										
										<label className="checkbox-btn">
											<input type="checkbox" />
											<span className="btn btn-light"> XXL </span>
										</label>
									</div>
								</div>
							</article>
						
						</aside>
						
						<main className="col-md-10">
							<header className="mb-3">
								<div className="form-inline">
									<strong className="mr-md-auto">32 Items found </strong>
									<select className="mr-2 form-control">
										<option>Latest items</option>
									</select>
								</div>
							</header>
								
							{products.length>0 && products.map((item, key) => {
								let url = '/product/detail/'+item.id;
								return(
									<article className="card card-product-list">
										<div className="row no-gutters">
											<aside className="col-md-3">
												<Link to={url} className="img-wrap">
													<img src={item.thread_view} />
												</Link>
											</aside>
											<div className="col-md-6">
												<div className="info-main">
													<Link to={url} className="h5 title">{item.name}</Link>
													<p>{item.description.replace(/<[^>]+>/g, '')} </p>
													
												</div>
											</div>
											<aside className="col-sm-3">
												<div className="info-aside">
													<div className="price-wrap">
														<span className="h5 price">&#8377; {item.price}</span> 
														<small className="text-muted">/minimum</small>
														<h4>{this.props.match.params.slug}</h4>
													</div>
												
												</div>
											</aside>
										</div>
									</article>
								);
							})}
								
								<nav className="mb-4" aria-label="Page navigation sample">
									<ul className="pagination">
										<li className="page-item disabled"><Link className="page-link" to="/">Previous</Link></li>
										<li className="page-item active"><Link className="page-link" to="/">1</Link></li>
										<li className="page-item"><Link className="page-link" to="/">2</Link></li>
										<li className="page-item"><Link className="page-link" to="/">3</Link></li>
										<li className="page-item"><Link className="page-link" to="/">4</Link></li>
										<li className="page-item"><Link className="page-link" to="/">5</Link></li>
										<li className="page-item"><Link className="page-link" to="/">Next</Link></li>
									</ul>
								</nav>
								
								<div className="box text-center">
									<p>Did you find what you were looking for？</p>
									<Link to="/" className="btn btn-light">Yes</Link>
									<Link to="/" className="btn btn-light">No</Link>
								</div>
						</main>
						
					</div>
				</div>
			</section>
				);
	}
} 

const mapStateToProps = (state, props) => {
	return {
		user: state.Auth.user,
	}
};


const mapDispatchToProps = (dispatch) => ({
    dispatch
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);