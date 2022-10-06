import React from 'react';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  
  return (
    <Card className="expenses">
       <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
       />
       <ExpensesChart expense={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;


// Without indicator Text


// const Expenses = (props) => {
  
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = selectedYear => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });
//   // console.log(filteredExpenses);

//   return (
//     <Card className="expenses">
     
//        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//       {filteredExpenses.map(
//         expense =>
//         <ExpenseItem 
//           key ={expense.id}  
//           title={expense.title}  
//           amount={expense.amount}
//           date={expense.date} 
//           />)}
//     </Card>
//   );
// }




//  without Filter


// const Expenses = (props) => {
  
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = selectedYear => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <Card className="expenses">
//        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//       {props.items.map(
//         expense =>
//         <ExpenseItem 
//           key ={expense.id}  
//           title={expense.title}  
//           amount={expense.amount}
//           date={expense.date} 
//           />)}
//     </Card>
//   );
// }




// Static Data


 /* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */

