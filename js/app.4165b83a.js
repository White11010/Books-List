(function(){"use strict";var t={5716:function(t,o,e){var n=e(9963),a=e(6252);function s(t,o){const e=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(e)}var i=e(3744);const r={},u=(0,i.Z)(r,[["render",s]]);var l=u,c=e(2119);const d={class:"books"},b={class:"wrapper"},p={class:"books__actions"},_=(0,a.Uk)("Добавить");function k(t,o,e,n,s,i){const r=(0,a.up)("router-link"),u=(0,a.up)("books-list");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",b,[(0,a._)("div",p,[(0,a.Wm)(r,{to:"/new",class:"base-button base-button--primary"},{default:(0,a.w5)((()=>[_])),_:1})]),(0,a.Wm)(u)])])}const v=t=>((0,a.dD)("data-v-37e70381"),t=t(),(0,a.Cn)(),t),f={class:"books__table"},m=v((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Название"),(0,a._)("th",null,"Автор"),(0,a._)("th",null,"Дата добавления"),(0,a._)("th",null,"Действия")])],-1)));function h(t,o,e,n,s,i){const r=(0,a.up)("books-list-item");return(0,a.wg)(),(0,a.iD)("table",f,[m,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.books,(t=>((0,a.wg)(),(0,a.j4)(r,{key:t.id,"book-data":t},null,8,["book-data"])))),128))])])}var w=e(2262),y=e(3577);const g={class:"books__item"},Z={class:"books__item-title"},D={class:"books__item-author"},B={class:"books__item-date"},S=(0,a.Uk)(" Редактировать ");function I(t,o,e,n,s,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("tr",g,[(0,a._)("td",null,[(0,a._)("p",Z,(0,y.zw)(t.bookData.title),1)]),(0,a._)("td",null,[(0,a._)("p",D,(0,y.zw)(t.bookData.author),1)]),(0,a._)("td",null,[(0,a._)("p",B,(0,y.zw)(t.bookData.date.substring(0,10)),1)]),(0,a._)("td",null,[(0,a.Wm)(r,{class:"books__edit-button",to:{name:"editBook",params:{id:t.bookData.id}}},{default:(0,a.w5)((()=>[S])),_:1},8,["to"])])])}var O=(0,a.aZ)({name:"BooksListItem",props:["bookData"]});const V=(0,i.Z)(O,[["render",I],["__scopeId","data-v-d861e556"]]);var j=V,x=e(3781),U=e(714),W=e(9614),C=e(8829),F=e(2575),R=new WeakMap,L=new WeakSet;class E{constructor(){(0,x.Z)(this,L),(0,U.Z)(this,R,{writable:!0,value:void 0});const t=localStorage.getItem("books");(0,F.Z)(this,R,null===t?[]:JSON.parse(t))}get(){return(0,C.Z)(this,R)}getById(t){const o=(0,C.Z)(this,R).findIndex((o=>o.id.toString()===t));return(0,C.Z)(this,R)[o]}add(t){if(!(0,W.Z)(this,L,N).call(this,t))return t.id=0===(0,C.Z)(this,R).length?1:(0,C.Z)(this,R)[(0,C.Z)(this,R).length-1].id+1,(0,C.Z)(this,R).push(t),void localStorage.setItem("books",JSON.stringify((0,C.Z)(this,R)));throw"Book with these title and author already exists"}edit(t){const o=(0,C.Z)(this,R).findIndex((o=>o.id===t.id));(0,C.Z)(this,R)[o]=t,localStorage.setItem("books",JSON.stringify((0,C.Z)(this,R)))}}function N(t){return(0,C.Z)(this,R).some((o=>o.title===t.title&&o.author===t.author))}var z=new E,H=(0,a.aZ)({name:"BooksList",components:{BooksListItem:j},setup(){const t=(0,w.iH)([]);return(0,a.bv)((()=>{t.value=z.get()})),{books:t}}});const J=(0,i.Z)(H,[["render",h],["__scopeId","data-v-37e70381"]]);var q=J,K=(0,a.aZ)({name:"BooksListView",components:{BooksList:q}});const P=(0,i.Z)(K,[["render",k],["__scopeId","data-v-7c24d3c6"]]);var T=P;const M={class:"books"},Y={class:"wrapper"},A={class:"books__creation"};function G(t,o,e,n,s,i){const r=(0,a.up)("book-creation-form");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",Y,[(0,a._)("div",A,[(0,a.Wm)(r)])])])}const Q=t=>((0,a.dD)("data-v-042c1235"),t=t(),(0,a.Cn)(),t),X=Q((()=>(0,a._)("h3",null,"Новая книга",-1))),$={class:"books__form-actions"},tt=(0,a.Uk)("Назад"),ot=["disabled"];function et(t,o,e,s,i,r){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:o[2]||(o[2]=(...o)=>t.onSubmit&&t.onSubmit(...o)),class:"books__creation-form"},[X,(0,a.wy)((0,a._)("input",{class:"books__creation-input base-input",type:"text",placeholder:"Введите название","onUpdate:modelValue":o[0]||(o[0]=o=>t.titleRef=o)},null,512),[[n.nr,t.titleRef,void 0,{trim:!0}]]),(0,a.wy)((0,a._)("input",{class:"books__creation-input base-input",type:"text",placeholder:"Укажите автора","onUpdate:modelValue":o[1]||(o[1]=o=>t.authorRef=o)},null,512),[[n.nr,t.authorRef,void 0,{trim:!0}]]),(0,a._)("div",$,[(0,a.Wm)(u,{to:"/",class:"books__creation-button base-button base-button--secondary"},{default:(0,a.w5)((()=>[tt])),_:1}),(0,a._)("button",{class:"books__creation-button base-button base-button--primary",type:"submit",disabled:!t.isValid}," Добавить ",8,ot)])],32)}var nt=(0,a.aZ)({name:"BookCreationForm",setup(){const t=(0,c.tv)(),o=(0,w.qj)({title:"",author:"",date:null}),e=(0,w.Vh)(o,"title"),n=(0,w.Vh)(o,"author"),s=(0,w.Vh)(o,"date"),i=(0,a.Fl)((()=>""!==e.value&&""!==n.value)),r=e=>{if(e.preventDefault(),i.value){s.value=(new Date).toISOString();try{z.add(o),t.push("/")}catch(n){alert(n)}}};return{bookData:o,titleRef:e,authorRef:n,dateRef:s,onSubmit:r,isValid:i}}});const at=(0,i.Z)(nt,[["render",et],["__scopeId","data-v-042c1235"]]);var st=at,it=(0,a.aZ)({name:"BooksNewView",components:{BookCreationForm:st}});const rt=(0,i.Z)(it,[["render",G],["__scopeId","data-v-5e2dc6b4"]]);var ut=rt;const lt={class:"books"},ct={class:"wrapper"},dt={class:"books__edit"};function bt(t,o,e,n,s,i){const r=(0,a.up)("book-edit-form");return(0,a.wg)(),(0,a.iD)("div",lt,[(0,a._)("div",ct,[(0,a._)("div",dt,[void 0!==t.book.title?((0,a.wg)(),(0,a.j4)(r,{key:0,"book-data":t.book},null,8,["book-data"])):(0,a.kq)("",!0)])])])}const pt=t=>((0,a.dD)("data-v-6f5c5de4"),t=t(),(0,a.Cn)(),t),_t=pt((()=>(0,a._)("h3",null,"Редактирование книги",-1))),kt={class:"book__form-actions"},vt=(0,a.Uk)("Назад"),ft=["disabled"];function mt(t,o,e,s,i,r){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("form",{class:"book__edit-form",onSubmit:o[2]||(o[2]=(...o)=>t.onSubmit&&t.onSubmit(...o))},[_t,(0,a.wy)((0,a._)("input",{class:"book__edit-input base-input",type:"text","onUpdate:modelValue":o[0]||(o[0]=o=>t.book.title=o)},null,512),[[n.nr,t.book.title,void 0,{trim:!0}]]),(0,a.wy)((0,a._)("input",{class:"book__edit-input base-input",type:"text","onUpdate:modelValue":o[1]||(o[1]=o=>t.book.author=o)},null,512),[[n.nr,t.book.author,void 0,{trim:!0}]]),(0,a._)("div",kt,[(0,a.Wm)(u,{to:"/",class:"book__edit-button base-button base-button--secondary"},{default:(0,a.w5)((()=>[vt])),_:1}),(0,a._)("button",{class:"book__edit-button base-button base-button--primary",type:"submit",disabled:!t.isValid}," Сохранить ",8,ft)])],32)}var ht=(0,a.aZ)({name:"BooksEditForm",props:["bookData"],setup(t){const o=(0,c.tv)(),{bookData:e}=(0,w.BK)(t),n=(0,a.Fl)((()=>""!==e.value.title&&""!==e.value.author)),s=t=>{if(t.preventDefault(),n.value)try{z.edit(e.value),o.push("/")}catch(a){alert(a)}};return{book:e,onSubmit:s,isValid:n}}});const wt=(0,i.Z)(ht,[["render",mt],["__scopeId","data-v-6f5c5de4"]]);var yt=wt,gt=(0,a.aZ)({name:"EditBookView",components:{BookEditForm:yt},setup(){const t=(0,c.yj)(),o=(0,w.iH)({});return(0,a.bv)((()=>{o.value=z.getById(t.params.id)})),{book:o}}});const Zt=(0,i.Z)(gt,[["render",bt],["__scopeId","data-v-95e084cc"]]);var Dt=Zt;const Bt=[{path:"/",name:"booksList",component:T},{path:"/new",name:"newBook",component:ut},{path:"/edit/:id",name:"editBook",component:Dt,props:!0}],St=(0,c.p7)({history:(0,c.r5)(),routes:Bt});var It=St;(0,n.ri)(l).use(It).mount("#app")}},o={};function e(n){var a=o[n];if(void 0!==a)return a.exports;var s=o[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,n,a,s){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],s=t[c][2];for(var r=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(r=!1,s<i&&(i=s));if(r){t.splice(c--,1);var l=a();void 0!==l&&(o=l)}}return o}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,a,s]}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var a,s,i=n[0],r=n[1],u=n[2],l=0;if(i.some((function(o){return 0!==t[o]}))){for(a in r)e.o(r,a)&&(e.m[a]=r[a]);if(u)var c=u(e)}for(o&&o(n);l<i.length;l++)s=i[l],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},n=self["webpackChunkbooks_list"]=self["webpackChunkbooks_list"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5716)}));n=e.O(n)})();
//# sourceMappingURL=app.4165b83a.js.map