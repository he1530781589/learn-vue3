# Vue脚手架

Vue脚手架是一种用于快速搭建Vue.js项目的工具，它提供了开发模式、项目目录结构和一些工具配置等功能，使得Vue项目的创建和开发更加便捷。下面是关于Vue脚手架的内容：

## Vue的开发模式

Vue的开发模式可以分为两种：

* HTML模式：直接在HTML文件中使用Vue，将Vue实例绑定到一个DOM元素上，并通过模板语法将数据渲染到视图中。

* 单文件组件模式：使用.vue文件，将模板、样式和脚本组织在一个文件中，使得每个组件都具有独立的结构，便于维护和复用。

## Vue CLI安装和使用

Vue CLI是官方提供的Vue脚手架工具，用于创建、管理和构建Vue项目。安装和使用Vue CLI的步骤如下：

1. 全局安装Vue CLI：

   ```bash
   npm install -g @vue/cli
   ```

2. 创建一个新的Vue项目：

   ```bash
   vue create my-project
   ```

   在创建过程中，可以选择使用默认的配置或手动选择配置项，例如选择项目的特性、插件、预设等。

3. 进入项目目录：

   ```bash
   cd my-project
   ```

4. 启动开发服务器：

   ```bash
   npm run serve
   ```

   这将启动一个本地开发服务器，用于实时预览和调试项目。

## Vue项目目录结构

Vue CLI创建的项目通常具有以下目录结构：

```
my-project
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   ├── components
│   ├── views
│   ├── App.vue
│   └── main.js
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
├── vue.config.js
└── ...

```

其中，重要的目录和文件包括：

* `public`：存放静态资源和HTML模板文件。

* `src`：存放源代码和组件。

    * `assets`：存放项目的静态资源，如图片、样式文件等。

    * `components`：存放通用组件。

    * `views`：存放页面级组件。

    * `App.vue`：根组件，作为整个应用的入口。

    * `main.js`：应用的入口文件，用于创建Vue实例并挂载根组件。

* `.gitignore`：Git版本控制忽略文件列表。

* `babel.config.js`：Babel配置文件，用于转译JavaScript代码。

* `package.json`：项目的配置信息和依赖项管理文件。

* `package-lock.json`：在使用npm包管理器时，每次安装、更新或删除包时，都会自动生成package-lock.json文件。该文件用于记录项目依赖的确切版本和依赖树结构，以确保在不同的环境中安装相同的依赖。

* `jsconfig.json`：如果您使用的是JavaScript而不是TypeScript，可以在项目根目录下创建jsconfig.json文件来配置JavaScript语言服务。该文件用于提供IDE支持、代码跳转和自动完成等功能。

* `README.md`：README.md文件通常用于项目的文档和说明。您可以在该文件中提供项目的概述、安装指南、使用示例、贡献指南等信息，方便其他开发者理解和使用您的项目。

* `vue.config.js`：如果您需要对Vue CLI的默认配置进行自定义，可以在项目根目录下创建vue.config.js文件。该文件用于配置一些构建工具和开发服务器的选项，例如自定义webpack配置、配置代理、设置打包路径等。

## browserslistrc文件作用（了解）

`browserslistrc`文件是一个配置文件，用于指定项目的目标浏览器和Node.js版本。该文件通常位于项目根目录下，用于告诉一些工具（如Autoprefixer）在处理CSS和JavaScript时需要考虑哪些浏览器的兼容性。

## 从main.js入口开始，如何一步步创建自己的组件

在Vue项目中，从`main.js`入口文件开始，可以一步步创建自己的组件，下面是一种常见的创建组件的方式：

1. 在`src`目录下创建一个名为`components`的文件夹，用于存放组件文件。

2. 在`components`文件夹中创建一个名为`App.vue`的文件，作为根组件。

   ```html
   <template>
     <div>
       <h1>Hello, Vue!</h1>
       <my-component></my-component>
     </div>
   </template>
   
   <script>
   import MyComponent from './MyComponent.vue';
   
   export default {
     components: {
       MyComponent
     }
   };
   </script>
   ```

   在上述代码中，根组件`App.vue`使用了一个名为`MyComponent`的自定义组件，并将其注册为根组件的子组件。

3. 在`components`文件夹中创建一个名为`MyComponent.vue`的文件，作为自定义组件。

   ```html
   <template>
     <div>
       <h2>{{ title }}</h2>
       <p>{{ content }}</p>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         title: 'My Component',
         content: 'This is my custom component.'
       };
     }
   };
   </script>
   ```

   在上述代码中，自定义组件`MyComponent.vue`定义了`title`和`content`两个数据属性，并在模板中使用插值语法进行渲染。

通过以上步骤，您可以在`main.js`入口文件创建根组件，并在根组件中使用自定义组件。这是一种基本的组件创建流程，您可以根据项目的需求和复杂性来创建更多的组件。
