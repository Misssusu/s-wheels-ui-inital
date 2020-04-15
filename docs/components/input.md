---
title: Input 输入框
---

# 输入框

## 简单用法

#### 预览 
&nbsp;
<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>
#### 代码
```vue
<s-input value="你好"></s-input>
<s-input value="你好" disabled></s-input>
<s-input value="你好" readonly></s-input>
```

## 双向绑定

#### 预览 
&nbsp;
<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>
#### 代码
```vue
<s-input v-model="value"></s-input>
<div>
  value: {{value}}
</div>
```
