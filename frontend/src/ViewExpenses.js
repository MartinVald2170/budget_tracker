import React, { useEffect, useState } from "react"
import axios from "axios"

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
                <li key={expense}> 
                    {expense.title} is due {expense.due} at {expense.value} dollars</li>
            ))}
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