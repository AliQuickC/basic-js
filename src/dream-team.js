const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if ( !Array.isArray(members) ) { return false; } // if the input parameter is not an array
  
  return members.map( (item,i,arr) => {
    if (typeof(item) !== "string") { return ''} // if Name is not a string
    if(item[0] != ' ') {                        // the first character is not a space
      return item[0].toUpperCase()  
    } 
    else { 
      let name = item.split("") 
      for (let i = 0; i < name.length; i++) { // looking for the first character of a string that is not a space
        if(name[i] != ' ') {          
          return name[i].toUpperCase() }
      }
    }
  } ).sort().join("");

};
