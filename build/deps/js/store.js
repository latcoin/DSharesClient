!function(){function a(){try{return i in g&&g[i]}catch(a){return!1}}function b(){try{return j in g&&g[j]&&g[j][g.location.hostname]}catch(a){return!1}}function c(a){return function(){var b=Array.prototype.slice.call(arguments,0);b.unshift(e),l.appendChild(e),e.addBehavior("#default#userData"),e.load(i);var c=a.apply(f,b);return l.removeChild(e),c}}function d(a){return a.replace(o,"___")}var e,f={},g=window,h=g.document,i="localStorage",j="globalStorage",k="__storejs__";if(f.disabled=!1,f.set=function(){},f.get=function(){},f.remove=function(){},f.clear=function(){},f.transact=function(a,b,c){var d=f.get(a);null==c&&(c=b,b=null),"undefined"==typeof d&&(d=b||{}),c(d),f.set(a,d)},f.getAll=function(){},f.serialize=function(a){return JSON.stringify(a)},f.deserialize=function(a){if("string"!=typeof a)return void 0;try{return JSON.parse(a)}catch(b){return a||void 0}},a())e=g[i],f.set=function(a,b){return void 0===b?f.remove(a):(e.setItem(a,f.serialize(b)),b)},f.get=function(a){return f.deserialize(e.getItem(a))},f.remove=function(a){e.removeItem(a)},f.clear=function(){e.clear()},f.getAll=function(){for(var a={},b=0;b<e.length;++b){var c=e.key(b);a[c]=f.get(c)}return a};else if(b())e=g[j][g.location.hostname],f.set=function(a,b){return void 0===b?f.remove(a):(e[a]=f.serialize(b),b)},f.get=function(a){return f.deserialize(e[a]&&e[a].value)},f.remove=function(a){delete e[a]},f.clear=function(){for(var a in e)delete e[a]},f.getAll=function(){for(var a={},b=0;b<e.length;++b){var c=e.key(b);a[c]=f.get(c)}return a};else if(h.documentElement.addBehavior){var l,m;try{m=new ActiveXObject("htmlfile"),m.open(),m.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'),m.close(),l=m.w.frames[0].document,e=l.createElement("div")}catch(n){e=h.createElement("div"),l=h.body}var o=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");f.set=c(function(a,b,c){return b=d(b),void 0===c?f.remove(b):(a.setAttribute(b,f.serialize(c)),a.save(i),c)}),f.get=c(function(a,b){return b=d(b),f.deserialize(a.getAttribute(b))}),f.remove=c(function(a,b){b=d(b),a.removeAttribute(b),a.save(i)}),f.clear=c(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(i);for(var c,d=0;c=b[d];d++)a.removeAttribute(c.name);a.save(i)}),f.getAll=c(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(i);for(var c,d={},e=0;c=b[e];++e)d[c]=f.get(c);return d})}try{f.set(k,k),f.get(k)!=k&&(f.disabled=!0),f.remove(k)}catch(n){f.disabled=!0}f.enabled=!f.disabled,"undefined"!=typeof module&&"function"!=typeof module?module.exports=f:"function"==typeof define&&define.amd?define(f):this.store=f}();