import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Http from '../../../Http';
import * as actions from '../../../store/actions';

class Designer extends Component {
	constructor(props){
		super(props);
		this.state = {
			designer:[],
		}
		this.api = '/users/designers';
		this.getData();
	}
  
	getData(){
		Http.post(this.api).then(response => {
			if(response.data.designers.length){
				this.props.dispatch(actions.persist_store({logo:response.data.designers[0].logo}));
			}
			this.setState({
				designer:response.data.designers,
				loading:false
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}
	  
	render() {
	const { designer } = this.state;
		return (
				<div className="container">
					<section className="section-main padding-bottom designer-page">
						<div className="card mb-3">
							<div className="card-body">
								<ol className="breadcrumb float-left">
									<li className="breadcrumb-item"><Link to="/designer">Home</Link></li>
									<li className="breadcrumb-item"><Link to="/designer">Category name</Link></li>
									<li className="breadcrumb-item active">Item details</li>
								</ol>
							</div>
							</div>
							<div className="row">
							{designer.length>0 && designer.map((item, index) => {
								let url = '/designer/products/'+item.slug;
								return(
									<div className="col-md-3 col-sm-6" key={index}>
										<article className="card card-post">
											<img src={item.logo} alt="" className="card-img-top" />
											<div className="card-body">
												<h6 className="title">{item.username}</h6>
												<p className="small text-uppercase text-muted tagline">{item.slogan}</p>
												<Link to={url} className="btn btn-primary rounded-pill">
													Explore Product
												</Link>
											</div>
										</article> 
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

export default connect(mapStateToProps)(Designer);