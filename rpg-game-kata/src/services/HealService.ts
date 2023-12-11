import {Character} from "../entities/Character.ts";

export class HealService {

    heal(supporter: Character, receiver: Character, healingDone: number) {
        if (receiver.isAlive()) {
            console.log('Character' + supporter + ' heals ' + receiver);
            receiver.changeHealth(healingDone);
        }
    }

}