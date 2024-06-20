let friend = {
    name: "홍길동", age: 13
}

console.log(friend.age)

let students = [
    {name: "A", age: 12},
    {name: "B", age: 13},
    {name: "C", age: 10}
]

// for (let i = 0; i < students.length; i++){
//     console.log(students[i].age, students[i].name);
// }

for (let i = 0; i < students.length; i++){
    console.log(`${students[i].name}는 ${students[i].age}살입니다`);
}
