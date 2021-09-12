<template>
  <div class="color-table">
    <table>
      <thead>
        <tr>
          <th>值</th>
          <th v-for="(item, index) in colors" :key="index">{{ item[0] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>颜色</td>
          <td v-for="(item, index) in colors" :key="index" :bgcolor="item[1]">{{ item[1] }}</td>
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

