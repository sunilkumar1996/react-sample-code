import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Invitation extends Component {
	
	render() {
		const { t } = this.props;
		return (
				<section className="section-conten">
					<article className="card mb-3">
						<div className="card-body">
							<h1 className="h4 mb-2 text-gray-800">{t('translation:invitation')} {t('translation:list')}
								<div className="pull-right">
									<Link to="/invitation/send" className="btn btn-primary btn-sm">{t('translation:send')}</Link>
								</div>
							</h1>
						</div>
					</article>
				</section>
			
				);
	}
}

export default withTranslation(['translation'])(Invitation);