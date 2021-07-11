import React from 'react';
import { Route } from 'react-router';
import Auth from '../components/layout/Auth';

const PublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Auth>
				<Component {...props} />
			</Auth>
		)}
	/>
);

export default PublicRoute;
