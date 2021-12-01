import axios from 'axios';
import {
	GET_CONTACTS,
	DELETE_CONTACT,
	ADD_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
} from './types';

export const getContacts = () => async (dispatch) => {
	const result = await axios.get('https://jsonplaceholder.typicode.com/users');

	dispatch({
		type: GET_CONTACTS,
		payload: result.data,
	});
};

export const getContact = (id) => async (dispatch) => {
	const result = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`,
	);

	dispatch({
		type: GET_CONTACT,
		payload: result.data,
	});
};

export const deleteContact = (id) => async (dispatch) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		dispatch({
			type: DELETE_CONTACT,
			payload: id,
		});
	} catch (e) {
		dispatch({
			type: DELETE_CONTACT,
			payload: id,
		});
	}
};

export const addContact = (newContact) => async (dispatch) => {
	const result = await axios.post(
		'https://jsonplaceholder.typicode.com/users',
		newContact,
	);
	dispatch({
		type: ADD_CONTACT,
		payload: result.data,
	});
};

export const updateContact = (updatedContact) => async (dispatch) => {
	const result = await axios.put(
		`https://jsonplaceholder.typicode.com/users/${updatedContact.id}`,
		updatedContact,
	);

	dispatch({
		type: UPDATE_CONTACT,
		payload: result.data,
	});
};
