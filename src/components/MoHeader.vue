<template>
  <div class="header" :class="{ 'header-border': border }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="less" scoped>
@import '~@/styles/common';

.header {
  position: absolute;
  top: 0;
  width: 100%;
  max-width: @maxWidth;
  z-index: 100;
  display: flex;
  height: 48 * @pr;
  padding-left: 16 * @pr;
  padding-right: 16 * @pr;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
}

.header-border {
  height: 49 * @pr;
  margin-bottom: -1 * @pr;
  border-bottom: 1px solid @antLineGrey;
}
</style>
