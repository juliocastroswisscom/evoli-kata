export class Survivor {
  #name: string;
  #wounds = 0;
  #isDead = false;
  #availableActions = 3;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getWounds() {
    return this.#wounds;
  }

  receiveWound() {
    this.#wounds++;

    if (this.#wounds > 1) {
      this.#wounds = Math.min(this.#wounds, 2)
      this.#isDead = true;
    }
  }

  isDead() {
    return this.#isDead;
  }

  getAvailableActions(){
    return this.#availableActions;
  }
}
