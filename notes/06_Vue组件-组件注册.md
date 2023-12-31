## 组件化的基础

### 组件化的思想

组件化是一种将页面拆分为独立、可复用和可维护的组件的开发思想。它将页面划分为多个独立的模块，每个模块负责特定的功能和交互，并通过组合这些模块来构建复杂的应用程序。组件化的思想有助于提高代码的可维护性、复用性和可测试性，同时也提升了开发效率。

### 注册全局组件

在Vue中，可以通过`app.component`方法来注册全局组件。下面是注册全局组件的示例代码：

```javascript
app.component("my-cpn", {
  // 组件选项
});
```

在上述代码中，使用`app.component`方法注册了一个名为`my-cpn`的全局组件，并提供了组件的选项。通过这种方式，该组件可以在整个应用程序的任何地方使用。

### 注册局部组件

除了注册全局组件，还可以在组件的选项中使用`components`属性注册局部组件。下面是注册局部组件的示例代码：

```javascript
const App = {
  components: {
    "my-cpn": {
      // 组件选项
    }
  },
  // 其他组件选项
};
```

在上述代码中，通过在组件的选项中使用`components`属性来注册局部组件。该组件仅在当前组件中可用，不能在其他组件中使用。

通过全局和局部组件的注册，可以在Vue应用程序中使用不同的组件来构建界面，并实现组件的复用和模块化开发。
