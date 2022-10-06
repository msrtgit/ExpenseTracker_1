import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card  from '../UI/Card';
import { useState } from 'react';

function ExpenseItem (props){
   
    // const [title,setTitle] = useState(props.title);
    
    // const clickHandler = () =>{
    //    // console.log("test");
    //     setTitle("updated!!!"); 
    // } 

    return(
        <li>
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date ={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
        </li>
    );
}
export default ExpenseItem;