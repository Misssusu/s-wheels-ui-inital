<template>
    <div>
        <s-collapse  :selected.sync="isSelected" >
            <s-collapse-item title="面板1" name="1">
                <div>面板1内容</div>
            </s-collapse-item>
            <s-collapse-item title="面板2" name="2">
                <div>面板2内容</div>
            </s-collapse-item>
            <s-collapse-item title="面板3" name="3">
                <div>面板3内容</div>
            </s-collapse-item>
            <s-collapse-item title="面板4" name="4">
                <div>面板4内容</div>
            </s-collapse-item>
        </s-collapse>
<!--        <h4>代码</h4>-->
<!--        <pre><code>{{contents}}</code></pre>-->
<!--        <pre><code>{{jsContents}}</code></pre>-->
    </div>
</template>
<script>
  import Collapse from "../../../src/collapse/collapse"
  import CollapseItem from "../../../src/collapse/collapse-item"
  export default {
    data() {
      return {
        contents: `
            <s-collapse  :selected.sync="isSelected" >
                <s-collapse-item title="面板1" name="1">
                    <div>面板1内容</div>
                </s-collapse-item>
                <s-collapse-item title="面板2" name="2">
                    <div>面板2内容</div>
                </s-collapse-item>
                <s-collapse-item title="面板3" name="3">
                    <div>面板3内容</div>
                </s-collapse-item>
                <s-collapse-item title="面板4" name="4">
                    <div>面板4内容</div>
                </s-collapse-item>
           </s-collapse>
          `.replace(/^ {8}/gm, '').trim(),
        jsContents: `
          export default {
            data() {
              return {
                isSelected: ['2']
              };
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        isSelected: ['2']
      }
    },
    components: {
      's-collapse': Collapse,
      "s-collapse-item": CollapseItem
    }
  }
</script>
