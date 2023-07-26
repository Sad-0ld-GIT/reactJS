import {useState} from 'react';

function EmployeesData() {
    let records = [
        {
            "name": "phil",
            "dept": "IT",
            "salary": 3000
        },
        {
            "name": "matt",
            "dept": "HR",
            "salary": 4500
        },
        {
            "name": "brad",
            "dept": "IT",
            "salary": 5000
        }
    ]

    // function addEmployee() {
    //     records.push(
    //         {
    //             "name": "neil",
    //             "dept": "Sales",
    //             "salary": 4000
    //         }
    //     )
    //     setEmployees(records)
    //     console.log(records)
    // }

    function addEmployee() {
        setEmployees( (oldRecords) => {let newRecord = 
            {
            "name": "neil",
            "dept": "Sales",
             "salary": 4000
            }
            return [...oldRecords, newRecord]
        })
    }

    let [employees, setEmployees]=useState(records)

    return (
        <>
        <input type="button" value="Add employee" onClick={addEmployee}/>
        <table border="1">
            <tr>
                <td><b>Name</b></td>
                <td><b>Dept</b></td>
                <td><b>Salary</b></td>
            </tr>
            {employees.map((rec) => <tr>
                <td>{rec.name}</td>
                <td>{rec.dept}</td>
                <td>{rec.salary}</td>
                </tr>) }
        </table>
        </>
    )   
}

export default EmployeesData