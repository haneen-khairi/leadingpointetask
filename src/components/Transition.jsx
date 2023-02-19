import React from 'react'
import '../styles/transition.css'
import icon from '../image/Icon.png'
function Transition() {
    const data = [
        { TransactionsID: "962296152", Name: "Sherman Blankenship", Date: "08 Jan, 2022",Status :"Pending",Amount : "   $217.90",color:"#2B825C"},
      { TransactionsID: "829892537", Name: "Claudio Barrera", Date: "08 Jan, 2022",Status :"Completed",Amount : "   $329.90",color:"red"},
      { TransactionsID: "741560657", Name: "Clifton Daniel", Date: "06 Jan, 2022",Status :"Pending",Amount : "- $549.90",color:"#2B825C"},
      { TransactionsID: "529040347", Name: "Curt Boyer", Date: "03 Jan, 2022",Status :"Completed",Amount : "- $238.90",color:"red"},
      { TransactionsID: "398078341", Name: "Jeff Proctor", Date: "08 Jan, 2022",Status :"Completed",Amount : "- $283.90",color:"#2B825C"},
      { TransactionsID: "197401837", Name: "Rodger Fritz", Date: "08 Jan, 2022",Status :"Completed",Amount : "$217.90",color:"red"},

      ]
  return (
    <div className='mainContent'> 
      <div className="titleName padding30x10 displayFlexSpace">
      <div>
        <h1>Recent Transactions</h1>
        <p>Keep track your financial plan</p>
      </div>
      <div className='searchBar '>
        <input type="search" placeholder='Search ...' className='searchInput'/>
        <button className='btnsearch'><img src={icon} alt="" /></button>
      </div>
      </div>
      <div>  
      <table>
        <thead>
          <th>Transactions ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Status</th>
          <th>Amount</th>

        </thead>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.TransactionsID}</td>
              <td>{val.Name}</td>
              <td>{val.Date}</td>
              <td>{val.Status}</td>
              <td style={{color:val.color}}>{val.Amount}</td>

            </tr>
          )
        })}
      </table>
      <div>
        <button className='downloadexcel'>Download the Excel File</button>
      </div>
     
     </div>
     <footer className='foot'>
     Items per page:
</footer>      
    </div>
  )
}

export default Transition