// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

 //console.log(person.fullName()); // John Doe

// //prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName= function () {
    //     return this.firstName + ' ' + this.lastName;
    // }
}

Person.prototype = function () {
    return this.firstName + ' ' + this.lastName;
};

const person1 = new Person('John', 'Doe');
//console.log(person1.fullName()); // John Doe


//Inheritance and Prototypal Chain:
function Student(firstName, lastName, school) {
    Person.call(this, firstName, lastName);
    this.school = school;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

// Inherit from Person's prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.constructor = Student;

Student.prototype.getSchool = function () {
    return this.school;
};

const student = new Student('Alice', 'Smith', 'ABC School');
// console.log(student.fullName()); // Alice Smith
// console.log(student.getSchool()); // ABC School
// console.log(student.school); // ABC School

// // // ES6 Classes from 2015
class Person1 {
    firstName = "";
    lastName = "";
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

     fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student1 extends Person1 {
    constructor(firstName, lastName, school) {
        //super(firstName, lastName);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

const student1 = new Student1();
//const student1 = new Student1('Alice', 'Smith', 'ABC School');
console.log(student1.fullName()); // Alice Smith
console.log(student1.getSchool()); // ABC School

