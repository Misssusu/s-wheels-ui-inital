# wheel - 是一个 UI框架，提供了常用的 UI 组件。
## 开始使用
### 1. 使用本框架前，请在css中开启border-box
```
*,*::before,*::after{
    box-sizing: border-box
}
```
### 2. 安装
可以使用下列任一命令安装这个新的包：
````
npm install s-wheels-ui
````
或
````
yarn add s-wheels-ui
````
### 3. 引入
以Button组件为例子
````
import {Button} from 's-wheels-ui'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    's-button':Button
  }
})
````

