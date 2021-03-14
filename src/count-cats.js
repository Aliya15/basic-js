const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matr) {
 const cat = "^^";
 let counter = 0;
 for (let i = 0; i < matr.length; i++) {
   for (let j = 0; j < matr[i].length; j++) {
    if (matr[i][j] === cat) {
      counter++
    } 
   }
 }
 return counter;
};
