<template>
  <div class="code-view-wrapper">
    <component :is="`m-${name}`"></component>
    <a class="link" v-if="isCodeView" :href="$withBase(`/example/${name}.html`)" target="_blank">查看代码</a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    isCodeView: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.code-view-wrapper {
  position: relative;
  margin: 10px 0;
  .link {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0 7px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 30px;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
}
</style>
