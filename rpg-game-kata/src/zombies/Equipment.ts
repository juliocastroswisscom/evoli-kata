export class Equipment {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}