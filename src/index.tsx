import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

// import { setupStore } from 'store/store';
import { store } from 'store/store';

// const store = setupStore();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="320824433686-oil3o3a66v9gumn8qhsjh9l6fgfo1blu.apps.googleusercontent.com">
			{/* <GoogleOAuthProvider clientId="88011330230-e9ddba48mo1qaae1udq52g7q9ea6rcu6.apps.googleusercontent.com"> */}
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</GoogleOAuthProvider>
	</React.StrictMode>
);
