<template>
  <div
    class="layout"
    :class="{
      'layout-grey': grey,
      'layout-header': header,
    }"
    :style="wrapperStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    grey: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    wrapperStyle() {
      return {
        minHeight: `${this.$LAYOUT.windowInnerHeight}px`,
      }
    },
  },
}
</script>
<style lang="less">
@import '~@/styles/common';

.header + div {
  position: absolute;
  overflow: auto;
  top: 48 * @pr;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
<style lang="less" scoped>
@import '~@/styles/common';

.layout {
  position: relative;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
  max-width: @pageMaxWidth;
  margin: 0 auto;
}

.layout-header {
  padding-top: 48 * @pr;
}

.layout-grey {
  background: @antBackGrey;
}
</style>
