import React, { Suspense  } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import ScrollToTop from 'react-router-scroll-top';
import store from './store';
import * as action from './store/actions';

store.dispatch(action.authCheck());

function App() {
  return (
  	<Suspense fallback="loading">
		<Provider store={store}>
			<Router>	
				<ScrollToTop>
					<Switch>
						<Routes />
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
    </Suspense>
  );
};

export default App;
