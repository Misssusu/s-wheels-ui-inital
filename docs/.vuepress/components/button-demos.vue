<template>
    <div>
        <s-button>默认按钮</s-button>
        <s-button icon="settings">默认按钮</s-button>
        <s-button :loading="true">默认按钮</s-button>
        <s-button disabled>默认按钮</s-button>
    </div>
</template>
<script>
    import Button from "../../../src/button/button"
    export default {
      data() {
        return {
          contents: `
            <s-button>默认按钮</s-button>
            <s-button icon="settings">默认按钮</s-button>
            <s-button :loading="true">默认按钮</s-button>
            <s-button :disabled="true">默认按钮</s-button>
          `.replace(/^ {8}/gm, '').trim()
        }
      },
      components: {
        's-button': Button
      }
    }
</script>
