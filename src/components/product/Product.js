import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import Http from '../../Http';
import swal from 'sweetalert';
import { withTranslation } from 'react-i18next';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state={
			products:[],
			loading:true,
		}
		this.api = '/products';
		this.getData();
	}
	
	getData(){
		Http.get(this.api).then(response => {
		// console.log(response);
			this.setState({
				products:response.data.products,
				loading:false
			});
		}).catch(errors=>{
			console.log(errors);
		})
	}
	
	popupDelete(productId){
		swal({
			title: "Are you sure?",
			text: "Are you sure to Delete?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
	}
	
	render() {
		const { products, loading } = this.state;
		const { t, user } = this.props;		
		
		if(user.role==='customer'){
			return <Redirect to='/' />;
		}
		
		return (
			<section className="section-conten">
					<article className="card mb-3">
						<div className="card-body">
							<h1 className="h4 mb-2 text-gray-800">{t('translation:product')} {t('translation:list')}
								<div className="pull-right">
									<Link to="/product/create" className="btn btn-primary btn-sm">{t('translation:create')} {t('translation:product')}</Link>
								</div>
							</h1>
							<div className="row  mt-4">
								<div className="col-xl-12">				
									<div className="table-responsive">
										<table className="table">
											<thead>
												<tr>
													<th>{t('translation:product')} {t('translation:title')}</th>
													<th>{t('translation:price')}</th>
													<th>{t('translation:quantity')}</th>
													<th>{t('translation:color')}</th>
													<th>{t('translation:images')}</th>
													<th>{t('translation:action')}</th>
												</tr>
											</thead>  
											<tbody>
											{products.length>0 && products.map((product, key) => {	
												return(
												<tr>
													<td>{product.name}</td>
													<td>{product.price}</td>
													<td>{product.quantity}</td>
													<td>{product.color}</td>
													<td>{product.thread_view && <img className="thread_view" src={product.thread_view} />}</td>
													<td>
														<Link to={`/product/edit/${product.id}`} title="Edit">
															<i className="fa fa-edit ml-3" aria-hidden="true"></i>
														</Link>
														<span className="link delete" onClick={()=>this.popupDelete(product.id)} title="Delete">
															<i className="far fa-trash-alt ml-3" aria-hidden="true"></i>
														</span>
													</td>
												</tr>
												);
											})}
											{loading &&
												<div className="btn btn-loading"></div>
											}
											</tbody>
										</table>
									</div>
								</div>
							</div>	
						</div>
					</article>
				</section>
			);
	}
}


const mapStateToProps = (state) => (
{
	isAuthenticated: state.Auth.isAuthenticated,
	user: state.Auth.user,
});

export default withTranslation(['translation'])(connect(mapStateToProps)(Product));