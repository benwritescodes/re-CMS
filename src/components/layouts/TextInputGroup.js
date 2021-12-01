import React from 'react';
import PropTypes from 'prop-types';
//classnames is used to dynamically add a conditional className
import classnames from 'classnames';

const TextInputGroup = ({
	label,
	value,
	type,
	name,
	placeholder,
	onChange,
	error,
}) => {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<input
				className={classnames(
					'form-control form-control-lg',
					{ 'is-invalid': error },
				)} //'form-control form-control-lg'
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && (
				<div className='invalid-feedback'>
					{error}
				</div>
			)}
		</div>
	);
};

TextInputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
	type: 'text',
};

export default TextInputGroup;
