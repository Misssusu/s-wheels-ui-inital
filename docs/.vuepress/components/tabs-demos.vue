<template>
    <div>
        <s-tabs :selected.sync="selectedTab">
            <s-tabs-nav>
                <s-tabs-item name="1">Tab1</s-tabs-item>
                <s-tabs-item name="2">Tab2</s-tabs-item>
            </s-tabs-nav>
            <s-tabs-body>
                <s-tabs-pane name="1">content 1</s-tabs-pane>
                <s-tabs-pane name="2">content 2</s-tabs-pane>
            </s-tabs-body>
        </s-tabs>
<!--        <h4>代码</h4>-->
<!--        <pre><code>{{contents}}</code></pre>-->
<!--        <pre><code>{{jsContents}}</code></pre>-->
    </div>
</template>
<script>
  import Tabs from "../../../src/tabs/tabs"
  import TabsNav from "../../../src/tabs/tabs-nav"
  import TabsBody from "../../../src/tabs/tabs-body"
  import TabsItem from "../../../src/tabs/tabs-item"
  import TabsPane from "../../../src/tabs/tabs-pane"

  export default {
    data() {
      return {
        contents: `
            <s-tabs :selected.sync="selectedTab">
            <s-tabs-nav>
                <s-tabs-item name="1">1</s-tabs-item>
                <s-tabs-item name="2">2</s-tabs-item>
            </s-tabs-nav>
            <s-tabs-body>
                <s-tabs-pane name="1">content 1</s-tabs-pane>
                <s-tabs-pane name="2">content 2</s-tabs-pane>
            </s-tabs-body>
  </s-tabs>
          `.replace(/^ {8}/gm, '').trim(),
        jsContents: `
        export default {
            data() {
                return {
                   selectedTab: '1'
                }
            }
  }
        `.replace(/^ {8}/gm, '').trim(),
        selectedTab: '1'
      }
    },
    components: {
      's-tabs': Tabs,
      's-tabs-nav': TabsNav,
      's-tabs-body': TabsBody,
      's-tabs-item': TabsItem,
      's-tabs-pane': TabsPane
    }
  }
</script>
