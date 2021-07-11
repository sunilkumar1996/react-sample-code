import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import App from '../components/layout/App';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (isAuthenticated ? (
			<App>
				<Component {...props} />
			</App>
		) : (
		<Redirect
			to={{
				pathname: '/',
				state: { from: props.location },
			}}
		/>
		))}
	/>
);

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
