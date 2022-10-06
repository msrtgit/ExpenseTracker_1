import './ExpenseForm.css';
import { useState } from 'react';


const ExpsenseForm = (props) =>{


    const  [enteredTitle, SetEnteredTitle ] = useState('');
    const  [enteredAmount, SetEnteredAmount ] = useState('');
    const  [enteredDate , SetEnteredDate] = useState('');
    
    const titleChangeHandler = (event) =>{
        SetEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        SetEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        SetEnteredDate(event.target.value);
    }


const submitHandler = (event) =>{
event.preventDefault();
const expenseData = {
    title : enteredTitle,
    amount :enteredAmount,
    date :  new Date(enteredDate)
}

//console.log(expenseData);
props.onSaveExpenseData(expenseData);
SetEnteredTitle('');
SetEnteredAmount('');
SetEnteredDate('');
}


    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'> 
                        <label>Title</label>
                        <input type= "text" onChange={titleChangeHandler} value ={enteredTitle} />
                </div> 
                <div className='new-expense__control'> 
                        <label>Amount</label>
                        <input type= "number" min= "0.01" step ="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div> 
                <div className='new-expense__control'> 
                        <label>Date</label>
                        <input type= "date" min= "2019-01-01" max ="2022-12-31"  onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpsenseForm;





 // ////////// 2nd Approach

// single state slice instead  of mutlile states  But this Approach is Wrong because we are copy pasting userInput that is we are depending on previous state values . we may have a chance to get outdated Values by following this Approach , i.e React Shedules Updates it doesnt perform them instantly and therefore theriotically  if you shedule a lot of  state updates at the sametime  you could be depending on an outdated State or incorrect State Snapshot if we use this approach. if we use PrevState based Method , react will Gaurentee that the state snapshot gives you here is  will always be the Latest State snapshot  keeping all state Shedule State Updates in mind. i.e whenever State updates that depends on the previous State 3rd Approach

    // const  [userInput, SetUserInput ] = useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:'',

    // });

    
    // const titleChangeHandler = (event) =>{
    //     SetUserInput(
    //         {
    //             ...userInput,
    //             enteredTitle : event.target.value,
    //         }
    //     );
    // }

    // const amountChangeHandler = (event) =>{
    //     SetUserInput(
    //         {
    //             ...userInput,
    //             enteredAmount : event.target.value,
    //         }
    //     );
    // }
    // const dateChangeHandler = (event) =>{
    //     SetUserInput(
    //         {
    //             ...userInput,
    //             enteredDate : event.target.value,
    //         }
    //     );
    // }


    /////////////   3rd Approach  Based on Previous State Method 

//    const dateChangeHandler = (event) =>{
//         SetUserInput(
//            (prevState) => {
//           return {  ...prevState,
//             enteredDate : event.target.value};
//         }
//         );
//     }