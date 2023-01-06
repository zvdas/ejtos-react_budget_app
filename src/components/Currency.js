import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
    };

    return (
        <div className="alert alert-secondary dropdown">
            <select className="bg-success text-white dropdown-toggle" id="inputCurrency" onChange={event=>setCurrency(event.target.value)} data-bs-toggle="dropdown" aria-expanded="false">
                <option className="dropdown-item" defaultValue>Currency ({currency})</option>
                <option className="dropdown-item" value="$" name="$">$ Dollar</option>
                <option className="dropdown-item" value="£" name="£">£ Pound</option>
                <option className="dropdown-item" value="€" name="€">€ Euro</option>
                <option className="dropdown-item" value="₹" name="₹">₹ Rupee</option>
            </select>
        </div>
    )
}

export default Currency;