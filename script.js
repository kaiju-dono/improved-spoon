const myObject = {
    name: "Zaphod",
    ship: "Heart of Gold"
}

const Mike = {
    firstName: "Mike",
    lastName: "Hill",
    email: "some@email.com"
}

class Student {
    constructor(firstName, lastName, classYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.classYear = classYear;
    }
    graduate() {
        let date = new Date();
        console.log(this.classYear + 2);
    }
}

let manny = new Student("Manny", "Muro", 2022);
let chase = new Student("Chase", "Mahan", 2022);


manny.graduate();
// console.log(manny);



