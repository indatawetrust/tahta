'use strict';var tahta=function(opt){var d=document.createElement('canvas'),e=d.getContext('2d');d.width=opt.size,d.height=opt.size;var h=function f(){return'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(q){var t=0|16*Math.random(),u='x'==q?t:8|3&t;return u.toString(16)})}()+'abcdef0123456789'[Math.floor(16*Math.random())],j=[],l=function g(){for(var x,q=[],t=opt.size,u=0;10>u;u++)x=Math.floor(Math.random()*opt.size/10)+10,q.length?q.reduce(function(y,z){return y+z})<opt.size&&9===u?q.push(opt.size-q.reduce(function(y,z){return y+z})):q.push(x):q.push(x);return q}();for(h=h.split(''),e.clearRect(0,0,opt.size,opt.size);0<h.length;)j.push('#'+h.splice(0,3).join(''));for(var m=0,n=0;10>n;n++){e.save(),e.beginPath();var o=l.pop();e.globalAlpha=0.75;var p=j.shift();e.fillStyle=p,e.fillRect(m,0,o,opt.size),e.fillRect(0,m,opt.size,o),m+=o,e.closePath(),e.restore()}return d.toDataURL()};
