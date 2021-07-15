import { nextTick } from 'vue';
import useDarkMode from '../useDarkMode';

describe('useDarkMode', () => {
  it('should set dark theme be default when preferred os theme is dark', () => {
    window.matchMedia = () => ({ matches: true } as any);
    useDarkMode();
    expect(window.document.documentElement).toHaveClass('dark');
  });

  it('should not set dark theme be default when preferred os theme is light', () => {
    window.matchMedia = () => ({ matches: false } as any);
    useDarkMode();
    expect(window.document.documentElement).not.toHaveClass('dark');
  });

  it('should toggle dark mode on when calling toggleDarkMode', async () => {
    window.matchMedia = () => ({ matches: false } as any);
    const { toggleDarkMode } = useDarkMode();
    toggleDarkMode();
    await nextTick();
    expect(window.document.documentElement).toHaveClass('dark');
  });
});
