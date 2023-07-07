## 父子组件间的通信

### 组件的嵌套关系

在Vue中，组件可以形成父子关系的嵌套结构。父组件可以包含一个或多个子组件，而子组件可以在父组件的模板中使用。

### 父传子 - props（重要）

父组件可以通过props属性将数据传递给子组件。子组件可以通过props接收来自父组件的数据，并在自己的模板中使用。

#### props传递数据

在父组件的模板中使用子组件时，可以通过props属性传递数据。下面是一个示例：

**父组件**

```vue
<template>
  <div>
    <child-component :message="parentMessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent!'
    };
  }
};
</script>
```

**子组件**

```vue
<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: ['message']
};
</script>

```
在上述代码中，父组件通过`message`属性将`parentMessage`数据传递给子组件。在子组件的模板中，可以通过props接收父组件传递的数据，并使用它。

#### 非props的attribute如何接收?

如果父组件传递给子组件的属性不是通过props属性定义的，而是作为子组件的attribute存在，可以使用`$attrs`属性来接收这些非props的attribute。下面是一个示例：

**父组件**

```html
<template>
  <div>
    <child-component title="Child Component"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
```

**子组件**

```vue
<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$attrs.title;
    }
  }
};
</script>

```

在上述代码中，父组件将`title`作为子组件的attribute传递。在子组件中，可以通过`$attrs`属性访问这个非props的attribute。

### 子传父 - $emit（重要）

子组件可以通过`$emit`方法向父组件发送自定义事件，并携带数据。父组件可以监听子组件的事件，并在事件处理函数中获取子组件传递的数据。

下面是一个子组件向父组件传递数据的示例：

```vue
<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('message', 'Hello from child!');
    }
  }
};
</script>
```

在上述代码中，子组件中的按钮点击事件触发了`sendMessage`方法，该方法通过`$emit`方法发送了一个名为`message`的自定义事件，并携带了数据。

在父组件中，可以通过监听子组件的自定义事件来获取子组件传递的数据。下面是一个父组件监听子组件事件的示例：

```html
<template>
  <div>
    <child-component @message="receiveMessage"></child-component>
    <p>Received Message: {{ receivedMessage }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      receivedMessage: ''
    };
  },
  methods: {
    receiveMessage(message) {
      this.receivedMessage = message;
    }
  }
};
</script>
```

在上述代码中，父组件通过监听子组件的`message`事件，并在事件处理函数`receiveMessage`中获取子组件传递的数据。

通过props和`$emit`，父子组件之间可以进行数据的双向通信，实现了组件之间的交互和数据传递。
