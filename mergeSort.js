/**
 * Recursive solution to mergeSort program
 * @param {arr} arr:array of values to sort
 * @returns sorted array
 */

const mergeSortFirst=(arr)=>{
    if (arr.length<2){
        return arr 
    }
    var pivot =arr[0]
    var less=[]
    var greater=[]

    for (var i=1;i<arr.length;i++){
        arr[i]<pivot ? less.push(arr[i]) : greater.push(arr[i])
    }
    return mergeSortFirst(less).concat(pivot,mergeSortFirst(greater))



}
const arr=[11,3,4,2,9,10,1,5,15]
var sorted=(mergeSortFirst(arr))
console.log(sorted)



const mergeSortSecond=(arr)=>{
    if (arr.length<2){
        return arr
    }
    



}


const arr2=[11,3,4,2,9,10,1,5,15]
console.log(mergeSortFirst(arr2))
