import { Character } from "../entities/Character.ts";

export class DamageService {

    dealDamage(attacker: Character, receiver: Character, dmgDone: number) {
        console.log('Character' + attacker + ' attacks ' + receiver);
        const negativeDmg = - Math.abs(dmgDone);
        receiver.changeHealth(negativeDmg);
    }

}