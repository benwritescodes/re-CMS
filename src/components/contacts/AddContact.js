import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import { addContact } from '../../actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	onSubmit = async (e) => {
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

		const newContact = {
			name,
			email,
			phone,
		};

		//	this is indirectly calling the action handler
		this.props.addContact(newContact);

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

	/**	This function connects the input values to the state. 
	The state is set immediately this function is invoked**/
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div>
				<div className="card mb-3">
					<div className="card-header">Add Contact</div>
					<div className="card-body">
						<form onSubmit={this.onSubmit}>
							<TextInputGroup
								label="Name"
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
								value="Add Contact"
								className="btn btn-block btn-danger btn-lg"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired,
};

// The connect is used to put both the state and action in the props of a component
export default connect(null, { addContact })(AddContact);
