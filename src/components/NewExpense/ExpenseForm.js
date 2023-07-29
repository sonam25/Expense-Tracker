import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const newExpenseAddHandler = () => {
        setShowForm(true);
    }
    const CancelHandler = () => { setShowForm(false); }
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandle = (event) => {
        event.preventDefault();
        const newExpense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onExpenseDatasave(newExpense);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);
    }
    return (
        <div className="new_add_expense_div_style">
            {showForm ? <form onSubmit={submitHandle}>
                <div className="new-expense__control">
                    <div className="new-expense__control">
                        <label >Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min='0.1' steo='0.01' onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <button type="button" onClick={CancelHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>

                    </div>
                </div>
            </form> : ''}
            {showForm ? '' : <button onClick={newExpenseAddHandler} className="new-expense__control">Add New Expense</button>}
        </div>

    )
}

export default ExpenseForm



