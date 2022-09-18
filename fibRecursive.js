/**Javascript Fibonacci sequence recursive 
 * 
 * 
 * 
 */
const fib=(num,memo={})=>{
    if (num in memo) return memo[num]
    if (num<2) {
        return num  
    }
    else{
        memo[num]=fib(num-1)+fib(num-2)
        return memo[num]
    }
}

//main driver
let num=10
console.log(fib(num))