const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

}
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);

// console.log(normalPerson.salary);

const heroPerson={
    firstName: 'hero',
    lastName: 'balam',
    salary: 25000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
// heroChargeBill(5000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson,10000);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[20000]);
console.log(heroPerson.salary);