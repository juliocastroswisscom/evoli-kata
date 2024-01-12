import {describe, expect, it} from "vitest";
import {Bag} from "../../src/zombies/Bag";
import {Equipment} from "../../src/zombies/Equipment";

describe('Bag', () => {
    it('has 3 slots of equipment as capacity and tries to add 4 pieces of equipments', () => {
        const bag = new Bag();
        bag.addEquipment(new Equipment("Gun"));
        bag.addEquipment(new Equipment("Sword"));
        bag.addEquipment(new Equipment("Pan"));

        expect
    });
});