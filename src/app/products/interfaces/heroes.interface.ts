export enum Color {
  rojo,
  verde,
  negro,
  blanco,
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
