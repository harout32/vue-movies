import TogglerButton from '../TogglerButton.vue';
import { fireEvent, render } from '@testing-library/vue';

describe('TogglerButton', () => {
  it('should be checked when defaultValue equals true', () => {
    const { getByTestId } = render(TogglerButton, {
      props: {
        dataTestId: 'toggle-button',
        defaultValue: true,
      },
    });

    expect(getByTestId('toggle-button')).toBeChecked();
  });

  it('should not be checked when defaultValue equals false', () => {
    const { getByTestId } = render(TogglerButton, {
      props: {
        dataTestId: 'toggle-button',
        defaultValue: false,
      },
    });

    expect(getByTestId('toggle-button')).not.toBeChecked();
  });

  it('should emit onChange when input value changes', () => {
    const { getByTestId, emitted } = render(TogglerButton, {
      props: {
        dataTestId: 'toggle-button',
        defaultValue: false,
      },
    });
    const input = getByTestId('toggle-button');

    fireEvent.click(input);

    expect(emitted().onChange).toBeTruthy();
  });
});
