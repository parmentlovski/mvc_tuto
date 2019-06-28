require('../scss/main.scss'); // on dit a js d'importer le sass

class Person {
    constructor(name) {
        this.name = name;
    }

    walk(){
        console.log(this.name + ' is walking');
    }
}

let bob = new Person('bob');