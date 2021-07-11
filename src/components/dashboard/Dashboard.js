import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Http from '../../Http';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<section className="section-conten">
				<article className="card mb-3">
					<div className="card-body">
						
						<figure className="icontext">
								<div className="icon">
									<img className="rounded-circle img-sm border" src="images/avatar3.jpg" alt="" />
								</div>
								<div className="text">
									<strong> Manish Malhotra </strong>
									<p>manishmalhotra05@gmail.com</p>
									<Link to="/profile/edit">Edit</Link>
								</div>
						</figure>
						<hr/>
						<p>
							<i className="fa fa-map-marker text-muted"></i> My address:  
							 <br/>
							Mumbai city, Street name, Building 123, House 321 &nbsp; 
							<Link to="/" className="btn-link"> Edit</Link>
						</p>
						<article className="card-group">
							<figure className="card bg">
								<div className="p-3">
									 <h5 className="card-title">38</h5>
									<span>Orders</span>
								</div>
							</figure>
							<figure className="card bg">
								<div className="p-3">
									 <h5 className="card-title">12</h5>
									<span>Awaiting delivery</span>
								</div>
							</figure>
							<figure className="card bg">
								<div className="p-3">
									 <h5 className="card-title">50</h5>
									<span>Delivered items</span>
								</div>
							</figure>
						</article>
					</div>
				</article>
				<article className="card  mb-3">
					<div className="card-body">
						<h5 className="card-title mb-4">Recent orders </h5>

						<div className="row">
						<div className="col-md-6">
							<figure className="itemside  mb-3">
								<div className="aside"><img src="images/items/1.jpg" alt="" className="border img-sm"/></div>
								<figcaption className="info">
									<time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2020</time>
									<p>Great item name goes here </p>
									<span className="text-warning">Pending</span>
								</figcaption>
							</figure>
						</div>
						<div className="col-md-6">
							<figure className="itemside  mb-3">
								<div className="aside"><img src="images/items/2.jpg" alt="" className="border img-sm"/></div>
								<figcaption className="info">
									<time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
									<p>Machine for kitchen to blend </p>
									<span className="text-success">Departured</span>
								</figcaption>
							</figure>
						</div>
						<div className="col-md-6">
							<figure className="itemside mb-3">
								<div className="aside"><img src="images/items/3.jpg" alt="" className="border img-sm"/></div>
								<figcaption className="info">
									<time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
									<p>Ladies bag original leather </p>
									<span className="text-success">Shipped  </span>
								</figcaption>
							</figure>
						</div>
					</div>

					<Link to="/" className="btn btn-outline-primary"> See all orders  </Link>
					</div>
				</article>
			</section>
		);
	}
}

export default Dashboard;