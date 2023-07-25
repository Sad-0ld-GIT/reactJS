import {useState} from 'react';

function Events() {

    let [x, changeData]=useState(100)
    let [y, assignData]=useState(21)

    function doSomething1() {
        changeData(++x)
    }
    
    function doSomething2() {
        assignData(++y)
    }
    return (
        <>
            <input type="button" value="Click1" onClick={doSomething1}/>
            <input type="button" value="Click2" onClick={doSomething2}/>
            <h2>{x}</h2>
            <h2>{y}</h2>
        </>
    )
}

export default Events