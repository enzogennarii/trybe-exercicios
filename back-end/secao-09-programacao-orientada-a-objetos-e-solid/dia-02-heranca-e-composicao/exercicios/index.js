"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_random_string_1 = require("crypto-random-string");
// const randomString = require('crypto-random-string');
// Utils
function isMinLength(str, minLength) {
    return str.length >= minLength;
}
function isValidDate(date) {
    var currDate = new Date();
    var millisecondsYear = 31557600000;
    var difference = Math.floor((currDate.getTime() - date.getTime()) / millisecondsYear);
    return date < currDate && difference < 120;
}
// Exercício 1
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.validateName(name);
        this.validateDate(birthDate);
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        // getters
        get: function () { return this._name; },
        // setters
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (date) {
            this.validateDate(date);
            this._birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    // validators
    Person.prototype.validateName = function (name) {
        if (!isMinLength(name, 3)) {
            throw new Error('O nome precisa ter no mínimo 3 caracteres.');
        }
    };
    Person.prototype.validateDate = function (date) {
        if (isValidDate(date)) {
            throw new Error('Data inválida.');
        }
    };
    return Person;
}());
// Exercício 2
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._examsGrades = [];
        _this._assignmentsGrades = [];
        _this._enrollment = _this.generateEnrollment(16);
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        // getters
        get: function () { return this._enrollment; },
        // setters
        set: function (enrollment) {
            this.validateEnrollment(enrollment);
            this._enrollment = enrollment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () { return this._examsGrades; },
        set: function (grades) {
            this.validateExamGrades(grades);
            this._examsGrades = grades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () { return this._assignmentsGrades; },
        set: function (grades) {
            this.validateAssignmentsGrades(grades);
            this._assignmentsGrades = grades;
        },
        enumerable: false,
        configurable: true
    });
    // métodos
    Student.prototype.generateEnrollment = function (length) {
        var string = (0, crypto_random_string_1.default)({ length: length, type: 'alphanumeric' });
        return string;
    };
    Student.prototype.sumGrades = function () {
        var total = __spreadArray(__spreadArray([], this._examsGrades, true), this.assignmentsGrades, true).reduce(function (acc, curr) { return acc + curr; }, 0);
        return total;
    };
    Student.prototype.sumAverageGrade = function () {
        var arr = __spreadArray(__spreadArray([], this._examsGrades, true), this._assignmentsGrades, true);
        return this.sumGrades() / arr.length;
    };
    // Validators
    Student.prototype.validateEnrollment = function (enrollment) {
        if (enrollment.length < 16) {
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
        }
    };
    Student.prototype.validateExamGrades = function (grades) {
        if (grades.length > 4) {
            throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
        }
    };
    Student.prototype.validateAssignmentsGrades = function (grades) {
        if (grades.length > 2) {
            throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
        }
    };
    return Student;
}(Person));
// Exercício 4
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.validateName(name);
        this._name = name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        // getters
        get: function () { return this._name; },
        // setters
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    // validators
    Subject.prototype.validateName = function (name) {
        if (!isMinLength(name, 3)) {
            throw new Error('O nome precisa ter no mínimo 3 caracteres.');
        }
    };
    return Subject;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._admissionDate = new Date();
        _this._salary = salary;
        _this._subject = subject;
        _this._registration = _this.generateRegistration();
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        // getters
        get: function () { return this._subject; },
        // setters
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "registration", {
        get: function () { return this._registration; },
        set: function (registration) {
            this._registration = registration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () { return this._salary; },
        set: function (salary) {
            this.validateSalary(salary);
            this._salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "admissionDate", {
        get: function () { return this._admissionDate; },
        set: function (date) {
            this.validateDate(date);
            this._admissionDate = date;
        },
        enumerable: false,
        configurable: true
    });
    // validators
    Teacher.prototype.validateSalary = function (salary) {
        if (salary < 0) {
            throw new Error('O salário não pode ser negativo.');
        }
    };
    Teacher.prototype.generateRegistration = function () {
        var string = (0, crypto_random_string_1.default)({ length: 16, type: 'numeric' });
        return string;
    };
    return Teacher;
}(Person));
// Testes
var maria = new Person('Maria da Consolação', new Date('1980/01/25'));
var luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
console.log(maria);
console.log(luiza);
