---
title: Popover 弹出框
---

# 弹出框

## 支持HTML

#### 预览 
&nbsp;
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>
#### 代码
```vue
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
```

## hover触发

#### 预览 
&nbsp;
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>
#### 代码
```vue
<s-popover trigger="hover">
  <s-button>上方弹出</s-button>
  <template slot="content">
    弹出内容
  </template>
</s-popover>

<s-popover position="bottom" trigger="hover">
  <s-button>下方弹出</s-button>
  <template slot="content">
    弹出内容
  </template>
</s-popover>

<s-popover position="left" trigger="hover">
  <s-button>左边弹出</s-button>
  <template slot="content">
    弹出内容
  </template>
</s-popover>

<s-popover position="right" trigger="hover">
  <s-button>右边弹出</s-button>
  <template slot="content">
    弹出内容
  </template>
</s-popover>
```
 
