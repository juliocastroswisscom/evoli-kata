import { describe, expect, it } from 'vitest';
import { Carrot } from '../../src/carrots/Carrot';

describe('Carrot', () => {
  it('creates a carrot with high carrotness', () => {
    const carrot = new Carrot({ carrotness: 450 });

    expect(carrot.getCarrotness()).toEqual(450);
  });
});
