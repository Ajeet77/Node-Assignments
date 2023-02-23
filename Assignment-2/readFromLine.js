const readLine = require('readline')
const input = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
input.question('Please Enter Your Name: ', (name)=>{
    console.log(`Hello ${name}`);
    input.close();
})
