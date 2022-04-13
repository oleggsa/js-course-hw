const user = {
    name: 'John',
    surname: 'Smith'
}

user.name = 'Pete'
delete user.name
console.log(user)

// TASK 2 - MOJNO

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(salaries){
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}