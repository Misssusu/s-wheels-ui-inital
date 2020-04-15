<template>
    <div>
        <s-popover>
            <s-button>上方弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="bottom">
            <s-button>下方弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="left">
            <s-button>左边弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="right">
            <s-button>右边弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
<!--        <h4>代码</h4>-->
<!--        <pre><code>{{contents}}</code></pre>-->
    </div>
</template>
<script>
  import Popover from "../../../src/popover/popover"
  import Button from "../../../src/button/button"

  export default {
    data() {
      return {
        contents: `<s-popover>
            <s-button>上方弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="bottom">
            <s-button>下方弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="left">
            <s-button>左边弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
        </s-popover>
        <s-popover position="right">
            <s-button>右边弹出</s-button>
            <template slot="content">
                弹出内容
            </template>
  </s-popover>
          `.replace(/^ {8}/gm, '').trim()
      }
    },
    components: {
      's-popover': Popover,
      's-button': Button
    }
  }
</script>
