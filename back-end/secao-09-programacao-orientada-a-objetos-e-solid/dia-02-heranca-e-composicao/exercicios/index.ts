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

function randomString(length: number) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';

  for (let i = 0; i < length; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
  }

  return resultado;
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
    const string = randomString(length);
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
    const string = randomString(16);
    return string;
  }
}
