import React, { Component } from 'react';

//import axios from 'axios';
//import * as uuid from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';
import { getContact, updateContact } from '../../actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	//This holds the props if component will be receiving new props. The contact is gotten and the state is updated
	UNSAFE_componentWillReceiveProps(nextProps, nextState) {
		const { name, email, phone } = nextProps.contact;
		this.setState({
			name,
			email,
			phone,
		});
	}

	componentDidMount() {
		//Getting the ID
		const { id } = this.props.match.params;

		//	Getting the contact //calling the action handler
		this.props.getContact(id);
	}

	/**	This function connects the input values to the state. 
	The state is set immediately this function is invoked**/
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;

		//Check for error
		if (name === '') {
			this.setState({
				errors: {
					name: 'Name is required',
				},
			});
			return;
		}

		if (email === '') {
			this.setState({
				errors: {
					email: 'Email is required',
				},
			});
			return;
		}

		if (phone === '') {
			this.setState({
				errors: {
					phone: 'Phone is required',
				},
			});
			return;
		}

		const { id } = this.props.match.params;
		const updatedContact = {
			id,
			name,
			email,
			phone,
		};

		//update the redux state
		this.props.updateContact(updatedContact);

		//clear state after clicking submit
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});

		//To go back to the home page after adding a contact
		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div>
				<div className="card mb-3">
					<div className="card-header">Edit Contact</div>
					<div className="card-body">
						<form onSubmit={this.onSubmit.bind(this)}>
							<TextInputGroup
								label="Name"
								/**value is the current value of the state which is empty at this moment*/
								value={name}
								type="text"
								name="name"
								placeholder="Enter Name..."
								onChange={this.onChange}
								error={errors.name}
							/>
							<TextInputGroup
								label="Email"
								value={email}
								type="email"
								name="email"
								placeholder="Enter email address..."
								onChange={this.onChange}
								error={errors.email}
							/>
							<TextInputGroup
								label="Phone Number"
								value={phone}
								type="text"
								name="phone"
								placeholder="Enter phone number..."
								onChange={this.onChange}
								error={errors.phone}
							/>
							<input
								type="submit"
								value="Update Contact"
								className="btn btn-block btn-danger btn-lg"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

EditContact.propTypes = {
	getContact: PropTypes.func.isRequired,
	updateContact: PropTypes.func.isRequired,
	contact: PropTypes.object.isRequired,
};

//This is what gets the state(contact) into this component
const mapStateToProps = (state) => ({
	contact: state.contact.contact,
});

// The connect is used to put both the state and action handler in the props of a component
export default connect(mapStateToProps, { getContact, updateContact })(
	EditContact,
);
