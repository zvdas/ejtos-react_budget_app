import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency, currencyText } = useContext(AppContext);

    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
    };

    return (
        <div>
        {/* <div className="alert alert-secondary dropdown"> */}
            <select className="alert alert-success text-white dropdown-toggle" id="inputCurrency" onChange={event=>setCurrency(event.target.value)} data-bs-toggle="dropdown" aria-expanded="false">
                <option className="dropdown-item" defaultValue>Currency ({currency} {currencyText})</option>
                <option className="dropdown-item" value="$ Dollar" name="$">$ Dollar</option>
                <option className="dropdown-item" value="£ Pound" name="£">£ Pound</option>
                <option className="dropdown-item" value="€ Euro" name="€">€ Euro</option>
                <option className="dropdown-item" value="₹ Rupee" name="₹">₹ Rupee</option>
            </select>
        </div>
    )
}

export default Currency;