## Options API

### 计算属性 computed

计算属性是Vue.js中一种用于处理复杂数据逻辑的方式。当数据依赖于其他属性或需要进行复杂的计算时，可以使用计算属性来实现。下面是关于计算属性的内容：

#### 复杂数据的处理方式

在处理复杂数据时，可以使用以下两种方式：

* 使用mustache插值语法并在模板中编写逻辑。

  ```html
  <template>
    <div>
      {{ message.length > 5 ? 'Message is too long' : 'Message is short' }}
    </div>
  </template>
  ```

  上述代码中，通过在模板中编写逻辑，判断`message`的长度是否大于5，并显示相应的提示信息。

* 使用methods方法完成逻辑。

  ```html
  <template>
    <div>
      {{ getMessageStatus() }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, World!'
      };
    },
    methods: {
      getMessageStatus() {
        return this.message.length > 5 ? 'Message is too long' : 'Message is short';
      }
    }
  };
  </script>
  ```

  上述代码中，通过在Vue实例的`methods`选项中定义`getMessageStatus`方法来完成逻辑，并在模板中调用该方法获取相应的提示信息。

#### 计算属性用法

计算属性可以通过在Vue实例的`computed`选项中定义一个或多个计算属性来使用。下面是一个计算属性的示例：

```html
<template>
  <div>
    {{ fullname }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullname() {
      return this.firstName + ' ' + this.lastName;
    }
  }
};
</script>
```

在上述代码中，通过在`computed`选项中定义`fullname`计算属性，将`firstName`和`lastName`拼接成完整的姓名，并在模板中直接使用`fullname`获取完整的姓名。

#### computed和methods区别

计算属性和methods方法都可以用于处理逻辑，但它们之间有一些区别：

* 计算属性底层会进行缓存，只有当依赖的属性发生变化时，才会重新计算。这意味着如果多次使用了计算属性，而其依赖的属性没有发生变化，那么只会执行一次计算，从而提升性能。

* methods方法没有缓存机制，每次在模板中使用时都会执行一次方法调用。

#### computed的完整写法

计算属性的完整写法可以使用`get`和`set`两个函数，分别用于获取计算属性的值和设置计算属性的值。下面是完整写法的示例：

```javascript
computed: {
  fullname: {
    get() {
      return this.firstName + ' ' + this.lastName;
    },
    set(value) {
      const [firstName, lastName] = value.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
}
```

在上述代码中，通过使用`get`函数获取计算属性的值，并使用`set`函数设置计算属性的值。

### 侦听器 watch

侦听器（watch）是Vue.js中一种用于监听数据变化并执行相应操作的机制。当某个数据发生变化时，可以通过侦听器来执行一些副作用代码或触发一些特定的操作。下面是关于侦听器的内容：

#### 基本侦听watch

可以通过在Vue实例的`watch`选项中定义一个或多个侦听器来使用。下面是一个基本侦听器的示例：

```javascript
watch: {
  message(newValue, oldValue) {
    console.log('Message changed from', oldValue, 'to', newValue);
  }
}
```

在上述代码中，定义了一个侦听器来监听`message`属性的变化，并在属性变化时打印出旧值和新值。

#### 注意：对象类型

当需要侦听对象类型的属性时，由于Vue使用了Proxy对象来实现侦听，侦听器函数的第一个参数将是一个代理对象。如果需要获取原始的对象值，可以使用`Vue.toRaw`方法。示例如下：

```javascript
watch: {
  userInfo: {
    handler(newValue, oldValue) {
      const rawValue = Vue.toRaw(newValue);
      console.log('User info changed', oldValue, 'to', rawValue);
    },
    deep: true
  }
}
```

在上述代码中，`userInfo`是一个对象类型的属性，通过设置`deep: true`来进行深度侦听，并在属性变化时获取原始的对象值。

#### 侦听的选项

在定义侦听器时，可以设置一些选项来控制侦听器的行为，例如：

* `deep`：用于开启深度侦听，当被侦听的属性是一个对象或数组时，深度侦听可以递归地监听其内部的属性变化。

* `immediate`：用于立即触发侦听器的回调函数，在侦听器被创建后立即执行一次。

#### 其他的写法

除了在`watch`选项中定义侦听器外，还可以在`created`钩子函数中使用`this.$watch`方法来创建侦听器。示例如下：

```javascript
created() {
  this.$watch('message', (newValue, oldValue) => {
    console.log('Message changed from', oldValue, 'to', newValue);
  });
}
```

在上述代码中，通过`this.$watch`方法在`created`钩子函数中创建侦听器，监听`message`属性的变化。

