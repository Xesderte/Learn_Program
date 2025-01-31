import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseLIst() {

    const {state} = useBudget()

    
    const filterExpenses = state.currentCategory ? state.expenses.filter( expense => expense.category === state.currentCategory) : state.expenses
    
    const isEmptv = useMemo( () => filterExpenses.length === 0, [state.expenses])

    return(
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmptv ? <p className="text-gray-600 text-2xl font-bold">No hay Gasto</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5"> Listado de Gastos </p>
                    {filterExpenses.map( expense => (
                        <ExpenseDetails
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
        </div>
    )

}
