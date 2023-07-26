import {useState} from 'react';

function DataFromWeb2 () {
    let [records, setRecords]=useState([])

    function getDataFromResponse(data) {
        setRecords(data)
    }

    function processResponse(response) {
        let jsonPromise = response.json()
        jsonPromise.then(getDataFromResponse)
    }

    function clickingButton() {
        let post = document.getElementById("t1").value
        console.log(post)
        let url = 'https://jsonplaceholder.typicode.com/posts/'+post+'/comments'
        console.log(url)
        let responsePromise = fetch(url)
        responsePromise.then(processResponse)
    }
    
    return (
        <>
            <h1>Hello Web</h1>
            <input type="text" id="t1"/>
            <input type="button" value="show comments" id="btn1" onClick={clickingButton}/>
            <table border="1">
            <tr>
                            <td><b>Name</b></td>
                            <td><b>Email</b></td>
                            <td><b>Body</b></td>
                        </tr>
                {
                    records.map( (rec) =>
                        <tr>
                            <td>{rec.name}</td>
                            <td>{rec.email}</td>
                            <td>{rec.body}</td>
                        </tr>
                        
                        
                    )
                }
            </table>
        </>
    )
}

export default DataFromWeb2;