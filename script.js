function EmployeesOfAtakansCompany(firstName, lastname, gender) {
    this.userName = firstName;
    this.userSurname = lastname;
    this.gender = gender;
}


let person1 = new EmployeesOfAtakansCompany("Atakan", "Kaplan", "erkek");
let person2 = new EmployeesOfAtakansCompany("İrem", "Demirer", "kadın");
let person3 = new EmployeesOfAtakansCompany("Damla", "Koldaş", "kadın");

EmployeesOfAtakansCompany.prototype.printFullName = function() {
    console.log(this.userName + " " + this.userSurname);
}

person1.printFullName();