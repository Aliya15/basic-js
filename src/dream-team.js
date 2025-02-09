import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(namesOfMembers) {
  if (!namesOfMembers || !Array.isArray(namesOfMembers)) {
    return false
}
let firstLetters = namesOfMembers.map((item) => {
    if (typeof item === "string") {
        return item.trim()[0].toUpperCase()
    }
    return 0
}).filter((item) => typeof item === "string");
firstLetters.sort();
return firstLetters.join("")
}
