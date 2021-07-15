import { render } from '@testing-library/vue';
import MainPage from '../MainPage.vue';
window.matchMedia = () => ({ matches: true } as any);

describe('MainPage', () => {
  it('should be rendered', () => {
    const { getByTestId } = render(MainPage);
    expect(getByTestId('main-page')).toBeInTheDocument();
  });
});
