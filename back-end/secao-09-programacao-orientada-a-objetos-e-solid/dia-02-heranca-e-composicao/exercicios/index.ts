import randomString from 'crypto-random-string';

// Utils
function isMinLength(str: string, minLength: number) {
  return str.length >= minLength;
}

function isValidDate(date: Date) {
  const currDate = new Date();
  const millisecondsYear = 31557600000;
  const difference: number = Math.floor((currDate.getTime() - date.getTime()) / millisecondsYear);
  return date < currDate && difference < 120;
}

// Exercício 1
class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateDate(birthDate);
    this._name = name;
    this._birthDate = birthDate;
  }

  // getters
  public get name() { return this._name }
  public get birthDate() { return this._birthDate }

  // setters
  public set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  public set birthDate(date: Date) {
    this.validateDate(date);
    this._birthDate = date;
  }

  // validators
  public validateName(name: string) {
    if (!isMinLength(name, 3)) {
      throw new Error('O nome precisa ter no mínimo 3 caracteres.');
    }
  }

  public validateDate(date: Date) {
    if (isValidDate(date)) {
      throw new Error('Data inválida.');
    }
  }
}

// Exercício 2
class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment(16);
  }

  // getters
  public get enrollment() { return this._enrollment }
  public get examsGrades() { return this._examsGrades }
  public get assignmentsGrades() { return this._assignmentsGrades }

  // setters
  public set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
    this._enrollment = enrollment;
  }

  public set examsGrades(grades: number[]) {
    this.validateExamGrades(grades);
    this._examsGrades = grades;
  }

  public set assignmentsGrades(grades: number[]) {
    this.validateAssignmentsGrades(grades);
    this._assignmentsGrades = grades;
  }

  // métodos
  public generateEnrollment(length: number) {
    const string = randomString({ length, type: 'alphanumeric' })
    return string;
  }

  public sumGrades(): number {
    const total = [...this._examsGrades, ...this.assignmentsGrades]
      .reduce((acc, curr) => acc + curr, 0);
    return total;
  }

  public sumAverageGrade(): number {
    const arr = [...this._examsGrades, ...this._assignmentsGrades];
    return this.sumGrades() / arr.length;
  }

  // Validators
  public validateEnrollment(enrollment: string): void {
    if (enrollment.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }
  }

  public validateExamGrades(grades: number[]): void {
    if (grades.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    }
  }

  public validateAssignmentsGrades(grades: number[]): void {
    if (grades.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    }
  }
}

// Exercício 3
interface Employee {
  registration: string,
  salary: number,
  admissionDate: Date,
  generateRegistration(): string,
}

// Exercício 4
class Subject {
  private _name: string;

  constructor(name: string) {
    this.validateName(name);
    this._name = name;
  }

  // getters
  public get name() { return this._name }

  // setters
  public set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  // validators
  public validateName(name: string) {
    if (!isMinLength(name, 3)) {
      throw new Error('O nome precisa ter no mínimo 3 caracteres.');
    }
  }
}

class Teacher extends Person implements Employee {
  private _subject: string;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date = new Date();

  constructor(name: string, birthDate: Date, salary: number, subject: string) {
    super(name, birthDate);
    this._salary = salary;
    this._subject = subject;
    this._registration = this.generateRegistration();
  }

  // getters
  public get subject() { return this._subject }
  public get registration() { return this._registration }
  public get salary() { return this._salary }
  public get admissionDate() { return this._admissionDate }

  // setters
  public set subject(subject: string) {
    this._subject = subject;
  }

  public set registration(registration: string) {
    this._registration = registration;
  }

  public set salary(salary: number) {
    this.validateSalary(salary);
    this._salary = salary;
  }

  public set admissionDate(date: Date) {
    this.validateDate(date);
    this._admissionDate = date;
  }

  // validators
  public validateSalary(salary: number) {
    if (salary < 0) {
      throw new Error('O salário não pode ser negativo.');
    }
  }

  public generateRegistration(): string {
    const string = randomString({ length: 16, type: 'numeric' });
    return string;
  }
}

// Testes
const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(history);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');

// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
// const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

// console.log(marta);
// console.log(joao);
// console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
