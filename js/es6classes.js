class Employee {
    constructor(givenName, givenExp, givenDivision) {
        this.name = givenName;
        this.experience = givenExp;
        this.division = givenDivision;
    }

    slogan() {
        return `This is ${this.name} and he is Front end developer`;
    }

    joiningYear() {
        return 2020 - this.experience;
    }

    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExp, givenDivision, language, gitHub) {
        super(givenName, givenExp, givenDivision);
        this.language = language;
        this.gitHub = gitHub;
    }

    favoritelanguage() {
        if (this.language == 'python') {
            return 'python';
        }
        else {
            return 'Javascript';
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

let rohan = new Programmer('Rohan', 2, 'lays', 'java', "rohan420");
console.log(rohan);
console.log(rohan.favoritelanguage());
console.log(Programmer.multiply(5, 5))

// let harry = new Employee("vrushabh", 4, "division");
// console.log(harry.slogan());
// console.log(harry.joiningYear());
// console.log(Employee.add(34,46));