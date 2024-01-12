import {Equipment} from "./Equipment";

export class Bag {
    #capacity = 3;
    #equipment: Equipment[] = [];

    isFull() {
        return this.#capacity === this.#equipment.length;
    }

    addEquipment(equipment: Equipment) {
        if(!this.isFull()) {
            this.#equipment = [...this.#equipment, equipment];
        }
    }

    getEquipmentAt(index: number): Equipment | undefined {
        return this.#equipment[index];
    }

    reduceCapacity() {
        this.#capacity = Math.max(0, this.#capacity - 1);
        this.#equipment = this.#equipment.slice(0, this.#capacity);
    }
}