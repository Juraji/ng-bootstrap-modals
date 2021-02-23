(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{vYGN:function(e,s,n){"use strict";n.r(s),n.d(s,"ShadeModalModule",function(){return k});var t=n("ofXK"),a=n("tyNb"),o=n("LRne"),i=n("EY2u"),r=n("GyhO"),c=n("HDdC"),d=n("D0XW"),l=n("Y7HM");function b(e){const{subscriber:s,counter:n,period:t}=e;s.next(n),this.schedule({subscriber:s,counter:n+1,period:t},t)}var p=n("3E0/"),m=n("IzEk"),h=n("fXoL"),u=n("2Rjt"),f=n("I/2r");const g=[{path:"",component:(()=>{class e{constructor(e){this.modals=e,this.examples=[{file:"example.component.ts",contents:n("wzkc").default},{file:"app.module.ts",contents:n("1pU9").default}]}onBlockingShade(){const e=this.modals.shade('I am a blocking shade with HTML.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>');Object(o.a)(1).pipe(Object(p.a)(1e4)).subscribe(()=>e.dismiss())}onShadeWithIndeterminateProgress(){const e=this.modals.shade('I am a shade for a indeterminate task.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>',i.a);Object(o.a)(1).pipe(Object(p.a)(1e4)).subscribe(()=>e.dismiss())}onShadeWithProgress(){const e=Object(r.a)(Object(o.a)(0).pipe(Object(p.a)(2e3)),function(e=0,s=d.a){return(!Object(l.a)(e)||e<0)&&(e=0),s&&"function"==typeof s.schedule||(s=d.a),new c.a(n=>(n.add(s.schedule(b,e,{subscriber:n,counter:0,period:e})),n))}(50).pipe(Object(m.a)(100))),s=this.modals.shade("I am a shade with a progressbar.",e);e.pipe(Object(p.a)(1e3)).subscribe({complete:()=>s.dismiss()})}}return e.\u0275fac=function(s){return new(s||e)(h.Lb(u.e))},e.\u0275cmp=h.Fb({type:e,selectors:[["ng-component"]],decls:14,vars:1,consts:[[1,"container"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"mb-3"],[1,"btn","btn-primary","mr-4",3,"click"],[3,"examples"]],template:function(e,s){1&e&&(h.Rb(0,"div",0),h.Rb(1,"div",1),h.Rb(2,"div",2),h.Rb(3,"h4"),h.yc(4,"Confirm modal"),h.Qb(),h.Qb(),h.Rb(5,"div",3),h.Rb(6,"div",4),h.Rb(7,"button",5),h.bc("click",function(){return s.onBlockingShade()}),h.yc(8,"Default blocking shade with message"),h.Qb(),h.Rb(9,"button",5),h.bc("click",function(){return s.onShadeWithIndeterminateProgress()}),h.yc(10,"Shade with indeterminate progress"),h.Qb(),h.Rb(11,"button",5),h.bc("click",function(){return s.onShadeWithProgress()}),h.yc(12,"Shade with incrementing progress"),h.Qb(),h.Qb(),h.Mb(13,"app-example-code",6),h.Qb(),h.Qb(),h.Qb()),2&e&&(h.zb(13),h.ic("examples",s.examples))},directives:[f.a],encapsulation:2}),e})()}];let w=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(s){return new(s||e)},imports:[[a.c.forChild(g)],a.c]}),e})();var y=n("G7De");let k=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(s){return new(s||e)},imports:[[t.c,w,y.a,u.f]]}),e})()},wzkc:function(e,s,n){"use strict";n.r(s),s.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {concat, EMPTY, interval, of} from 'rxjs';\nimport {delay, take} from 'rxjs/operators';\n\n@Component({\n  templateUrl: './home.page.html',\n})\nexport class ShadeModalPage {\n  constructor(\n    private readonly modals: Modals\n  ) {\n  }\n\n  onBlockingShade() {\n    const message = 'I am a blocking shade with HTML.' +\n      '<br/><span class=\"text-info font-italic\">I will be dismissed in 10 seconds</span>';\n\n    const shadeRef = this.modals.shade(message);\n\n    of(1)\n      .pipe(delay(10_000))\n      .subscribe(() => shadeRef.dismiss());\n  }\n\n  onShadeWithIndeterminateProgress() {\n    const message = 'I am a shade for a indeterminate task.' +\n      '<br/><span class=\"text-info font-italic\">I will be dismissed in 10 seconds</span>';\n\n    // Note the empty observable!\n    const shadeRef = this.modals.shade(message, EMPTY);\n\n    of(1)\n      .pipe(delay(10_000))\n      .subscribe(() => shadeRef.dismiss());\n  }\n\n  onShadeWithProgress() {\n    const message = 'I am a shade with a progressbar.';\n\n    const progress = concat(\n      of(0).pipe(delay(2000)),      // Emulate task starting, a.k.a. indeterminate\n      interval(50).pipe(take(100))  // Emit 0...100 every 50ms, total ~5 seconds\n    );\n\n    const ref = this.modals.shade(message, progress);\n\n    progress.pipe(delay(1000)).subscribe({complete: () => ref.dismiss()});\n  }\n}\n"}}]);