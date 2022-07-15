const fs = require ('fs');
let user = JSON.parse(fs.readFileSync('task2.json'));

function newArray () {
    let newUsers = [];
    user.forEach(element => {
        if (!newUsers.includes(JSON.stringify(element))) newUsers.push(JSON.stringify(element));
       
    });
    return newUsers.map(element => JSON.parse(element));
    
};
console.log(newArray());