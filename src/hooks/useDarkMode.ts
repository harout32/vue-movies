import { ref, watch } from 'vue';

const setDarkMode = (isDarkMode: boolean) => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
export default function () {
  let isDark: boolean;
  const isDarkOs = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storageMode = localStorage.getItem('isDarkMode');
  // if dark mode exists in storage === manual selected otherwise check if os preferred theme is Dark
  if (!storageMode) {
    isDark = !!isDarkOs;
  } else {
    isDark = storageMode === 'true';
  }

  const isDarkMode = ref<boolean>(isDark);
  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', String(!isDarkMode.value));
    isDarkMode.value = !isDarkMode.value;
  };
  setDarkMode(isDarkMode.value);
  watch(isDarkMode, (mode) => {
    setDarkMode(mode);
  });
  return {
    toggleDarkMode,
    isDarkMode,
  };
}
