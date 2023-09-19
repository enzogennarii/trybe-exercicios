class Superclass {
  constructor(public isSuper: boolean = true) {
    this.isSuper = isSuper;
  }

  sayHello(): void { console.log('Olá, mundo!') }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false
  }
}

function myFunc(a: Superclass) {
  a.sayHello()
  console.log(a.isSuper ? 'Super!' : 'Sub!')
}

const superClassObj = new Superclass()
const subClassObj = new Subclass()
myFunc(superClassObj)
myFunc(subClassObj)
