// function foo(...rest) {
//   console.log(rest);
// }

// foo(...[1, 2, 3]);

// var arr3 = [1, 4];
// var arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);

// arr3.splice(1, 0, ...arr4);
// console.log(arr3);

// const origin = [1, 2];
// const copy = [...origin];

// console.log(copy);
// console.log(copy === origin);

// const obj = { x: 1, y: 2 };
// const copy = { ...obj };
// console.log(copy);
// console.log(obj === copy);

// const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
// console.log(merged);

// const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, x: 3 });
// console.log(merged);

// const merged2 = { ...{ x: 1, y: 2 }, ...{ y: 10, x: 3 } };
// console.log(merged2);

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);

// const [a, b] = [1, 2];
// console.log(a, b);
// const [c, d] = [1];
// console.log(c, d);

// const user = { firstName: "Minji", lastName: "Choi" };
// const firstName = user.firstName;
// const lastName = user.lastName;
// console.log(firstName, lastName);

// const user = { firstName: "Minji", lastName: "Choi" };
// const { firstName, lastName } = user;
// console.log(firstName, lastName);

// function printTodo({ content, completed }) {
//   console.log(
//     `할일 ${content}는 ${completed ? "완료" : "비완료"} 상태입니다. `
//   );
// }
// printTodo({ id: 1, content: "HTML", completed: false });
// printTodo({ id: 2, content: "HTML", completed: true });

// const user = {
//   name: "Lee",
//   address: {
//     zipCode: "03068",
//     city: "Seoul",
//   },
// };

// const {
//   address: { city },
// } = user;
// console.log(city);
// console.log(user);

// function Person({ userName, userAge }) {
//   console.log(`이름 : ${userName}, 나이 : ${userAge}`);
// }
// Person({ userName: "규용", userAge: 20 });

const Person = { Name: "규용", Age: 20 };
const { Name: userName, Age: userAge } = Person;
console.log(`이름 : ${userName}, 나이 : ${userAge}`);
