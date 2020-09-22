import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActionsView from './Components/ActionsView.js'

const App = () => {
	return (
		<>
			<ActionsView />
			<ToastContainer />
		</>
	);
};

export default App;