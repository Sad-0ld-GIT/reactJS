function Numbers() {
    function doubleIT(num) {
        let num2 = num * 2
        return num2
    }
    let numbers = [2,4,6,8]
    let numbers2 = numbers.map(doubleIT)
    return (
        <>
            {numbers}
            <br/>
            {numbers2}
        </>
    )
}   

export default Numbers;