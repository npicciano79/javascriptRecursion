/**
 * Recursive solution to mergeSort program
 * @param {arr} arr:array of values to sort
 * @returns sorted array
 */
/*
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
*/

/**mergeSortSecond found using slice 
 * calculate middle of array as pivot
 * calculate left and right arrays 
 * pass pivot, left right arrays 
 */
const merge = (left,right)=>{
    const result=[]
    while (left.length && right.length){
        if (left[0]<right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return result.concat(left,right);



}


const mergeSortSecond=(arr)=>{
    if (arr.length<2){
        return arr
    }else{
        const middle=Math.floor(arr.length/2)
        const left=arr.slice(0,middle)
        const right=arr.slice(middle)
        
        return merge(mergeSortSecond(left),mergeSortSecond(right))
    }




}


const arr2=[11,3,4,2,9,10,1,5,15,8]
console.log(mergeSortSecond(arr2))
