import React, { Component } from 'react';

class ChangePassword extends Component {
	
	render() {
		
		return (
			
			<section className="section-conten">
				<article className="card mb-3">
					<div className="card-body">
					<h2 className="cart-area-title">Change Password</h2>
	
					<form method="POST">
						<div className="form-group">  
							<div className="col-md-6">
								<div className="row">
								<label>Current Password *</label>
								<input type="password" name="current_password" className="form-control" />
								</div>
							</div>
						</div>
					
						<div className="form-group">
							<div className="col-md-6">
								<div className="row">
									<label>New Password *</label>
									<input type="password" name="new_password" className="form-control" />
								</div>
							</div>
						</div>
					
						<div className="form-group">
							<div className="col-md-6">
								<div className="row">
									<label>Confirm Password *</label>
									<input type="password" name="confirmed_password" className="form-control" />
								</div>
							</div>
						</div>
					
						<div className="form-group">
							<button
							type="button"
							className="btn btn-primary">
							Update
							</button>
						</div>
					</form>
					</div>
				</article>
			</section>	
		);
	}
}


export default ChangePassword;