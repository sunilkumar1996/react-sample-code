import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import App from '../components/layout/App';
import Auth from '../components/layout/Auth';

const SplitRoute = ({
	component: Component,
	fallback: Fallback,
	isAuthenticated,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) => (isAuthenticated ? (
			<App>
				<Component {...props} />
			</App>
		) : (
			<Auth>
				<Redirect to="/login" />
			</Auth>
		))}
	/>
);

SplitRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(SplitRoute);
