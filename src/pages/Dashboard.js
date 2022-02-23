import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-router-dom';


function Dashboard() {
    return(
        <div className="Box">
            <header>
            <h2 style={{color:'rgb(142, 137, 167)'}}>BOX 1</h2>
            <p style={{color:'rgb(142, 137, 167)'}}>Titanium based altoy</p>
            <br />
            <hr />
            <br />
            <br />
            <p>Box: <button id="ready" type="submit">1 ready</button> <button id="used" type="submit">1 used</button></p>
            <br />
            <br />
            <p>Batch: <button id="none" type="submit">none</button></p>
            <br />
            <br />
            <p>Continer: <button id="ready" type="submit">1 ready</button></p>
            <br />
            <br />
        <Link to='./box1' > <button type="submit" id="back-box1"> go to box1 </button> </Link>
        
        </header>
    </div>
    );
    
}


export default Dashboard;



{/* <header>
<h1>BOX 1</h1>
    <form id="list1">
        <button type="submit" ><ArrowDownwardIcon /> Receive powder  </button>
    </form>
    <form id="list2">
        <button type="submit"><ArrowUpwardIcon />Send powder to</button>
    </form>
    <form id="list3">
        <button type="submit"><DeleteIcon /> Send to trash</button>
    </form>
    <Link to="App.js">
        <button id="back" type="submit">Back to screen</button>
    </Link> 
</header> */}
