import { IAgenda } from "./interfaces/IAgenda";

abstract class Quadra {
  abstract reservar<T>(data: Date): IAgenda<T>
}

export default Quadra;
