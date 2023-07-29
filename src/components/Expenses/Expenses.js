import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter';

import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const FilterYearselectHabndler = (getYear) => {
        setFilterYear(getYear);
        console.log('Year', getYear);
    }

    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    // let ExpenseContent = <p>No expenses to diaplay</p>

    // if (filterExpense.length > 0) {
    //     ExpenseContent = filterExpense.map(expense =>
    //         <ExpenseItem expenseDate={expense.date}
    //             expenseType={expense.title}
    //             expensePrice={expense.amount} />
    //     )
    // }

    return (

        <Card className='expenses'>
            <Card>
                <ExpensesFilter selected={filteredYear} onFilterYearselect={FilterYearselectHabndler} />
            </Card>
            <ExpensesChart expenses={filterExpense} />
            <ExpensesList items={filterExpense} />
        </Card>
    )
}

export default Expenses

