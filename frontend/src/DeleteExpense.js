import React from "react"
import axios from "axios"

const DeleteExpense = ({expenseId, onDelete}) => {

    function deleteExpense(){
        axios.delete(`http://localhost:3000/expenses/${expenseId}`)
            .then(onDelete)

        }
    
    return (
        <button onClick={deleteExpense}>X</button>
    )
}


export default DeleteExpense 