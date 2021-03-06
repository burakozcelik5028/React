import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

    const [title, setTittle] = useState(props.title);
    
    const clickHandler = () => {
        setTittle("Updated!!!");
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Tittle</button>
        </Card>
    );
}

export default ExpenseItem;