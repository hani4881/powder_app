import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-router-dom';



function Box1() {
    return(
        <div className="App">
    <header>
        <h1>BOX 1</h1>
        <form id="list1">
            <button type="submit"> <ArrowDownwardIcon /> Receive powder  </button>
        </form>
        <form id="list2">
            <button type="submit"> <ArrowUpwardIcon />Send powder to</button>
        </form>
        <form id="list3">
            <button type="submit"> <DeleteIcon /> Send to trash</button>
        </form>
        <Link to="App.js">
            <button id="back" type="submit">Back to screen</button>
        </Link> 
    </header>
    </div>
    );
    
}


export default Box1;