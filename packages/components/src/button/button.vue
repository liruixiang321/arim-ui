<template>
  <button class="ar-button" :class="buttonStyle">
    dadwa
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import './style/index.less';
  import { computed } from 'vue';
  defineOptions({ name: 'ArButton' });
  type ButtonProps = {
    type?: string;
  };
  const buttonProps = defineProps<ButtonProps>();

  const buttonStyle = computed(() => {
    return { [`ar-button--${buttonProps.type}`]: buttonProps.type };
  });
</script>
