// export {}
// let message = 'Welcome back.';
// console.log(message);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let x = 10;
// const y = 20;
// // let sum;
// // const title; //this is not ok
// let isBeginner:  boolean = true;
// let total: number = 0;
// // let name: string = 'Cindy';
// let sentence: string = `My name is ${name}
// I am a beginner in Typescript`;
// console.log(sentence);
// let n: null = null;
// let u: undefined = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
// //either way is fine. it is a matter of preference
// let list1: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3];
// //order has to match [22, 'Chris'] will not work
// let person1: [string,number] = ['Chris', 22];
// enum Color {Red = 5, Green, Blue};
// let c: Color = Color.Green;
// console.log(c);
// let randomValue: any = 10;
// randomValue = true;
// randomValue = 'Cindy';
// let myVariable: unknown = 10;
// function hasName(obj: any): obj is { name: string } {
//   return !!obj &&
//     typeof obj === "object" &&
//     "name" is obj
// } 
// if (hasName(myVariable)) {
//   console.log(myVariable.name);
// }
// myVariable();
// // myVariable.toUpperCase();
// (myVariable as string).toUpperCase():
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// add(5, '10' )
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
