!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e){let t=document.createDocumentFragment();return e.forEach(function(e,n){let o=document.createElement("p");o.append(e.id);let d=document.createElement("p");d.append(e.title);let l=document.createElement("div");l.id="column_body_"+e.id;let c=document.createElement("div");c.append(o,d),c.append(l),c.className="col-sm",c.id="columnId_"+e.id,function(e){let t=document.createElement("option");t.setAttribute("value",e),t.append(e),document.querySelector("#selectId").append(t)}(e.id),t.appendChild(c)}),n=t,void document.querySelector("#row").appendChild(n);var n}function d(e){e.target.style.backgroundColor="yellow";let t=e.target.parentElement;fetch("http://localhost:8089/api/card/"+t.id,{method:"DELETE"}).then(t.remove())}function l(e){let t=e.target.parentNode;t=t.id;let n=document.getElementById("infoIdCard"),o=document.getElementById("infoIdColumn"),d=document.getElementById("titleValue"),l=document.getElementById("goPATCH");fetch("http://localhost:8089/api/card/"+t,{method:"GET"}).then(e=>e.json()).then(function(e){d.value=e.title,n.innerText="id карточки "+e.id,o.innerText="id колонки "+e.columnId,l.setAttribute("value",e.id)}),c()}function c(){let e=document.getElementById("bodyPatch");"none"==e.style.display?e.style.display="block":e.style.display="none"}function a(e){1==Array.isArray(e)?e.forEach(e=>i(e)):i(e)}function i(e){let t=document.createElement("div");t.setAttribute("draggable","true"),t.id=e.id,t.className="col-sm";let n=document.createElement("div");n.className="content";let o=document.createElement("p");o.className="textContent",o.append(e.title);let c=document.createElement("button");c.className="deleteBox",c.append("Edit"),c.addEventListener("click",l);let a=document.createElement("button");a.className="deleteBox",a.append("X"),a.addEventListener("click",d),n.append(o),t.append(a),t.append(c),t.append(n),document.getElementById("column_body_"+e.columnId).appendChild(t)}function r(){fetch("http://localhost:8089/api/column",{method:"GET"}).then(e=>e.json()).then(e=>o(e)).then(fetch("http://localhost:8089/api/card",{method:"GET"}).then(e=>e.json()).then(e=>a(e)))}function u(e){e.preventDefault();let t=document.getElementById("bodyPost");"none"==t.style.display?t.style.display="block":t.style.display="none"}n.r(t),document.querySelector("#conteiner").addEventListener("click",function(){r(),function(){let e=document.createElement("button");e.append("Add card"),e.addEventListener("click",u),document.body.insertBefore(e,document.body.firstChild)}()},{once:!0}),document.getElementById("closeFormPost").addEventListener("click",u),document.getElementById("closeFormPatch").addEventListener("click",c),document.getElementById("goPOST").addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("formPOST");fetch("http://localhost:8089/api/card",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({columnId:parseInt(t.columnId.value,10),title:t.title.value})}).then(e=>e.json()).then(e=>a(e))}),document.getElementById("goPATCH").addEventListener("click",function(e){let t=e.target.value,n=document.getElementById("titleValue");fetch("http://localhost:8089/api/card/"+t,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:n.value})}).then(e=>e.json()).then(function(e){document.getElementById(e.id).remove(),a(e)})})}]);