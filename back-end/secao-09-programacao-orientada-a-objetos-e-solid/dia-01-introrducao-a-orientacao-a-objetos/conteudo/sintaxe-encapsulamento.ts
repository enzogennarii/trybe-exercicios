// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/fcaf7bf1-52e1-48c5-86b8-916432bd415c/lesson/f54443a5-0b6c-4162-aab0-16abef3e8166

// SINTAXE DO ENCAPSULAMENTO

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], cc: string | undefined) {
    console.log('Iniciando instância da classe Tv!');
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = cc;
  }

  turnOn(): void {
    console.log(`brand: ${this._brand}`);
    console.log(`size: ${this._size}`);
    console.log(`resolution: ${this._resolution}`);
    console.log(`connections:`, this._connections);
    console.log(`connectedTo: ${this._connectedTo}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const samsungTv = new Tv('Samsung', 40, '8K', ['HDMI', 'HDMI 2.0', 'HDMI 3.0', 'Ethernet', 'DisplayPort'], 'HDMI');
samsungTv.connectedTo = 'DisplayPort';
samsungTv.turnOn();
