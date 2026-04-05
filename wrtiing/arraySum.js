
function sumArray(arr) {

    let sum = 0;

    for(i=0; i<arr.length; i++){
        sum =sum + arr[i];
        
    }
    return sum;
}

let arr = sumArray([1, 2, 3]);
console.log(arr);