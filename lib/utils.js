var _ = exports;

_.type = function (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
}
//下面这两种使用严格等于
_.isArray = function isArray(list) {
    return _.type(list) === 'Array';
}

_.isString = function isString(list) {
    return _.type(list) === 'String';
}

_.each = function each(array, fn) {
    for (var i = 0, len = array.length; i < len; i++) {
        fn(array[i],i);
    }
}

_.toArray = function toArray(listLike) {
    if (!listLike) {
        return [];
    }
    var list = [];
    for (var i = 0,len = listLike.length; i < len; i++) {
        list.push(listLike[i]);
    }

    return list;
}

_.setAttr = function setAttr(node,key,value) {
    switch(key){
        case 'style':
            node.style.cssText = value;
            break;

        case 'value':
            var tagName = node.tagName || '';
            //HTML中，tagName属性的返回值始终是大写的,为了和html标签中的书写方式一致变为小写
            tagName = tagName.toLowerCase();
            if (tagName === 'input' || tagName === 'textArea') {
                //只有textArea和input有value
                node.value = 'value';
            }else{
                //如果node不是input或textArea，使用原生的setAttribute()方法
                node.setAttribute(key,value);
            }
            break;

        default:
            node.setAttribute(key, value);
            break;
    }
}