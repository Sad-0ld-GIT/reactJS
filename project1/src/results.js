function Results(props) {
    let phy = parseInt(props.phy)
    let chem = parseInt(props.chem)
    let math = parseInt(props.math)
    let total = phy + chem + math
    let per = (total/300*100).toFixed(2)
    let result =""
    if (per >= 90) {
        result = "A*"
    } else if (per >= 80 && per < 90) {
        result = "A"
    } else if (per >= 70 && per < 80) {
        result = "B"
    } else if (per >= 60 && per < 70) {
        result = "C"
    } else {
        result = "F"
    }
    return (
        <>
            <h2>Results of {props.name}</h2>
            <table border="1">
                <tr>
                    <td>Physics: </td>
                    <td><b>{phy}</b></td>
                </tr>
                <tr>
                    <td>Chemistry: </td>
                    <td><b>{chem}</b></td>
                </tr>
                <tr>
                    <td>Maths: </td>
                    <td><b>{math}</b></td>
                </tr>
                <tr>
                    <td>Total: </td>
                    <td><b>{total}</b></td>
                </tr>
                <tr>
                    <td>Percent: </td>
                    <td><b>{per}</b></td>
                </tr>
                <tr>
                    <td>Result: </td>
                    <td><b>{result}</b></td>
                </tr>
            </table>
        </>
    )
}

export default Results;