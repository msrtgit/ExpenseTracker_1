import './NewExpense.css';
import "../NewExpense/ExpenseForm";
import ExpsenseForm from '../NewExpense/ExpenseForm';
const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpsneseData) =>{
        const expenseData ={
            ...enteredExpsneseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        //console.log(expenseData);
    }
    
    return (
        <div className="new-expense">
            <ExpsenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;