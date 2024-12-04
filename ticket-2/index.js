/* <!-- 
  Syntax errors/ 
  in the .js file/ 
  IDE will underline issues /
  manual test after each one 

-->
*/


function extractInitialsFromFullName(fullName) {
/** Assumes that each name within the full name is separated by a "space" that can be used as a separator/delimiter.  */
const names = fullName.split(" ");
let initials = "";

for (let i = 0; i < names.length; i++) {
    const currentName = names[i];    
    const currentInitial = currentName.at(0);
    initials += currentInitial;
}

return initials;
}

console.log(extractInitialsFromFullName("Abe Maxwell"))
console.log(extractInitialsFromFullName("Martin Boxer Harris"))
console.log(extractInitialsFromFullName("Felicity Rita Sarah Jones"))
console.log(extractInitialsFromFullName("Mary Petunia"));
