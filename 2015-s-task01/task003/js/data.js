function addEvent(ele, type, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handler);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, handler);
    }
}

function removeClass(node, name) {
    if (node.className) {
        var arr = node.className.split(/\s+/g);
        for (var i = 0, l = arr.length; i < l; i += 1) {
            if (arr[i] === name) {
                arr.slice(i, 1);
                break;
            }
        }
        node.className = arr.join(" ");
    }
    return;
}

function addClass(node, name) {
    if (node.className) {
        var arr = node.className.split(/\s+/g);
        for (var i = 0, l = arr.length; i < l; i += 1) {
            if (arr[i] === name) {
                return;
            }
        }
        node.className = [node.className, name].join(" ");
    } else {
        node.className = name;
    }
}