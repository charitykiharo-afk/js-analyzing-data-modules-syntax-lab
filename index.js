function mergeUsernames(...args) {
    const allUsers = [];
    for (const usersArray of args) {
        allUsers.push(...usersArray);
    }
    return allUsers;
}

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (const usersArray of args) {
        combinedObject.users.push(...usersArray);
    }

    combinedObject.merge_date = new Date().toLocaleDateString();

    return combinedObject;
}

const group1 = ["Lincon", "Ariel"];
const group2 = ["Alvin", "Charity"];
const group3 = ["Kerry"];

console.log(mergeUsernames(group1, group2, group3));
console.log(combineUsers(group1, group2, group3));

module.exports = { mergeUsernames, combineUsers };
