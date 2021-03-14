const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(namesOfMembers) {
    if (!namesOfMembers || !Array.isArray(namesOfMembers)) {
        return false
    }
    let firstLetters = namesOfMembers.map((item) => {
        if (typeof item === "string") {
            return item.trim()[0]
        }
        return 0
    }).filter((item) => typeof item === "string");
    firstLetters.sort();
    return firstLetters.join("").toUpperCase()
}