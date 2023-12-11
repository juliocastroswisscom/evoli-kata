import { describe, expect, it } from 'vitest';
import {Character} from "../../src/entities/Character.ts";
import {DamageService} from "../../src/services/DamageService.ts";
import {HealService} from "../../src/services/HealService.ts";

describe('Character', () => {
    it('creates default character', () => {
        const character = new Character();

        expect(character.getHealth()).toEqual(1000);
        expect(character.getLevel()).toEqual(1);
        expect(character.isAlive()).toEqual(true);
        expect(character.getId()).toEqual(1);

        const characterTwo = new Character();
        expect(characterTwo.getId()).toEqual(2);

    });

    it('test character damage', () => {
        const attacker = new Character();
        const defender = new Character();
        const service = new DamageService();

        service.dealDamage(attacker, defender, 100);

        expect(defender.getHealth()).toEqual(900);
    });

    it('kills a character', () => {
        const attacker = new Character();
        const defender = new Character();
        const service = new DamageService();

        service.dealDamage(attacker, defender, 10_000);

        expect(defender.isAlive()).toEqual(false);
    })

    it('heals a character', () => {
        const supporter = new Character();
        const supportedCharacter = new Character();
        const healService = new HealService();
        const dmgService = new DamageService();

        dmgService.dealDamage(supporter, supportedCharacter, 100)
        healService.heal(supporter, supportedCharacter, 50);

        expect(supportedCharacter.getHealth()).toEqual(950);
    })

    it('cannot heal a dead character', () => {
        const supporter = new Character();
        const supportedCharacter = new Character();
        const healService = new HealService();
        const dmgService = new DamageService();

        dmgService.dealDamage(supporter, supportedCharacter, 10_000)
        healService.heal(supporter, supportedCharacter, 50);

        expect(supportedCharacter.getHealth()).toEqual(0);
        expect(supportedCharacter.isAlive()).toBeFalsy();
    })

    it('cannot heal fully healed character', () => {
        const supporter = new Character();
        const supportedCharacter = new Character();
        const healService = new HealService();

        healService.heal(supporter, supportedCharacter, 50);

        expect(supportedCharacter.getHealth()).toEqual(1000);
    })
});