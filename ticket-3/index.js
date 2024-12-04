
//turn number into a sting
//iterate through string 
// add to count 
//return count


function countNumberOfNinesInNumber(number) {
  
  //turn number type into string type 
  let stringfied = number.toString();


  let count = 0;

  for (let i = 0; i < stringfied.length; i++) {
    
    const digit = stringfied[i];
    
    if ("9" === digit) {             
      count++;
    }
  }

  return count;
}


console.log(countNumberOfNinesInNumber(99.999));
console.log(countNumberOfNinesInNumber(9));
console.log(countNumberOfNinesInNumber(989));
console.log(countNumberOfNinesInNumber(1115.1257846));
