import { nextTick } from 'vue';
import { fireEvent, render } from '@testing-library/vue';
import FilterSelect from '../FilterSelect.vue';

describe('FilterSelect', () => {
  it('should emit added options', async () => {
    const { emitted, getByText, getByTestId } = render(FilterSelect, {
      props: {
        title: 'filter',
        options: [
          { id: 1, title: '1' },
          { id: 2, title: '2' },
        ],
      },
    });

    fireEvent.click(getByTestId('filter'));
    await nextTick();

    fireEvent.click(getByText('1'));
    await nextTick();

    expect(emitted()['update:modelValue']).toEqual([[[1]]]);
  });

  it('should emit removed options', async () => {
    const { emitted, getByText, getByTestId } = render(FilterSelect, {
      props: {
        title: 'filter',
        modelValue: [1],
        options: [
          { id: 1, title: 'option1' },
          { id: 2, title: 'option2' },
        ],
      },
    });

    fireEvent.click(getByTestId('filter'));
    await nextTick();

    fireEvent.click(getByText('option1'));

    expect(emitted()['update:modelValue']).toEqual([[[]]]);
  });
});
