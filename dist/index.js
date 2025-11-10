"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=t(function(C,d){
function _(e,r,u,n,i,s,R){var a,q,v;if(e<=0)return i;if(a=R,e===1)return n?i[a]=u:i[a]=r,i;for(i[a]=r,a+=s,n&&(e-=1),q=(u-r)/e,v=1;v<e;v++)i[a]=r+q*v,a+=s;return n&&(i[a]=u),i}d.exports=_
});var o=t(function(D,l){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=f();function b(e,r,u,n,i,s){return O(e,r,u,n,i,s,E(e,s))}l.exports=b
});var j=t(function(F,y){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),h=f();g(p,"ndarray",h);y.exports=p
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),c,m=w(k(__dirname,"./native.js"));z(m)?c=A:c=m;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
