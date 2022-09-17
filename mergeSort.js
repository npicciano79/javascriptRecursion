//recursive mergesort function in js
/*
const mergesort=(arr)=>{
   if (arr.length<=1){
    return arr
   }
   var pivot=arr[0]

   var left=[]
   var right=[]

   for (var i=1;i<arr.length;i++){
    arr[i]<pivot ? left.push(arr[i]) : right.push(arr[i])
   
   }
   return mergesort(left).concat(pivot,mergesort(right))  
}
*/

const mergesort=(arr)=>{
    if (arr.length<2){
        return arr 
    }
    var pivot =arr[0]
    var less=[]
    var greater=[]

    for (var i=1;i<arr.length;i++){
        arr[i]<pivot ? less.push(arr[i]) : greater.push(arr[i])
    }
    return mergesort(less).concat(pivot,mergesort(greater))



}


const arr=[11,3,4,2,9,10,1,5,15]
var sorted=(mergesort(arr))
console.log(sorted)