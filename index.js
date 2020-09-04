console.log('start Node js')
debugger;
var calculateMean = (numbers) => {
    let total = 0;
    debugger;
    numbers.forEach((item) => {
        total += item;
        console.log(`total = ${total}, number is ${item}`)
    })
    console.log(`Result = ${total}`)
}

calculateMean([1,2,3,4,5,6,7,8,9])