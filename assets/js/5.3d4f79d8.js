(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{309:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},318:function(t,e,n){"use strict";var i=n(0);e.a=new i.a},319:function(t,e,n){"use strict";n(310),n(96),n(97);var i=[{label:"v3 (stable)",version:"3.x",aliases:["3","stable"]},{label:"v2",version:"2.x",aliases:["2"]}],a=i[0];e.a={data:function(){return{branches:i,defaultBranch:a,selectedBranch:a.version}},mounted:function(){this.selectedBranch=localStorage.getItem("branch-version")||a.version},methods:{getBranch:function(t){return this.branches.find((function(e){return e.aliases.includes(t)||e.version===t}))},updateBranch:function(t){this.selectedBranch=t}}}},320:function(t,e,n){var i=n(25),a="["+n(309)+"]",r=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},327:function(t,e,n){var i=n(1),a=n(328);i({global:!0,forced:parseInt!=a},{parseInt:a})},328:function(t,e,n){var i=n(4),a=n(320).trim,r=n(309),o=i.parseInt,s=/^[+-]?0[Xx]/,c=8!==o(r+"08")||22!==o(r+"0x16");t.exports=c?function(t,e){var n=a(String(t));return o(n,e>>>0||(s.test(n)?16:10))}:o},350:function(t,e,n){},380:function(t,e,n){n(1)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},381:function(t,e,n){var i=n(19),a=Date.prototype,r=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&i(a,"toString",(function(){var t=o.call(this);return t==t?r.call(this):"Invalid Date"}))},382:function(t,e,n){"use strict";n(350)},390:function(t,e,n){"use strict";n.r(e);n(380),n(381),n(327);var i=n(349),a=n.n(i),r=n(318),o={mixins:[n(319).a],data:function(){return{hideUntil:null}},computed:{showNotice:function(){return a.a.satisfies(a.a.coerce("2.x"),this.selectedBranch)&&(!this.hideUntil||Date.now()>parseInt(this.hideUntil))}},mounted:function(){r.a.$on("branch-update",this.updateBranch),this.hideUntil=localStorage.getItem("oldversion-notice-expiration")},destroyed:function(){r.a.$off("branch-update",this.updateBranch)},methods:{dismiss:function(){var t=Date.now()+6048e5;this.hideUntil=t,localStorage.setItem("oldversion-notice-expiration",t)}}},s=(n(382),n(45)),c=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.showNotice?e("div",{staticClass:"oldversion-notice"},[this._v("\n\tWe no longer provide support, maintain bug fixes or new features for v2 of gcommands. Please update your bot to version 3.\n")]):this._e()}),[],!1,null,null,null);e.default=c.exports}}]);