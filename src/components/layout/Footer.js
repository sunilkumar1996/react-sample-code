import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
				<footer className="section-footer bg-secondary">
					<div className="container small">
						<section className="footer-top padding-y-lg text-white">
							<div className="row">
								<aside className="col-md col-6">
									<h6 className="title">Company</h6>
									<ul className="list-unstyled">
										<li> <Link to="/">About us</Link></li>
										<li> <Link to="/">Career</Link></li>
									</ul>
								</aside>
								<aside className="col-md col-6">
									<h6 className="title">Help</h6>
									<ul className="list-unstyled">
										<li> <Link to="/">Contact us</Link></li>
										<li> <Link to="/">Money refund</Link></li>
										<li> <Link to="/">Order status</Link></li>
										<li> <Link to="/">Shipping info</Link></li>
									</ul>
								</aside>
								<aside className="col-md col-6">
									<h6 className="title">Account</h6>
									<ul className="list-unstyled">
										<li> <Link to="/login"> Login </Link></li>
										<li> <Link to="/register"> New Registration </Link></li>
										<li> <Link to="/"> Account Setting </Link></li>
										<li> <Link to="/"> My Orders </Link></li>
									</ul>
								</aside>
								<aside className="col-md">
									<h6 className="title">Social</h6>
									<ul className="list-unstyled">
										<li><Link to="/"> <i className="fab fa-facebook"></i> Facebook </Link></li>
										<li><Link to="/"> <i className="fab fa-twitter"></i> Twitter </Link></li>
										<li><Link to="/"> <i className="fab fa-instagram"></i> Instagram </Link></li>
										<li><Link to="/"> <i className="fab fa-youtube"></i> Youtube </Link></li>
									</ul>
								</aside>
							</div>
						</section>

						<section className="footer-bottom text-center">						
							<p className="text-white">Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
							<p className="text-muted"> &copy 2019 Company name, All rights reserved </p>
							<br/>
						</section>
					</div>
				</footer>
		);
	}
}

export default Footer
