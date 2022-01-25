class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}
let person = new Person('john', 'a@c.com');
let teach = new Teacher('stephen', 'a@b.com', 'biology');
console.log(`Teacher: ${teach.name} (${teach.email}), teaches ${teach.subject}`);