(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Vkzc:function(e,s,n){"use strict";n.r(s),s.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\n@Component({\n  selector: 'app-default-shade-example',\n  templateUrl: './home.page.html',\n})\nexport class ShadeModalPage {\n  constructor(private readonly modals: Modals) {}\n\n  onBlockingShade() {\n    const message = 'I am a blocking shade with HTML.' +\n      '<br/><span class=\"text-info font-italic\">I will be dismissed in 10 seconds</span>';\n\n    const shadeRef = this.modals.shade(message);\n\n    of(1)\n      .pipe(delay(10_000))\n      .subscribe(() => shadeRef.dismiss());\n  }\n}\n"},jdWc:function(e,s,n){"use strict";n.r(s),s.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {concat, interval, of} from 'rxjs';\nimport {delay, take} from 'rxjs/operators';\n\n@Component({\n  selector: 'app-indeterminate-progress-shade-example',\n  templateUrl: './home.page.html',\n})\nexport class ShadeModalPage {\n  constructor(private readonly modals: Modals) {}\n\n  onShadeWithProgress() {\n    const message = 'I am a shade with a progressbar.';\n\n    const progress = concat(\n      of(0).pipe(delay(2000)),      // Emulate task starting, a.k.a. indeterminate\n      interval(50).pipe(take(100))  // Emit 0...100 every 50ms, total ~5 seconds\n    );\n\n    const ref = this.modals.shade(message, progress);\n\n    progress.pipe(delay(1000)).subscribe({complete: () => ref.dismiss()});\n  }\n}\n"},kAAO:function(e,s,n){"use strict";n.r(s),s.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {EMPTY, of} from 'rxjs';\nimport {delay, take} from 'rxjs/operators';\n\n@Component({\n  selector: 'app-indeterminate-progress-shade-example',\n  templateUrl: './home.page.html',\n})\nexport class ShadeModalPage {\n  constructor(private readonly modals: Modals) {}\n\n  onShadeWithIndeterminateProgress() {\n    const message = 'I am a shade for a indeterminate task.' +\n      '<br/><span class=\"text-info font-italic\">I will be dismissed in 10 seconds</span>';\n\n    // Note the empty observable!\n    const shadeRef = this.modals.shade(message, EMPTY);\n\n    of(1)\n      .pipe(delay(10_000))\n      .subscribe(() => shadeRef.dismiss());\n  }\n}\n"},vYGN:function(e,s,n){"use strict";n.r(s),n.d(s,"ShadeModalModule",function(){return v});var t=n("ofXK"),a=n("tyNb"),o=n("LRne"),r=n("EY2u"),i=n("GyhO"),d=n("HDdC"),c=n("D0XW"),l=n("Y7HM");function p(e){const{subscriber:s,counter:n,period:t}=e;s.next(n),this.schedule({subscriber:s,counter:n+1,period:t},t)}var m=n("3E0/"),b=n("IzEk"),h=n("fXoL"),u=n("2Rjt"),f=n("I/2r");const g=[{path:"",component:(()=>{class e{constructor(e){this.modals=e,this.defaultShadeExamples=[{file:"default-shade-example.component.ts",contents:n("Vkzc").default},{file:"app.module.ts",contents:n("1pU9").default}],this.indeterminateProgressShadeExamples=[{file:"indeterminate-progress-shade-example.component.ts",contents:n("kAAO").default},{file:"app.module.ts",contents:n("1pU9").default}],this.progressShadeExamples=[{file:"progress-shade-example.component.ts",contents:n("jdWc").default},{file:"app.module.ts",contents:n("1pU9").default}]}onBlockingShade(){const e=this.modals.shade('I am a blocking shade with HTML.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>');Object(o.a)(1).pipe(Object(m.a)(1e4)).subscribe(()=>e.dismiss())}onShadeWithIndeterminateProgress(){const e=this.modals.shade('I am a shade for a indeterminate task.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>',r.a);Object(o.a)(1).pipe(Object(m.a)(1e4)).subscribe(()=>e.dismiss())}onShadeWithProgress(){const e=Object(i.a)(Object(o.a)(0).pipe(Object(m.a)(2e3)),function(e=0,s=c.a){return(!Object(l.a)(e)||e<0)&&(e=0),s&&"function"==typeof s.schedule||(s=c.a),new d.a(n=>(n.add(s.schedule(p,e,{subscriber:n,counter:0,period:e})),n))}(50).pipe(Object(b.a)(100))),s=this.modals.shade("I am a shade with a progressbar. Hold on while I load...",e);e.pipe(Object(m.a)(1e3)).subscribe({complete:()=>s.dismiss()})}}return e.\u0275fac=function(s){return new(s||e)(h.Lb(u.e))},e.\u0275cmp=h.Fb({type:e,selectors:[["ng-component"]],decls:39,vars:3,consts:[[1,"container"],[1,"alert","alert-warning"],[1,"font-italic"],[1,"card","mb-2"],[1,"card-header"],[1,"card-body"],[1,"mb-3"],[1,"btn","btn-primary","mr-4",3,"click"],[3,"examples"],[1,"card"]],template:function(e,s){1&e&&(h.Rb(0,"div",0),h.Rb(1,"div",1),h.yc(2," The blocking shade is not yet available. It will be added in a future release! "),h.Qb(),h.Rb(3,"h1"),h.yc(4,"Shade Modals"),h.Qb(),h.Rb(5,"p"),h.yc(6," The Blocking Shade modal is designed to block a user from the UI during a long running task. "),h.Qb(),h.Rb(7,"p"),h.yc(8," It has support for displaying progress, by supplying an observable which emits the progress from 0 until 100."),h.Mb(9,"br"),h.Rb(10,"span",2),h.yc(11,"When nothing is emitted from the observable, or it is empty, the shade will display an indeterminate progress bar."),h.Qb(),h.Qb(),h.Rb(12,"div",3),h.Rb(13,"div",4),h.Rb(14,"h4"),h.yc(15,"Try it out!"),h.Qb(),h.Qb(),h.Rb(16,"div",5),h.Rb(17,"div",6),h.Rb(18,"button",7),h.bc("click",function(){return s.onBlockingShade()}),h.yc(19,"Default blocking shade with message"),h.Qb(),h.Qb(),h.Mb(20,"app-example-code",8),h.Qb(),h.Qb(),h.Rb(21,"div",3),h.Rb(22,"div",4),h.Rb(23,"h4"),h.yc(24,"Try it out!"),h.Qb(),h.Qb(),h.Rb(25,"div",5),h.Rb(26,"div",6),h.Rb(27,"button",7),h.bc("click",function(){return s.onShadeWithIndeterminateProgress()}),h.yc(28,"Shade with indeterminate progress"),h.Qb(),h.Qb(),h.Mb(29,"app-example-code",8),h.Qb(),h.Qb(),h.Rb(30,"div",9),h.Rb(31,"div",4),h.Rb(32,"h4"),h.yc(33,"Try it out!"),h.Qb(),h.Qb(),h.Rb(34,"div",5),h.Rb(35,"div",6),h.Rb(36,"button",7),h.bc("click",function(){return s.onShadeWithProgress()}),h.yc(37,"Shade with incrementing progress"),h.Qb(),h.Qb(),h.Mb(38,"app-example-code",8),h.Qb(),h.Qb(),h.Qb()),2&e&&(h.zb(20),h.ic("examples",s.defaultShadeExamples),h.zb(9),h.ic("examples",s.indeterminateProgressShadeExamples),h.zb(9),h.ic("examples",s.progressShadeExamples))},directives:[f.a],encapsulation:2}),e})()}];let y=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(s){return new(s||e)},imports:[[a.c.forChild(g)],a.c]}),e})();var x=n("G7De");let v=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(s){return new(s||e)},imports:[[t.c,y,x.a,u.f]]}),e})()}}]);