import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';
export class Contacts extends Component {
	componentDidMount() {
		//This calls the getContact action
		this.props.getContacts();
	}
	render() {
		const { contacts } = this.props;

		return (
			/**React.Fragment is used to take out unnessary element. A div in here is not need */
			<React.Fragment>
				<h1 className="display-4 mb-4">
					<span className="text-danger">Contact</span> List
				</h1>
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</React.Fragment>
		);
	}
}

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired,
};

//We are trying to get the state through this syntax
const mapStateToProps = (state) => ({
	contacts: state.contact.contacts,
});

// The connect is used to put both the state and action in the props of the contacts component
export default connect(mapStateToProps, { getContacts })(Contacts);
