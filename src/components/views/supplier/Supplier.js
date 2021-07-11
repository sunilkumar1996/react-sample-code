import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Supplier extends Component {
	
	render() {
		return (
				<div className="container">
					<section className="section-main padding-bottom designer-page">
						<div className="card mb-3">
							<div className="card-body">
								<ol className="breadcrumb float-left">
									<li className="breadcrumb-item"><Link to="/supplier">Home</Link></li>
									<li className="breadcrumb-item"><Link to="/supplier">Category name</Link></li>
									<li className="breadcrumb-item active">Item details</li>
								</ol>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 col-sm-6">
								<article className="card card-post">
									<img src="images/supplier/a_logo.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<h6 className="title">Adidas </h6>
										<p className="small text-uppercase text-muted tagline">Impossible Is Nothing.</p>
										<Link to="/supplier/products/adidas/1" className="btn btn-outline-primary rounded-pill">
											Explore Product
										</Link>
									</div>
								</article>
							</div>
							<div className="col-md-3 col-sm-6">
								<article className="card card-post">
									<img src="images/supplier/p_logo.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<h6 className="title">Puma</h6>
										<p className="small text-uppercase text-muted tagline">Born to perform.</p>
										<Link to="/supplier/products/puma/2" className="btn btn-outline-primary rounded-pill">
											Explore Product
										</Link>
									</div>
								</article> 
							</div> 
							<div className="col-md-3 col-sm-6">
								<article className="card card-post">
									<img src="images/supplier/g_logo.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<h6 className="title">Gucci</h6>
										<p className="small text-uppercase text-muted tagline">Big Brands don't need tagline.</p>
										<Link to="/supplier/products/gucci/3" className="btn btn-outline-primary rounded-pill">
											Explore Product
										</Link>
									</div>
								</article>
							</div> 
							<div className="col-md-3 col-sm-6">
								<article className="card card-post">
									<img src="images/supplier/p2_logo.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<h6 className="title">Prada</h6>
										<p className="small text-uppercase text-muted tagline">The devil wears prada.</p>
										<Link to="/supplier/products/prada/4" className="btn btn-outline-primary rounded-pill">
											Explore Product
										</Link>
									</div>
								</article> 
							</div>
						</div> 
					</section>
				</div>
				);
	}
}

export default Supplier;