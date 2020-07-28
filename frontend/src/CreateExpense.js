import React, {useState} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"

const CreateExpense = () => {

    const [expenseTitle, setExpenseTitle] = useState("")
    const [expenseValue, setExpenseValue] = useState()
    const [expenseDue, setExpenseDue] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function createExpense(){
        if(expenseTitle && expenseValue && expenseDue){
            axios.post(`http://localhost:3000/expenses`, {
                expense: {
                    title: expenseTitle,
                    value: expenseValue, 
                 due: expenseDue
                }
         })
            .then(() => setIsCreated(true))
        } else {
            setErrorMessage("Please fill out the form")
         }
    }


    return (
        <div>
          
            <input
                placeholder="Expense Title"
                value={expenseTitle}
                onChange={e => setExpenseTitle(e.target.value)}
            />
              <input
                placeholder="Expense Value"
                value={expenseValue}
                onChange={e => setExpenseValue(e.target.value)}
            />
              <input
                placeholder="Expense Due Date"
                value={expenseDue}
                onChange={e => setExpenseDue(e.target.value)}
            />
            <button onClick={createExpense}>Create Expense</button>
            {isCreated && <Redirect to="/" />}
            {errorMessage}
        </div>
    )
}


export default CreateExpense 