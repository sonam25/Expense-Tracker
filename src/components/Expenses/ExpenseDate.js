
import React from 'react';
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const Month = props.expenseDate.toLocaleString('en-US', { month: 'long' });
    const Year = props.expenseDate.toLocaleString('en-US', { day: '2-digit' });;
    const Date = props.expenseDate.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month '>{Month}</div>
            <div className='expense-date__year '>{Year}</div>
            <div className='expense-date__day '>{Date}</div>
        </div>
    );
}

export default ExpenseDate;