如果你开发了一套H5，不仅想要在移动端运行，还想要在PC、Ipad上使用，那么就安装它。
它会在PC端的网页中，自动给HTML标签注入max-width:640px样式。为了更好的视觉呈现，
就像在移动端看到地一样，我们还要安装以下工具。

### 适配工具安装


为了更好地适配，最佳方案是采用Rem单位，搭配使用已下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值


### PostCSS 配置


下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};

```