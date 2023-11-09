// abstract class Character {
//   protected _name: string;
//   protected _specialMove: string;

//   constructor(name: string, specialMove: string) {
//     this._name = name;
//     this._specialMove = specialMove;
//   }

//   abstract talk(): void
//   abstract doSpecialMove(): void

//   static apresentation(character: Character) {
//     character.talk();
//     character.doSpecialMove();
//   }
// }

// class MeleeCharacter extends Character {
//   talk(): void {
//     console.log(`Eu sou ${this._name}, ataco a curta distância.`);
//   }

//   doSpecialMove(): void {
//     console.log(`${this._name} usou ${this._specialMove}`);
//   }
// }

// class LongRangeCharacter extends Character {
//   talk(): void {
//     console.log(`Eu sou ${this._name}, ataco a longa distância.`);
//   }

//   doSpecialMove(): void {
//     console.log(`${this._name} usou ${this._specialMove}`)
//   }
// }

// const bruceLee = new MeleeCharacter('Bruce Lee', 'Soco de uma polegada');
// const goku = new LongRangeCharacter('Goku', 'Kamehameha');

// Character.apresentation(bruceLee);
// Character.apresentation(goku);

interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  findAll(): DbCharacter[],
  findOne(id: number): DbCharacter | null,
  create(character: Character): DbCharacter,
  update(id: number, character: Character): DbCharacter | null,
  delete(id: number): number,
}

class LocalDbModel implements IModel {
  findAll(): DbCharacter[] {
    return db;
  }

  findOne(id: number): DbCharacter | null {
    const character = db.find((c) => c.id === id);
    return character || null;
  }

  create(character: Character): DbCharacter {
    const nextId = db.length ? db.sort((a, b) => b.id - a.id)[0].id + 1 : 1;
    const newChar: DbCharacter = { id: nextId, ...character };
    db.push(newChar);
    return newChar;
  }

  update(id: number, character: Character): DbCharacter | null {
    const updatedChar: DbCharacter = { id, ...character };
    const indexOfChar = db.findIndex((c) => c.id === id);
    if (!indexOfChar) return null;
    db[indexOfChar] = updatedChar;
    return updatedChar;
  }

  delete(id: number): number {
    const indexOfChar = db.findIndex((c) => c.id === id);
    const deleted = db.splice(indexOfChar, 1);
    return deleted.length;
  }
}

type ErrorData = {
  message: string,
}

type ServiceResponse<T> = {
  status: number,
  data?: T | ErrorData,
}

class CharacterService {
  constructor(readonly model: LocalDbModel) {}

  findAll(): ServiceResponse<DbCharacter[]> {
    const data = this.model.findAll();
    return { status: 200, data };
  }

  findOne(id: number): ServiceResponse<DbCharacter> {
    const data = this.model.findOne(id);
    if (!data) {
      return { status: 404, data: { message: 'Não encontrado.' } };
    }
    return { status: 200, data };
  }

  create(character: Character): ServiceResponse<DbCharacter> {
    const data = this.model.create(character);
    return { status: 201, data };
  }

  update(id: number, character: Character): ServiceResponse<DbCharacter> {
    const data = this.model.update(id, character);
    if (!data) return { status: 404, data: { message: 'Não encontrado.' } };
    return { status: 200, data };
  }

  delete(id: number): ServiceResponse<undefined> {
    const data = this.model.delete(id);
    if (!data) return { status: 404, data: { message: 'Não encontrado.' } };
    return { status: 200 };
  }
}
