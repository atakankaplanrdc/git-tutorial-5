function greeting (text) {

    console.log(text + "Merhaba, benim adım " + this.firstName + ". Soyadım " + this.lastName + ". " + this.age + " yaşındayım.");

}

let person1 = {
    firstName: "Atakan",
    lastName: "Kaplan",
    age: 24,
    gender: "erkek"
}

let person2 = {
    firstName: "İrem",
    lastName: "Demirer",
    age: 24,
    gender: "kadın"
}

let person3 = {
    firstName: "Merve",
    lastName: "Güleç",
    age: 25,
    gender: "kadın"
}

let person4 = {
    firstName: "Faruk",
    lastName: "Berooğlu",
    age: 24,
    gender: "erkek"
}

// let greetingForPerson1 = greeting.bind(person1);
// let greetingForPerson2 = greeting.bind(person2);
// let greetingForPerson3 = greeting.bind(person3);
// let greetingForPerson4 = greeting.bind(person4);

greeting.call(person4, "Hello this is an intro sentence. ");