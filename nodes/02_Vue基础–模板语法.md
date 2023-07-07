## 一. 模板语法

### 添加代码片段

在 Vue 的模板中，我们可以直接使用 JavaScript 表达式，例如：

```html
<div>{{ message.split('').reverse().join('') }}</div>
```

### Mustache 语法（插值语法）

Mustache 语法即双大括号 `{{ }}`，用于输出 data 中的数据。

```html
<div>{{ message }}</div>
```

### 不算常用的指令

Vue 提供了一些内置的指令：

- `v-once`：一次性插值，数据改变时，插值处的内容不会更新。
- `v-text`：更新元素的 `textContent`。
- `v-html`：更新元素的 `innerHTML`。
- `v-pre`：跳过这个元素和它的子元素的编译过程。
- `v-cloak`：在网页加载未完成前会有标签，加载完成后标签消失。

### 新的指令 v-memo

用于优化代码


### v-bind 绑定属性

`v-bind` 指令用于响应式地更新 HTML 属性。

#### v-bind 绑定基本属性

可以使用 `v-bind` 指令来动态地绑定 HTML 属性。

```html
<img v-bind:src="imageSrc" alt="Image" />
```

上述代码中，`src` 属性将根据 `imageSrc` 的值进行更新。

#### v-bind 绑定 class

可以使用 `v-bind:class` 来动态绑定 class。

- 基本绑定：

```html
<div v-bind:class="{ active: isActive }"></div>
```

以上代码将根据 `isActive` 数据的值，决定是否添加 `active` class。

- 对象语法：

```html
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```

以上代码将根据 `isActive` 和 `hasError` 的值，决定是否添加 `active` class 和 `text-danger` class。

- 数组语法：

```html
<div v-bind:class="[isActive ? 'active' : '', errorClass]"></div>
```

以上代码使用数组语法，根据 `isActive` 的值决定是否添加 `active` class，并将 `errorClass` 变量中的 class 添加到元素中。

#### v-bind 绑定 style

可以使用 `v-bind:style` 来动态绑定 style。

- 对象语法：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

以上代码将根据 `activeColor` 和 `fontSize` 的值，动态设置元素的颜色和字体大小。

- 数组语法：

```html
<div v-bind:style="[styleObject1, styleObject2]"></div>
```

以上代码将应用 `styleObject1` 和 `styleObject2` 中定义的样式。

### 动态绑定属性名

可以使用方括号来动态绑定属性名。

```html
<button v-bind:[attributeName]="value">Button</button>
```

在上述代码中，`attributeName` 变量的值将作为属性名绑定到按钮元素上。

### v-bind 绑定对象

`v-bind` 也可以绑定一个对象，将对象中所有的 key/value，作为属性绑定到元素上。

```html
<div v-bind="object"></div>
```

以上代码相当于绑定了 `object` 中的所有属性到 `div` 元素上。

### 事件绑定 v-on 用法

#### v-on 各种写法

Vue 提供了多种方式来绑定事件。

```html
<button v-on:click="counter++">Increment</button>
<button v-on:click="doSomething">Do something</button>
<button @click="doSomething">Do something</button>
<button v-on="{ click: handleClick }">Handle Click</button>
```

以上代码展示了不同的事件绑定方式，包括使用 `v-on`、`@`、对象语法等。

#### 各种参数方式

默认情况下，事件处理程序会传递一个事件对象 `event`。除此之外，我们还可以自定义参数进行传递。

```html
<button v-on:click="handleClick(name, age, $event)">Click</button>
```

以上代码中，`name`、`age` 和 `$event` 都将作为参数传递给 `handleClick` 方法。

#### 修饰符 stop

可以使用修饰符来修改事件的行为。其中，`stop` 修饰符可以阻止事件冒泡。

```html
<button v-on:click.stop="handleClick">Click</button>
```

以上代码中，点击按钮时不会触发父元素的点击事件。

### 条件渲染

#### v-if/else/else-if

条件渲染是根据条件来显示或隐藏元素的一种方式。Vue 提供了 `v-if`、`v-else` 和 `v-else-if` 指令来实现条件渲染。

```html
<div v-if="condition">
  Condition is true
</div>
<div v-else>
  Condition is false
</div>
```

以上代码根据 `condition` 的值来决定显示哪个 `div` 元素。

```html
<div v-if="condition1">
  Condition 1 is true
</div>
<div v-else-if="condition2">
  Condition 2 is true
</div>
<div v-else>
  Conditions are false
</div>
```

以上代码展示了使用 `v-else-if` 来实现多个条件的渲染。

#### template 元素

`template` 元素可以用作条件渲染的容器，它不会被渲染到最终的 HTML 结构中。

```html
<template v-if="condition">
  <p>This is rendered

conditionally.</p>
  <p>It won't be included in the final HTML.</p>
</template>
```

在上述代码中，`template` 元素内部的内容只有在 `condition` 为 `true` 时才会被渲染，但它们不会被包含在最终的 HTML 结构中。

`v-if` 也可以与 `v-for` 一起使用。

```html
<template v-for="item in items">
  <p>{{ item }}</p>
</template>
```

在上述代码中，每个 `item` 都会在 `template` 元素内部被循环渲染。

#### v-show

`v-show` 是另一种条件渲染的方式，它通过修改元素的 `display` 样式来显示或隐藏元素。

```html
<div v-show="isVisible">
  This will be shown or hidden based on the value of `isVisible`.
</div>
```

与 `v-if` 不同的是，`v-show` 不能和 `template` 元素结合使用，也不能和 `v-else` 一起使用。

在使用 `v-if` 和 `v-show` 时，需要注意它们的本质区别：

- `v-if` 的元素在条件为 `false` 时会被销毁/不存在。
- `v-show` 的元素在条件为 `false` 时仅将其 `display` 设置为 `none`。

根据需求的不同，我们可以选择使用 `v-show` 或 `v-if`：

- 如果需要频繁切换元素的可见性，使用 `v-show`。
- 如果切换不频繁，或者希望在条件为 `false` 时节省一些性能，使用 `v-if`。

## 二. 列表渲染

### v-for 的基本使用

`v-for` 可以用来渲染数组的每个元素。

```html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```

以上代码会将 `items` 数组中的每个元素渲染为一个列表项。

除了遍历数组，还可以获取元素的索引值。

```html
<ul>
  <li v-for="(item, index) in items">{{ index }}: {{ item }}</li>
</ul>
```

以上代码会将 `items` 数组中的每个元素和它的索引值一起渲染为一个列表项。

当需要同时获取索引值和元素值时，可以使用 `of` 关键字。

```html
<ul>
  <li v-for="(item, index) of items">{{ index }}: {{ item }}</li>
</ul>
```

### v-for 其他的类型

除了数组，`v-for` 还可以用于遍历对象和数字。

#### 对象

遍历对象时，可以获取每个键值对的值和键名。

```html
<ul>
  <li v-for="(value, key, index) in object">{{ index }}: {{ key }} - {{ value }}</li>
</ul>
```

以上代码会将 `object` 对象中的每个键值对渲染为一个列表项。

#### 数字

遍历数字时，可以使用 `in` 关键字。

```html
<ul>
  <li v-for="item in 10">{{ item }}</li>
</ul>
```

以上代码会将数字 1 到 10 渲染为一个列表。

#### 可迭代对象（字符串）

字符串被视为可迭代对象，因此可以将其拆分为单个字符并进行遍历。

```html
<ul>
  <li v-for="char in 'hello'">{{ char }}</li>
</ul>
```

以上代码会将字符串 `'hello'` 的每个字符渲染为一个列表项。

### v-for 绑定 key 属性

#### VNode/虚拟DOM

在 Vue 中，渲染的过程涉及将模板转换为虚拟 DOM 对象（VNode），最后通过对比新旧 VNode 来进行更新。

`template` 元素会被转换为对应的 VNode。

#### key 的作用

`key` 是在 `v-for` 中用来标识 VNode 的唯一属性。它的作用在于：

- 根据 `key` 找到之前的 VNode 进行复用；
- 如果没有可复用的 VNode，则创建新的 VNode。

通过给每个项分配唯一的 `key`，可以提高 Vue 的渲染性能和复用性。

#### key 绑定 id

通常情况下，我们可以使用数组的索引作为 `key`。然而，如果数据的顺序可能发生变化，或者具有不同数据源的列表合并时，使用索引作为 `key` 可能会导致错误的渲染结果。

在这种情况下，最好使用唯一的标识符作为 `key`，例如项的唯一 `id`。

```html
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

使用项的唯一 `id` 作为 `key` 可以确保每个项在更新时都能被正确地识别和重新渲染。

请注意，`key` 应该是唯一且稳定的。不建议使用随机数或索引等不稳定的值作为 `key`。

### v-for 的 diff 算法

Vue 使用 diff 算法来比较新旧 VNode，并最小化 DOM 的操作。通过 `key` 属性，Vue 可以在更新时更高效地复用已有的 DOM 元素，减少不必要的重新渲染和重绘。

通过为 `v-for` 的每个项提供唯一且稳定的 `key`，可以帮助 Vue 更好地处理列表的更新。
