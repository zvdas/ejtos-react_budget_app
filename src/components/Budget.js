import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [action, setAction] = useState('');

	const setBudget = () => {
		const expense = {
			name: name,
			cost: parseInt(cost),
		}

		if(action === 'Reduce') {
			dispatch({
				type: 'RED_EXPENSE',
				payload: expense,
			});
		} else {
			dispatch({
				type: 'ADD_EXPENSE',
				payload: expense
			});
		};
	};

	return (
		<div className='alert alert-secondary'>
			{/* <span>Budget: £{budget}</span> */}
			<span>Budget: £
				<input required='required' type='number' value={budget} style={{size: 10}} onChange={(event) => setBudget(event.target.value)}/>
			</span>
		</div>
	);
};

export default Budget;