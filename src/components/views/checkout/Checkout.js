import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
	
	render() {
		return (
			<div className="checkout-page-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="checkout-page-top">
								<p><i className="fa fa-check" aria-hidden="true"></i><Link to="#"> Returning customer? Click here to login</Link></p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="checkout-page-top">
								<p><i className="fa fa-check" aria-hidden="true"></i><Link to="#"> Returning customer? Click here to login</Link></p>
							</div>
						</div>
						</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="billing-details-area">
								<h2 className="cart-area-title">BILLING DETAILS</h2>
								<form id="checkout-form">
									<div className="row">

										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="first_name">First Name *</label>
												<input type="text" id="first-name" name="first_name" className="form-control" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="last_name">Last Name *</label>
												<input type="text" id="last-name" name="last_name" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">

										<div className="col-lg-12">
											<div className="form-group">
												<label htmlFor="company_name">Company Name</label>
												<input type="text" id="company-name"  id="company_name" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
									
										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="email">E-mail Address *</label>
												<input type="text" id="email" name="email" className="form-control" />
											</div>
										</div>
										
										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="phone">Phone *</label>
												<input type="text" id="phone" name="phone" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
										
										<div className="col-lg-12">
											<div className="form-group">
												<label htmlFor="country">Country</label>
												<div className="custom-select">
													<select id="country" name="country" className='select2'>
														<option value="">Select your country</option>
														<option value="1">India</option>
														<option value="2">Pakistan</option>
														<option value="3">USA</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										
										<div className="col-lg-12">
											<div className="form-group">
												<label htmlFor="address">Address</label>
												<input type="text" id="address-line1" name="address_line1" className="form-control" />
												<input type="text" id="address-line2" name="address_line2" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
									
										<div className="col-lg-12">
											<div className="form-group">
												<label htmlFor="town_city">Town / City</label>
												<input className="text" id="town_city" name="town_city" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
										
										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="district">District *</label>
												<div className="custom-select">
													<select id="district" name="district" className='select2'>
														<option value="">Select Your District</option>
														<option value="1">Dhaka</option>
														<option value="2">Rajshahi</option>
													</select>
												</div>
											</div>
										</div>
										
										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="postcode">Postcode / ZIP</label>
												<input type="text" id="postcode" name="postcode" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row">
										
										<div className="col-lg-12">
											<div className="form-group">
												<span><input type="checkbox" name="remember"/>CREAT AN ACCOUNT?</span>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="ship-to-another-area">
								<h2 className="cart-area-title">SHIP TO A DIFFERENT ADDRESS?<span>
									 <input type="checkbox" name="remember"/></span></h2>
								<label>Order Notes</label>
								<textarea className="form-control">Notes about your order, e.g. special notes for delivery.</textarea>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="order-sheet">
								<h2>Your Order</h2>
								<ul>
									<li>01. Product Title<span>$59.00</span></li>
									<li>02. Product Title<span>$59.00</span></li>
								</ul>
								<h3>Subtotal<span>$ 118.00</span></h3>
								<h3>Total<span>$ 118.00</span></h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="payment-option">
								<div className="form-group">
									<span><input type="checkbox" name="remember"/>DIRECT BANK TRANSFER</span>
									<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
								</div>
								<div className="form-group">
									<span><input type="checkbox" name="remember"/>CHECK PAYMENTS</span>
								</div>
								<div className="form-group">
									<span><input type="checkbox" name="remember"/>CASH ON DELIVERY</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="pLace-order">
								<button className="btn-send-message disabled" type="submit" value="Login">PLace Order</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
		}
	}
export default Checkout;