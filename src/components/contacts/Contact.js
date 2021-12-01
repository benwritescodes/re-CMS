import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact extends Component {
	state = {
		showContactInfo: false,
	};

	onDeleteClick = (id) => {
		this.props.deleteContact(id);
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			/**
			 * we need to wrap whatever we are returning around the consumer
			 * tag so as to access the value been got from the context
			 */

			<div className="card mb-3">
				<div className="card-body">
					<h4>
						{name}{' '}
						<i
							//eventListener to hide/show content of the component (state:true/false)
							onClick={() => {
								this.setState({
									showContactInfo: !this.state.showContactInfo,
								});
							}}
							className="fas fa-sort-down"
							style={{
								cursor: 'pointer',
							}}
						></i>{' '}
						<i
							className="fas fa-times"
							style={{
								float: 'right',
								color: 'red',
								cursor: 'pointer',
							}}
							//eventListener to delete a component
							onClick={this.onDeleteClick.bind(this, id)}
						></i>
						<Link to={`/edit/${id}`}>
							<i
								className="fas fa-pencil-alt"
								style={{
									float: 'right',
									color: 'black',
									cursor: 'pointer',
									marginRight: '1rem',
								}}
							></i>
						</Link>
					</h4>
					{showContactInfo ? (
						<ul className="list-group">
							<li className="list-group-item">Email: {email}</li>
							<li className="list-group-item">Phone: {phone}</li>
						</ul>
					) : null}
				</div>
			</div>
		);
	}
}

//This is used for type-checking the properties being passed into the components
Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContact: PropTypes.func.isRequired,
};

//We are not mapping state to props, there is no state needed we just want to delete a contact
// The connect is used to put both the state and action in the props of a component
export default connect(null, { deleteContact })(Contact);
