import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {



    return (
        <Card className='expense-item'>
            <ExpenseDate expenseDate={props.expenseDate} />
            <div className='expense-item__description'>
                <h1>{props.expenseType}</h1>
                <div className='expense-item__price'>${props.expensePrice}</div>

            </div>
        </Card>
    );
}

export default ExpenseItem;