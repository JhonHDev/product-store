import AppRouter from './router';

import { Provider } from 'react-redux';

import store from './shared/store';

const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default App;
