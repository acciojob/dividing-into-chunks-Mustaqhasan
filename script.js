const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let key = n;
let start=0;

for (let i = start; i < arr.length; i++) {
//   firstIndex=i;
    let sum = 0;
  for(let j=i;j<arr.length;j++){
    sum+=arr[j];
    if(sum==key){
        console.log(arr.slice(i,j+1));
        start=j+1;
        break;
    }else if(sum>key){
        console.log(arr.slice(i,j));
        start=j;
        break;
    }else if(sum<key && i==arr.length-1){
        console.log(arr.slice(i,j+1));
        break;
    }
  }
	
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
