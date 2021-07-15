import { getMapFromArray } from '../helpers';

describe('getMapFromArray', () => {
  it('should return empty object when no elements in the array', () => {
    const map = getMapFromArray<boolean>([]);

    expect(map).toEqual({});
  });

  it('should return object containing the elemnt as kay with value true', () => {
    const map = getMapFromArray<boolean>([100]);

    expect(map).toEqual({ '100': true });
  });
});
