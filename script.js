class Person {
    constructor(name, surname, age, gender) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
}

class MaleBaby extends Person {
    constructor(name, surname){
        super(name, surname, 0, "male");
    }
}

let baby = new MaleBaby("Ege", "Deneme");

console.log(baby);


function Human(firstName, lastName, age, gender){
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.gender = gender;
}

let baby2 = new Human("Beliz", "Deneme", 0, "female");

console.log(baby2);