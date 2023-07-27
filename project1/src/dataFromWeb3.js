import {useState} from 'react';

function DataFromWeb3 () {
    let [posts, setRecords]=useState([])
    // let[comments, setComments]=useState([])

    function getDataFromResponse(data) {
        setRecords(data)
    }

    function processResponse(response) {
        let jsonPromise = response.json()
        
        jsonPromise.then(getDataFromResponse)
    }

    let responsePromise = fetch('https://jsonplaceholder.typicode.com/posts')
    responsePromise.then(processResponse)

    function getComments(pid){
        let url="https://jsonplaceholder.typicode.com/posts/"+pid+"/comments"
        alert(url)    
        }

    return (
        <>
            <h1>Hello Web</h1>
            <table border="1">
                {
                posts.map( (rec) =>
                    <tr>
                        <td>{rec.title}</td>
                        <td><input type="button" value="Comments" onClick={()=>getComments(rec.id)}/></td>
                    </tr>
                )
                }
            </table>
        </>
    )
}

export default DataFromWeb3;