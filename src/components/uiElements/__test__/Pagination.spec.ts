import Pagination from '../Pagination.vue';
import { fireEvent, render } from '@testing-library/vue';

describe('Pagination', () => {
  it('should emit onNext when clicking on Next and hasNext equals to true', () => {
    const { getByTestId, emitted } = render(Pagination, {
      props: {
        hasNext: true,
        pageIndex: 0,
      },
    });

    fireEvent.click(getByTestId('pagination-next'));

    expect(emitted().onNext).toBeTruthy();
  });

  it('should not emit onNext when clicking on Next and hasNext equals to false', () => {
    const { getByTestId, emitted } = render(Pagination, {
      props: {
        hasNext: false,
        pageIndex: 0,
      },
    });

    fireEvent.click(getByTestId('pagination-next'));

    expect(emitted().onNext).toBeFalsy();
  });

  it('should emit onPrev when clicking on Prev and pageIndex is bigger 0', () => {
    const { getByTestId, emitted } = render(Pagination, {
      props: {
        hasNext: true,
        pageIndex: 1,
      },
    });

    fireEvent.click(getByTestId('pagination-prev'));

    expect(emitted().onPrev).toBeTruthy();
  });

  it('should not emit onPrev when clicking on Prev and pageIndex equals to 0', () => {
    const { getByTestId, emitted } = render(Pagination, {
      props: {
        hasNext: true,
        pageIndex: 0,
      },
    });

    fireEvent.click(getByTestId('pagination-prev'));

    expect(emitted().onPrev).toBeFalsy();
  });

  it('should display the current page correctly', () => {
    const { getByTestId } = render(Pagination, {
      props: {
        hasNext: true,
        pageIndex: 10,
      },
    });

    expect(getByTestId('pagination-number')).toHaveTextContent('11');
  });

  it('should render pageIndex 1 as default', () => {
    const { getByTestId } = render(Pagination, {
      props: {
        hasNext: true,
      },
    });

    expect(getByTestId('pagination-number')).toHaveTextContent('1');
  });
});
