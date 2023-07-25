function Records() {
    let employees = [
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
    // function doSomething(rec) {
    //     return rec.name
    // }
    // function check(rec) {
    //     if (rec.dept==="IT") {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // let names1 = employees.map(doSomething)
    // let names2 = employees.filter(check)

    return (
        <><table border="1">
            <tr>
                <td><b>Name</b></td>
                <td><b>Dept</b></td>
                <td><b>Salary</b></td>
            </tr>
            {employees.map((records) => <tr>
                <td>{records.name}</td>
                <td>{records.dept}</td>
                <td>{records.salary}</td>
                </tr>) }
        </table>
        </>
    )   
}

export default Records