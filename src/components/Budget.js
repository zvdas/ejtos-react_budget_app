import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { dispatch, totalExpenses, currency } = useContext(AppContext);

	const setTheBudget = (budget) => {

		if(budget < totalExpenses) {
			alert("You cannot reduce the budget value lower than the spending");
			return;
		}

		dispatch({
			type: 'SET_BUDGET',
			payload: budget
		})
	
	};

	return (
		<div className='alert alert-secondary'>
			{/* <span>Budget: £{budget}</span> */}
			<span>Budget: {currency}
				<input required='required' type='number' step='10' style={{size: 10}} onChange={(event) => setTheBudget(event.target.value)} />
			</span>
		</div>
	);
};

export default Budget;