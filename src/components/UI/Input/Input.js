import React from 'react';

import classes from './Input.module.css';

const input = props => {
	let inputElement = null;

	let inputClasses = [classes.InputElement];

	if (!props.invalid && props.shouldVal && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	if (props.todoInput === 'todo') {
		inputClasses = [classes.TodoInput];
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					onChange={props.changed}
					value={props.value}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
				/>
			);
	}
	return (
		<div className={classes.Input}>
			{/* <label className={classes.Label}>{props.label}</label> */}
			{inputElement}
		</div>
	);
};

export default input;
