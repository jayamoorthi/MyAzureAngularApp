(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9nNT":function(n,l,u){"use strict";u.r(l);var t=u("keVe"),e=function(){return function(){}}(),o=u("fYis"),i=u("TOqr"),r=u("ddV7"),c=function(){function n(n,l){this.authService=n,this.router=l,this.setMessage()}return n.prototype.setMessage=function(){this.message="Logged "+(this.authService.isLoggedIn?"in":"out")},n.prototype.login=function(){var n=this;this.message="Trying to log in ...",this.authService.login().subscribe(function(){if(n.setMessage(),n.authService.isLoggedIn){var l=n.authService.redirectUrl?n.router.parseUrl(n.authService.redirectUrl):"/admin";n.router.navigateByUrl(l,{queryParamsHandling:"preserve",preserveFragment:!0})}})},n.prototype.logout=function(){this.authService.logout(),this.setMessage()},n}(),s=u("X+PR"),a=t.mb({encapsulation:0,styles:[[""]],data:{}});function b(n){return t.Fb(0,[(n()(),t.ob(0,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},null,null)),(n()(),t.Db(-1,null,["Login"]))],null,null)}function g(n){return t.Fb(0,[(n()(),t.ob(0,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logout()&&t),t},null,null)),(n()(),t.Db(-1,null,["Logout"]))],null,null)}function v(n){return t.Fb(0,[(n()(),t.ob(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["LOGIN"])),(n()(),t.ob(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Db(3,null,["",""])),(n()(),t.ob(4,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,b)),t.nb(6,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,g)),t.nb(8,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,6,0,!u.authService.isLoggedIn),n(l,8,0,u.authService.isLoggedIn)},function(n,l){n(l,3,0,l.component.message)})}function f(n){return t.Fb(0,[(n()(),t.ob(0,0,null,null,1,"app-login",[],null,null,null,v,a)),t.nb(1,49152,null,0,c,[r.a,s.k],null,null)],null,null)}var p=t.kb("app-login",c,f,{},{},[]),h=u("mEgG"),d=function(){return function(){}}();u.d(l,"AuthModuleNgFactory",function(){return m});var m=t.lb(e,[],function(n){return t.ub([t.vb(512,t.j,t.bb,[[8,[o.a,p]],[3,t.j],t.x]),t.vb(4608,i.m,i.l,[t.u,[2,i.s]]),t.vb(4608,h.j,h.j,[]),t.vb(1073742336,i.c,i.c,[]),t.vb(1073742336,h.h,h.h,[]),t.vb(1073742336,h.c,h.c,[]),t.vb(1073742336,s.n,s.n,[[2,s.t],[2,s.k]]),t.vb(1073742336,d,d,[]),t.vb(1073742336,e,e,[]),t.vb(1024,s.i,function(){return[[{path:"login",component:c}]]},[])])})}}]);