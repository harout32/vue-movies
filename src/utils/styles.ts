import { Ref } from 'vue';

export const getSelectListPositionStyles = (ref: Ref<HTMLElement | null>) => {
  const { x, y, height } = ref.value?.getBoundingClientRect() ?? { x: 0, y: 0, height: 0 };
  return {
    left: String(x) + 'px',
    top: String(y + height) + 'px',
  };
};
