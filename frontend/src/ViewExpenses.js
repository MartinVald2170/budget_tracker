import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteExpense from "./DeleteExpense"

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/expenses")
        .then(res => {
            setIsLoading(false)
            setExpenses(res.data)
        })
        .catch(e => {
            setErrorMessage("There was a problem, please refresh and try again")
            setIsLoading(false)
        })
    }, [])

    function renderExpenses(){
        return (
            <>
            
            {expenses.map((expense, index) => (
                <li key={`${expense}-${index}`}> 
                    {expense.title}
                    <Link to={`/expenses/${expense.id}`}>View</Link>
                    <DeleteExpense
                    expenseId={expense.id}
                    onDelete={() => setExpenses(expenses.filter((e, i) => e.id !== expense.id))}
                    />
                    </li>
            ))}<Link to={`/new`}>Create an Expense to Track</Link>
            </>
        )
    }


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? renderExpenses(): <h2>Loading Your Expenses Relax</h2>}

        </div>
    )


}

export default ViewExpenses 