import {useState} from 'react';

function DataFromWeb () {
    let [records, setRecords]=useState([])

    function getDataFromResponse(data) {
        setRecords(data)
    }

    function processResponse(response) {
        let jsonPromise = response.json()
        
        jsonPromise.then(getDataFromResponse)
    }

    let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')

    responsePromise.then(processResponse)

    return (
        <>
            <h1>Hello Web</h1>
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

export default DataFromWeb;