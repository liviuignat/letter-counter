import { letterCounter } from 'index';

describe('WHEN counting letters', () => {
  it('true should be true', () => {
    const result = letterCounter();
    expect(result).toBe(true);
  });
});
