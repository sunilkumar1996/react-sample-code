import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
	
	render() {
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
									<Link to="/" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Brands </Link>
								</h6>
								<div className="filter-content collapse show" id="collapse_2">
									<div className="inner">
										<label className="custom-control custom-checkbox">
											<input type="checkbox" name=""  className="custom-control-input" />
											<div className="custom-control-label">Adidas  
											<b className="badge badge-pill badge-light float-right">120</b>  </div>
										</label>
										<label className="custom-control custom-checkbox">
											<input type="checkbox" name= "" className="custom-control-input" />
											<div className="custom-control-label">Nike 
											<b className="badge badge-pill badge-light float-right">15</b>  </div>
										</label>
										<label className="custom-control custom-checkbox">
											<input type="checkbox" name="" className="custom-control-input" />
											<div className="custom-control-label">The Noth Face 
											<b className="badge badge-pill badge-light float-right">35</b> </div>
										</label>
										<label className="custom-control custom-checkbox">
											<input type="checkbox" name="" className="custom-control-input" />
											<div className="custom-control-label">The cat 
											<b className="badge badge-pill badge-light float-right">89</b> </div>
										</label>
										<label className="custom-control custom-checkbox">
											<input type="checkbox" name="" className="custom-control-input" />
											<div className="custom-control-label">Honda 
											<b className="badge badge-pill badge-light float-right">30</b>  </div>
										</label>
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
							<article className="filter-group">
								<h6 className="title">
									<Link to="/" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Condition </Link>
								</h6>
								<div className="filter-content collapse show" id="collapse_5">
									<div className="inner">
										<label className="custom-control custom-radio">
											<input type="radio" name="myfilter_radio"  className="custom-control-input" />
											<div className="custom-control-label">Any condition</div>
										</label>
										
										<label className="custom-control custom-radio">
											<input type="radio" name="myfilter_radio" className="custom-control-input" />
											<div className="custom-control-label">Brand new </div>
										</label>
										
										<label className="custom-control custom-radio">
											<input type="radio" name="myfilter_radio" className="custom-control-input" />
											<div className="custom-control-label">Used items</div>
										</label>
										
										<label className="custom-control custom-radio">
											<input type="radio" name="myfilter_radio" className="custom-control-input" />
											<div className="custom-control-label">Very old</div>
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
								
								<article className="card card-product-list">
									<div className="row no-gutters">
										<aside className="col-md-3">
											<Link to="/" className="img-wrap">
												<span className="badge badge-danger"> NEW </span>
												<img src="/images/items/1.jpg" alt="" />
											</Link>
										</aside>
										<div className="col-md-6">
											<div className="info-main">
												<Link to="/" className="h5 title"> Hot sale unisex New Design Shirt</Link>
												<div className="rating-wrap mb-2">
													<ul className="rating-stars">
														<li className="stars-active"> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
														<li>
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
													</ul>
													<div className="label-rating">9/10</div>
												</div>
												
												<p className="mb-3">
													<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
													<span className="tag"> 5 Years </span> 
													<span className="tag"> 80 reviews </span>
													<span className="tag"> Russia </span>
												</p>
												
												<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
												proident, sunt in culpa qui laborum.... </p>
												
											</div>
										</div>
										<aside className="col-sm-3">
											<div className="info-aside">
												<div className="price-wrap">
													<span className="h5 price">$25.00-$40.00</span> 
													<small className="text-muted">/per item</small>
												</div>
												<small className="text-warning">Paid shipping</small>
												
												<p className="text-muted mt-3">Grand textile Co</p>
												<p className="mt-3">
													<Link to="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </Link>
													<Link to="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </Link>
												</p>
												
												<label className="custom-control mt-3 custom-checkbox">
													<input type="checkbox" className="custom-control-input" />
													<div className="custom-control-label">Add to compare
													</div>
												</label>
												
											</div>
										</aside>
									</div>
								</article>
								
								<article className="card card-product-list">
									<div className="row no-gutters">
										<aside className="col-md-3">
											<Link to="/" className="img-wrap">
												<img src="/images/items/2.jpg" alt="" />
											</Link>
										</aside>
										<div className="col-md-6">
											<div className="info-main">
												<Link to="/" className="h5 title"> High Quality Winter PU Rain Jacket  </Link>
												<div className="rating-wrap mb-2">
													<ul className="rating-stars">
														<li className="stars-active"> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
														<li>
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
													</ul>
													<div className="label-rating">7/10</div>
												</div>
												
												<p className="mb-3">
													<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
													<span className="tag"> 2 Years </span> 
													<span className="tag"> 30 reviews </span>
													<span className="tag"> Japan </span>
												</p>
												
												<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
												proident, sunt in culpa qui laborum.... </p>
												
											</div>
										</div>
										<aside className="col-sm-3">
											<div className="info-aside">
												<div className="price-wrap">
													<span className="h5 price">$65.00-$70.00</span> 
													<small className="text-muted">/per item</small>
												</div>
												<small className="text-success">Free shipping</small>
												
												<p className="text-muted mt-3">Guangzhou textile Ltd</p>
												<p className="mt-3">
													<Link to="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </Link>
													<Link to="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </Link>
												</p>
												
												<label className="custom-control mt-3 custom-checkbox">
													<input type="checkbox" className="custom-control-input" />
													<div className="custom-control-label">Add to compare
													</div>
												</label>
												
											</div>
										</aside>
									</div>
								</article>
								
								<article className="card card-product-list">
									<div className="row no-gutters">
										<aside className="col-md-3">
											<Link to="/" className="img-wrap">
												<img src="/images/items/3.jpg" alt="" />
											</Link>
										</aside>
										<div className="col-md-6">
											<div className="info-main">
												<Link to="/" className="h5 title"> Great product name goes here  </Link>
												<div className="rating-wrap mb-2">
													<ul className="rating-stars">
														<li className="stars-active"> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
														<li>
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
													</ul>
													<div className="label-rating">2/10</div>
												</div>
												
												<p className="mb-3">
													<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
													<span className="tag"> 4 Years </span> 
													<span className="tag"> 60 reviews </span>
													<span className="tag"> China </span>
												</p>
												
												<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
												proident, sunt in culpa qui laborum.... </p>
												
											</div>
										</div>
										<aside className="col-sm-3">
											<div className="info-aside">
												<div className="price-wrap">
													<span className="h5 price">$325.00-$390.00</span> 
													<small className="text-muted">/per bag</small>
												</div>
												<small className="text-success">Free shipping</small>
												
												<p className="text-muted mt-3">Guangzhou Electronic Co</p>
												<p className="mt-3">
													<Link to="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </Link>
													<Link to="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </Link>
												</p>
												
												<label className="custom-control mt-3 custom-checkbox">
													<input type="checkbox" className="custom-control-input" />
													<div className="custom-control-label">Add to compare
													</div>
												</label>
												
											</div>
										</aside>
									</div>
								</article>
								
								<article className="card card-product-list">
									<div className="row no-gutters">
										<aside className="col-md-3">
											<Link to="/" className="img-wrap">
												<img src="/images/items/1.jpg" alt="" />
											</Link>
										</aside>
										<div className="col-md-6">
											<div className="info-main">
												<Link to="/" className="h5 title"> Best demo clothe with latest Fashion  </Link>
												<div className="rating-wrap mb-2">
													<ul className="rating-stars">
														<li className="stars-active"> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
														<li>
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
													</ul>
													<div className="label-rating">5/10</div>
												</div>
												
												<p className="mb-3">
													<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
													<span className="tag"> 4 Years </span> 
													<span className="tag"> 60 reviews </span>
													<span className="tag"> China </span>
												</p>
												
												<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
												proident, sunt in culpa qui laborum.... </p>
												
											</div>
										</div>
										<aside className="col-sm-3">
											<div className="info-aside">
												<div className="price-wrap">
													<span className="h5 price">$325.00-$390.00</span> 
													<small className="text-muted">/per bag</small>
												</div>
												<small className="text-success">Free shipping</small>
												
												<p className="text-muted mt-3">Guangzhou Electronic Co</p>
												<p className="mt-3">
													<Link to="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </Link>
													<Link to="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </Link>
												</p>
												
												<label className="custom-control mt-3 custom-checkbox">
													<input type="checkbox" className="custom-control-input" />
													<div className="custom-control-label">Add to compare
													</div>
												</label>
												
											</div>
										</aside>
									</div>
								</article>
								
								<article className="card card-product-list">
									<div className="row no-gutters">
										<aside className="col-md-3">
											<Link to="/" className="img-wrap">
												<img src="/images/items/3.jpg" alt="" />
											</Link>
										</aside>
										<div className="col-md-6">
											<div className="info-main">
												<Link to="/" className="h5 title"> Great product name goes here  </Link>
												<div className="rating-wrap mb-2">
													<ul className="rating-stars">
														<li className="stars-active"> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
														<li>
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
															<i className="fa fa-star"></i> 
														</li>
													</ul>
													<div className="label-rating">7/10</div>
												</div>
												
												<p className="mb-3">
													<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
													<span className="tag"> 4 Years </span> 
													<span className="tag"> 60 reviews </span>
													<span className="tag"> China </span>
												</p>
												
												<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
												proident, sunt in culpa qui laborum.... </p>
												
											</div>
										</div>
										<aside className="col-sm-3">
											<div className="info-aside">
												<div className="price-wrap">
													<span className="h5 price">$325.00-$390.00</span> 
													<small className="text-muted">/per bag</small>
												</div>
												<small className="text-success">Free shipping</small>
												
												<p className="text-muted mt-3">Guangzhou Electronic Co</p>
												<p className="mt-3">
													<Link to="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </Link>
													<Link to="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </Link>
												</p>
												
												<label className="custom-control mt-3 custom-checkbox">
													<input type="checkbox" className="custom-control-input" />
													<div className="custom-control-label">Add to compare
													</div>
												</label>
												
											</div>
										</aside>
									</div>
								</article>
								
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

export default Products;