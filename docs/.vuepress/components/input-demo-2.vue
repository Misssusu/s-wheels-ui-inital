<template>
    <div>
        <s-input value="你好"></s-input>
        <s-input value="你好" disabled></s-input>
        <s-input value="你好" readonly></s-input>
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
            <s-input value="你好"></s-input>
          <s-input value="你好" disabled></s-input>
          <s-input value="你好" readonly></s-input>
          `.replace(/^ {8}/gm, '').trim()
      }
    },
    components: {
      's-input': Input
    }
  }
</script>
