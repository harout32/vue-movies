import { render } from '@testing-library/vue';
import Header from '../Header.vue';

describe('Header', () => {
  it('should be rendered', () => {
    const { getByTestId } = render(Header);
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
