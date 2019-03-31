import hasId from '../src/helpers/validator';

describe('Has Id helper method', () => {
  it('should return true', () => {
    expect(hasId({ id: 1 })).toEqual(true);
  });
  it('should return false', () => {
    expect(hasId({ name: 'Tiku' })).toEqual(false);
  });
});
