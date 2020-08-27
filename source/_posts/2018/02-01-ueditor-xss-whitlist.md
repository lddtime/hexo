---
title: 百度编辑器（ueditor）踩坑，图片转存无法使用
date: 2018-02-01 00:00:00
thumbnail: /thumbs/ueditor.png
toc: true
categories:
    - [PHP]
    - [JavaScript]
tags:
    - PHP
    - JavaScript
    - 百度编辑器
---

在使用 [百度编辑器](http://ueditor.baidu.com) 的过程中碰到了一些问题，图片转存功能无法使用，
即便是疯狂地在官方 Demo、文档、论坛甚至是 [GitHub](https://github.com/lddtime) 上也没找到理想的答案。(┗|｀O′|┛)   (真是日了狗)

<!-- more -->

### 问题描述

默认情况下，从 Word 中复制的内容粘贴在编辑器时，图片不会自动上传保存，除非单独复制粘贴图片。

但是在官方 Demo 及演示中，Word 中的图片并不会变为上图中的提示贴图，而是变为尺寸与原图比例一致的一片空白。

{% img /images/2018/ueditor.png '"title ueditor" "alt ueditor"' %}

与此雷同的一个问题是，当你插入一个锚点，点击 `html` 视图，发现标签一片空白，再切回来时锚点又不见了。

根据这点终于找到了解决的方案！ˋ( ° ▽、° )  （尴尬而不失礼貌的微笑）

### 解决办法

在配置文件 `ueditor.config.js` 的最下方有这样一组配置：

```javascript
// xss 过滤是否开启,inserthtml等操作
,xssFilterRules: true
//input xss过滤
,inputXssFilter: true
//output xss过滤
,outputXssFilter: true
// xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
,whitList: {
    a:      ['target', 'href', 'title', 'class', 'style'],
    abbr:   ['title', 'class', 'style'],
    // ... 部分省略
    i:      ['class', 'style'],
    img:    ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
    ins:    ['datetime'],
    // ... 部分省略
    video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
}
```

原来，在默认情况下 ueditor 开启了 XSS 过滤（过滤、输入过滤、输出过滤都有相应的配置开关），任何不在 `whitList` 白名单上的标签及属性都会在转换时丢失。

这就直接导致了一些需要使用特殊标签或属性的功能直接失效，比如插入音乐、插入锚点、图片转存等。

最直接的解决办法就是关闭 XSS 过滤，可以注释掉上述配置或将上述三项设为 `false`，另一种方案就是将需要的标签及属性添加到白名单。

1. 插入锚点需要给 `a` 标签添加 `name` 属性，给 `img` 标签添加 `anchorname` 属性
2. 图片转存需要给 `img` 标签添加 `word_img`、`style` 属性

其他受影响功能这里不再赘述，如需帮助请在下方留言！

### 总结

这个困扰了我好几天，甚至一心想着解决这个 BUG 给百度贡献点代码 ┑(￣Д ￣)┍

但是羊毛出在羊身上，找问题还是得找准方向，一针见血，瞬间解决！

### 参考

1. [百度编辑器（Ueditor）插入锚点功能分析及BUG修复](http://www.dqiu.net/doc/578746cd71c64)
