<template>
  <div :data-test-id="dataTestId" @click="toggle">
    <!-- this is needed to get the position of the toggler button -->
    <div ref="toggler">
      <slot name="toggler" :active="isOpen"></slot>
    </div>

    <div v-if="isOpen">
      <teleport to="body">
        <div class="overlay" data-test-id="overlay" @click="overlayClicked">
          <!-- this is needed to position the toggled list under the toggler -->
          <div class="absolute" :style="position" @click="listClicked">
            <slot name="list"></slot>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getSelectListPositionStyles } from '../../utils';

export default defineComponent({
  name: 'Toggle',
  props: {
    dataTestId: {
      type: String,
      required: false,
      default: 'toggle',
    },
    shouldCloseOnListClick: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const toggler = ref<HTMLElement | null>(null);
    const isOpen = ref<boolean>(false);
    const position = ref({ left: '0px', top: '0px' });
    const overlayClicked = () => {
      isOpen.value = false;
    };
    const toggle = () => {
      if (!isOpen.value) {
        // getting the position of the toggler
        position.value = getSelectListPositionStyles(toggler);
      }
      isOpen.value = !isOpen.value;
    };

    const listClicked = (event: Event) => {
      if (!props.shouldCloseOnListClick) {
        event.stopPropagation();
      }
    };
    return {
      isOpen,
      overlayClicked,
      toggle,
      toggler,
      position,
      listClicked,
    };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  @apply top-0 left-0 right-0 bottom-0 absolute;
}
</style>
