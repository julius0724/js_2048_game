var r=document.querySelector(".game-field"),e=document.querySelector(".game-score"),n=document.querySelector(".button"),t=document.querySelector(".message-start"),a=document.querySelector(".message-win"),o=document.querySelector(".message-lose"),c=0,i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function u(){for(var r=.9>Math.random()?2:4;s();){var e=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());if(0===i[e][n]){i[e][n]=r;break}}f()}function s(){for(var r=0;r<4;r++)if(i[r].includes(0))return!0;return!1}function f(){for(var n=0;n<4;n++)for(var t=0;t<4;t++){var u=r.rows[n].cells[t],f=i[n][t];u.innerText="",u.className="field-cell",f>0&&(u.innerText=f,u.classList.add("field-cell--".concat(f)))}i.some(function(r){return r.some(function(r){return 2048===r})})&&a.classList.remove("hidden"),e.innerText=c,function(){if(s())return!1;for(var r=0;r<4;r++)for(var e=0;e<3;e++)if(i[r][e]===i[r][e+1])return!1;for(var n=0;n<3;n++)for(var t=0;t<4;t++)if(i[n][t]===i[n+1][t])return!1;return!0}()&&o.classList.remove("hidden")}n.addEventListener("click",function(){n.classList.replace("start","restart"),n.innerText="Restart",t.classList.add("hidden"),o.classList.add("hidden"),a.classList.add("hidden"),i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=0,u(),u(),f()});var l=function(r){var e=r;return e=e[0].map(function(r,n){return e.map(function(r){return r[n]})})},d=function(r){for(var e=r.filter(function(r){return 0!==r}),n=0;n<e.length-1;n++)e[n]===e[n+1]&&(e[n]*=2,c+=e[n],e[n+1]=0);var t=e.filter(function(r){return 0!==r}),a=Array(4-t.length).fill(0);return t.concat(a)},v=function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=0;e<4;e++){var n=r[e].slice();n=d(n),r[e]=n}return r},m=function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=0;e<4;e++){var n=r[e].slice().reverse();n=d(n),r[e]=n.reverse()}return r},h=function(){var r=v(l(i));i=l(r)},g=function(){var r=m(l(i));i=l(r)};document.addEventListener("keyup",function(r){var e=i.map(function(r){return r.slice()});switch(r.preventDefault(),r.code){case"ArrowUp":h();break;case"ArrowRight":m();break;case"ArrowDown":g();break;case"ArrowLeft":v()}(function(r,e){for(var n=0;n<4;n++)for(var t=0;t<4;t++)if(r[n][t]!==e[n][t])return!0;return!1})(i,e)&&u(),f()});
//# sourceMappingURL=index.6a80dd60.js.map
