// Code your solution here
/*`findMatching`- This function takes an array of drivers' names and a `string`
  as arguments, and returns the matching list of drivers. The function should be
  case insensitive.
*/

function findMatching(array,name){
  let result = array.filter(e => e === name);
 //console.log(result);
  let result2 = array.filter(e => e.toUpperCase() === name.toUpperCase());
  console.log(result2);
 // console.log(result2);
  if(result2 !== undefined){
      return result2
  } else if (result !== undefined) {
    return result;
} 
}

/* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
  as arguments for querying the array, and returns all drivers whose names begin
  with the provided letters.
*/
function fuzzyMatch(array,string){ 
   return array.filter(e => e.startsWith(string));
}

/* `matchName` - This function takes an array of `driver` objects and a `string`
  as arguments. Each `driver` object has two properties: `name` and `hometown`.
  The function should return each element whose `name` property matches the
  provided `string` argument.
  */
 function matchName(array,string){
    return array.filter(e => e["name"]=== string);
 };

