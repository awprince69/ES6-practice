class Parent {
    constructor() {
        this.parent = 'tapatap';
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.parent;
    }
}

const baby = new Child('Arnold');
console.log(baby.getFullName());