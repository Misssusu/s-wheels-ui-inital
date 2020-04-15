---
title: Tabs 标签页
---

# 标签页

## 简单用法

#### 预览 
&nbsp;
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>
#### 代码
```vue
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

<script>
  export default {
    data() {
        return {
          selectedTab: '1'
        }
      }
  }
</script>

```
 
