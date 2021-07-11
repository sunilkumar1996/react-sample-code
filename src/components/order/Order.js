import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
class Order extends Component {
	
	render() {
		return (
				<>
					<article className="card  mb-3">
						<div className="card-body">
							<h5 className="card-title mb-4">My orders </h5>

							<div className="row">
							<div className="col-md-6">
								<figure className="itemside  mb-3">
									<div className="aside"><img src="images/items/1.jpg" alt="" className="border img-sm"/></div>
									<figcaption className="info">
										<time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
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
						</div>
					</article>
				</>
			);
	}
}

export default Order;