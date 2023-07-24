function Addition() {
    let num1 = 136
    let num2 = 247
    let sum = num1 + num2
    return (
        <table>
            <tr>
                <td>Number 1</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>Number 2</td>
                <td>{num2}</td>
            </tr>
            <tr>
                <td>Result</td>
                <td>{sum}</td>
            </tr>
        </table>
    )
}

export default Addition;