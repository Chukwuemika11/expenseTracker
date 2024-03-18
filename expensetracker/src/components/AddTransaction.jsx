import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const {addTransaction} = useContext(GlobalContext);    

    function usersText(event){
      setText(event.target.value);   
    }

    function usersAmount(event){
        setAmount(event.target.value);   
      }

      function onSubmit(event){
       event.preventDefault();

       const newTransaction = {
        id : Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
       }
       addTransaction(newTransaction);
      }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input onChange={usersText} value={text} type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input onChange={usersAmount} value={amount} type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
