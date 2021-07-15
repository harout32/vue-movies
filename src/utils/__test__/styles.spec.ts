import { Ref } from 'vue';
import { getSelectListPositionStyles } from '../styles';

describe('getSelectListPositionStyles', () => {
  let mockRef: Ref<HTMLElement>;
  beforeEach(() => {
    mockRef = { value: { getBoundingClientRect: () => ({ x: 0, y: 0, height: 0 }) } } as any;
  });

  it('should get the the right styles', () => {
    jest.spyOn(mockRef.value, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          x: 1,
          y: 1,
          height: 1,
        } as DOMRect),
    );
    const result = getSelectListPositionStyles(mockRef);

    expect(result).toEqual({ left: '1px', top: '2px' });
  });

  it('should get the the right styles when no dimensions element', () => {
    jest.spyOn(mockRef.value, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          x: 0,
          y: 0,
          height: 0,
        } as DOMRect),
    );
    const result = getSelectListPositionStyles(mockRef);

    expect(result).toEqual({ left: '0px', top: '0px' });
  });

  it('should get the the right styles when no dimensions element', () => {
    jest.spyOn(mockRef.value, 'getBoundingClientRect').mockImplementation(() => null as any);
    const result = getSelectListPositionStyles(mockRef);

    expect(result).toEqual({ left: '0px', top: '0px' });
  });
});
