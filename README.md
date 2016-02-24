# Virtual-DOM-Learning
学习 @livoras 的文章自己实现一个Virtual DOM

## 使用说明
将`dist`中的`bundle.js`引入html

```javascript
var el = vdl.el;
var diff = vdl.diff;
var patch = vdl.patch;

//Use el(tagName, [properties], children) to create a virtual dom tree

var tree = el('div',{id:'container'},[el('h1',['simple virtual dom'])]); 

//generate a real dom from virtual dom

var root = tree.render();

//generate another different virtual dom tree

var newTree = el('div',{id:'container'},[el('h1',['New virtual dom'])]); 

//diff two virtual dom
var patches = diff(tree, newTree);

//apply patches

patch(root, patches);
```
##例子
`/example/`

    
