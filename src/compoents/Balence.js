import React, { useContext, useState } from 'react'

export default function Balence() {
   const [balance, seBalece] = useState(0)
   const[income ,setIncome]=useState(0);
   const[expence ,setexpence]=useState(0)
   const[text ,setText]=useState('')
   const[amout ,setAmount]= useState()
   const [thistory ,setThistory] = useState([ ]);


  

  
  const onSubmit=(e)=>{
      e.preventDefault();
      console.log('text',text)
      console.log('amount',amout)

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amout,
      }
      console.log("newTransaction", newTransaction)

    let newArr = [...thistory]
    newArr.push(newTransaction)
    setThistory(newArr)
    console.log(thistory,"thistory")

      setText("")
         

      let total = parseInt(amout)+income;
      setIncome(total)

        setAmount("")

      

  }
  const deleteTrans=(i)=>{
    const newList = thistory.filter((item) => item.id !== i.id);
    // let NList = newList.amout-(amout)
    setThistory(newList);
    let total = income - parseInt(i.amout)
    setIncome(total)


     }

    

    return (
        <>
        <div className="container">
            <h2>Expence Tracker</h2>
            <p> Total Balence {income}</p>
        </div>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
             <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
            <p className="money minus">{expence}</p>
        </div>
       
        </div>
        <div>
            <h2>Histrory</h2>
            {thistory.map((i)=>
                    <li key={i.id}><span><button onClick={() => deleteTrans(i)}>Delete</button></span>{i.text} {i.amout}</li>
                )
            }
        </div>
        <form onSubmit={onSubmit} >
        <div>
            <h2>
            Add New Transaction
               </h2>
            <label>text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text..." />
         </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={amout} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button >Submit</button>
        </form>

        </>
    )
}
