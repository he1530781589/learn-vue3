## 一. 邂逅Vue.js开发

### 1.1. Vue介绍

Vue.js 是一套构建用户界面的渐进式框架。Vue 的核心库专注于视图层，易于学习，易于集成其他库或已有项目。

#### Vue在前端的地位

* 与 React 和 Angular 一同被视为现代前端三大主流框架。
    * React 由 Facebook 开发，专注于 UI 组件开发，拥有庞大的社区和生态圈。
    * Angular 由 Google 开发，是一套完整的前端框架，涵盖了从构建到部署的所有步骤。

* 选择直接学习 Vue3 是因为它带来了许多新特性，例如 Composition API 和 Teleport。

### 1.2. Vue下载和使用

#### CDN引入

可以通过在HTML文件中引入Vue的CDN链接，例如：

```html
<script src="https://unpkg.com/vue@next"></script>
```

#### 下载引入

也可以通过 Node.js 的包管理器 npm 或 yarn 下载：

```shell
npm install vue@next
```

或者

```shell
yarn add vue@next
```

#### 初体验一下Vue开发

创建一个 Vue 实例，并挂载到某个 DOM 元素上。

```javascript
const app = Vue.createApp({
  data() {
    return { message: 'Hello Vue!' }
  }
})
app.mount('#app')
```

### 1.3. Vue的三个案例

#### 1.3.1. 动态数据展示

通过 data 返回的对象属性，可以在模板中动态显示数据。

```html
<div id="app">
  {{ message }}
</div>
```

#### 1.3.2. 动态展示列表

使用 v-for 指令可以渲染一个列表。

```html
<div id="app">
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</div>
```

#### 1.3.3. 计数器案例

在 Vue 中实现一个计数器，涉及到数据和方法的使用。

```html
<div id="app">
  <p>{{ count }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</div>
```

```javascript
const app = Vue.createApp({
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
app.mount('#app')
```

### 1.4. 命令式和声明式编程的区别

* 命令式编程是关注"如何做"，例如使用 JavaScript 实现一个计时器，需要关心具体步骤，如何创建，如何更新，如何停止。
* 声明式编程是关注"做什么"，只需要描述结果，例如在 Vue 中使用 v-on 指令绑定事件，只需要描述事件触发后需要执行什么操作。

### 1.5. MVC和MVVM的模型区别

MVC(Model-View-Controller)模式分为三个部分：模型(Model)，视图(View)和控制器(Controller)。视图展示模型的状态，控制器处理用户交互并更新模型。

MVVM(Model-View-ViewModel)模式也分为三个部分：模型(Model)，视图(View)和视图模型(ViewModel)。ViewModel 是视图和模型之间的连接器，数据绑定是 ViewModel 最显著的特性。

### 1.6. options api的data详解

在 Vue 中，组件的状态存储在 data 中。data 必须是一个函数，这个函数返回一个对象，这个对象就是组件的初始状态。

```javascript
data() {
  return {
    count: 0
  }
}
```

这个返回的对象，会被 Vue 进行劫持(放到响应式系统中)，所以data的数据发生改变时，界面会重新渲染。

### 1.7. options api的methods详解

methods 是一个对象，对象中可以包含多个函数，这些函数用来响应用户的操作，修改 data 中的数据。

```javascript
methods: {
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
}
```

methods 中的函数不能使用箭头函数，因为箭头函数不会绑定 this，this 应该指向 Vue 实例。
