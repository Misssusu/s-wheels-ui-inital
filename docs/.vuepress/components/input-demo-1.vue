<template>
    <div>
        <s-input v-model="value"></s-input>
        <div>value: {{value}}</div>
<!--        <h4>代码</h4>-->
<!--        <pre><code>{{contents}}</code></pre>-->
    </div>
</template>
<script>
  import Input from "../../../src/input/input"
  export default {
    data() {
      return {
        contents: `
            data: {
              value: 'hello'
          }

          <s-input v-model="value"></s-input>
          <div>
               value: {{value}}
          </div>
          `.replace(/^ {8}/gm, '').trim(),
        value: 'hello'
      }
    },
    components: {
      's-input': Input
    }
  }
</script>
