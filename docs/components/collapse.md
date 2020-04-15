---
title: Collapse 折叠面板
---

# 折叠面板

## 简单用法

#### 预览 
&nbsp;
<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

#### 代码
```vue
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

<script >
  export default {
    data(){
      return {
        isSelected: ['2']
      }
    }
  }
</script>

```
