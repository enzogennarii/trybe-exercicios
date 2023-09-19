interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string,
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {
    this.myNumber = myNumber;
  }

  myFunc(myParam: number): string {
    return `${this.myNumber + myParam}`
  }
}

const obj = new MyClass(7)
console.log(obj.myNumber)
console.log(obj.myFunc(3))
