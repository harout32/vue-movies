import { nextTick } from 'vue';
import { fireEvent, render } from '@testing-library/vue';
import Toggle from '../Toggle.vue';

const renderToggleComponent = (shouldCloseOnListClick = false) =>
  render(Toggle, {
    slots: {
      toggler: `<div data-test-id="toggler-item"> </div>`,
      list: `<div data-test-id="toggled-item"> </div>`,
    },
    props: {
      dataTestId: 'toggle-element',
      shouldCloseOnListClick,
    },
  });

describe('Toggle', () => {
  it('should not render toggled-item by default', () => {
    const { queryByTestId } = renderToggleComponent();

    expect(queryByTestId('toggled-item')).not.toBeInTheDocument();
  });

  it('should not render toggled-item when clicking on toggler-item', async () => {
    const { getByTestId } = renderToggleComponent();

    fireEvent.click(getByTestId('toggler-item'));
    await nextTick();

    expect(getByTestId('toggled-item')).toBeInTheDocument();
  });

  it('should close toggled-item when clicking on the overlay', async () => {
    const { getByTestId, queryByTestId } = renderToggleComponent();

    fireEvent.click(getByTestId('toggler-item'));
    await nextTick();
    fireEvent.click(getByTestId('overlay'));
    await nextTick();

    expect(queryByTestId('toggled-item')).not.toBeInTheDocument();
  });

  it('should close toggled-item when clicking on the toggled list when shouldCloseOnListClick is true', async () => {
    const { getByTestId, queryByTestId } = renderToggleComponent(true);

    fireEvent.click(getByTestId('toggler-item'));
    await nextTick();
    fireEvent.click(getByTestId('toggled-item'));
    await nextTick();

    expect(queryByTestId('toggled-item')).not.toBeInTheDocument();
  });
});
