<template>
  <div class="color-table">
    <table>
      <thead>
        <tr>
          <th>值</th>
          <th>颜色</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in colors" :key="index">
          <td>{{ item[0] }}</td>
          <td :bgcolor="item[1]">{{ item[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
