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
  }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
