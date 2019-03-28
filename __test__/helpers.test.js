import { hasID } from '../src/helpers/utils';

describe('Has Id helper method', () => {
  it('should return true', () => {
    expect(hasID({ id: 1 })).toEqual(true);
  });
  it('should return false', () => {
    expect(hasID({ name: 'Tiku' })).toEqual(false);
  });
});
