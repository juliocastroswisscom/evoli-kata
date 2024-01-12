import { describe, expect, it } from 'vitest';
import { Survivor } from '../../src/zombies/Survivor';

describe('Survivor', () => {
  it('increases wounds on receiveWound', () => {
    const bob = new Survivor('Bob');
    expect(bob.getName()).toEqual('Bob');
    expect(bob.getWounds()).toEqual(0);
    bob.receiveWound();
    expect(bob.getWounds()).toEqual(1);
  });

  it('dies at two wounds', () => {
    const sandy = new Survivor('Sandy');
    expect(sandy.isDead()).toEqual(false);
    sandy.receiveWound();
    expect(sandy.isDead()).toEqual(false);
    sandy.receiveWound();
    expect(sandy.isDead()).toEqual(true);
  });
});
