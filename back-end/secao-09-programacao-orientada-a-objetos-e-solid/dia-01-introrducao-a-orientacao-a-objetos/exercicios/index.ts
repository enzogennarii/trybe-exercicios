class Aluno {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor (matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  public get matricula(): string { return this._matricula }

  public get nome(): string { return this._nome }

  public get notasProva(): number[] { return this._notasProva }

  public get notasTrabalho(): number[] { return this._notasTrabalho }

  public set addNotasProva(notas: number[]) {
    this._notasProva = notas;
  }

  public set addNotasTrabalho(notas: number[]) {
    this._notasTrabalho = notas;
  }

  calcTotalNota() {
    const todasNotas = [...this._notasProva, ...this._notasTrabalho];
    const total = todasNotas.reduce((acc, curr) => acc + curr, 0);
    return total;
  }

  calcMediaNotas() {
    const todasNotas = [...this._notasProva, ...this._notasTrabalho];
    const media = this.calcTotalNota() / todasNotas.length;
    return media;
  }
}

// const pessoa1 = new Aluno('123321', 'Pessoa');
// console.log('Matrícula:', pessoa1.matricula);
// console.log('Nome:', pessoa1.nome);
// console.log('Notas de Provas:', pessoa1.notasProva);
// console.log('Notas de Trabalhos:', pessoa1.notasTrabalho);

class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get name(): string { return this._nome }

  set newName(newName: string) { this._nome = newName }
}

class Pedido {
  private _itens: string[];
  private _formaPagamento: string;
  private _desconto: string | undefined;
}

class Item {
  private _nome: string;
  private _preco: number;
}