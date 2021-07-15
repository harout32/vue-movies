import Input from '../Input.vue';
import { fireEvent, render } from '@testing-library/vue';

describe('Input', () => {
  it('should keep the input value', () => {
    const { getByTestId } = render(Input, { props: { dataTestId: 'input' } });

    fireEvent.update(getByTestId('input'), 'some value');

    expect(getByTestId('input')).toHaveValue('some value');
  });
});
