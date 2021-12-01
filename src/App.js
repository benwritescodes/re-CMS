//Imported Modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

// Import  provider and the store
//Provider connects our gloal store to our entire app
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

//We wrap the imported provider as a tag around what we intend to return
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header branding='Contact Manager' />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Contacts} />
							<Route exact path='/contact/add' component={AddContact} />
							<Route exact path='/about' component={About} />
							<Route exact path='/edit/:id' component={EditContact} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
