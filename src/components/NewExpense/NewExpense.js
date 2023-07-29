import React from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const ExpenseDatasaveHandler = (newExpense) => {
        const newExpenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpenseData)

    }
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseDatasave={ExpenseDatasaveHandler} />
        </div>
    )
}

export default NewExpense