export class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  toString = () => {
    return `${this.#name}`;
  };
}
