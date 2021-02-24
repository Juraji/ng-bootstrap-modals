(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"20VR":function(e,t,o){"use strict";o.r(t),t.default="import {Component, Inject} from '@angular/core';\nimport {MODAL_DATA, ModalRef} from '@juraji/ng-bootstrap-modals';\n\nexport interface ExampleModalData {\n  title: string;\n  content: string;\n}\n\nexport interface ExampleModalResult {\n  result: string;\n}\n\n@Component({\n  templateUrl: './example.modal.html',\n})\nexport class ExampleModal {\n  readonly directiveResolveValue: ExampleModalResult = {result: 'Resolved via directive!'};\n\n  constructor(\n    private readonly modalRef: ModalRef<ExampleModalResult>,\n    @Inject(MODAL_DATA) readonly data: ExampleModalData\n  ) {\n  }\n\n  onCustomResolve() {\n    this.modalRef.resolve({result: 'Resolved via modalRef!'});\n  }\n\n}\n"},Kdiw:function(e,t,o){"use strict";o.r(t),o.d(t,"CustomModalsModule",function(){return p});var n=o("ofXK"),s=o("tyNb"),a=o("2Rjt"),l=o("fXoL");let i=(()=>{class e{constructor(e,t){this.modalRef=e,this.data=t,this.directiveResolveValue={result:"Resolved via directive!"}}onCustomResolve(){this.modalRef.resolve({result:"Resolved via modalRef!"})}}return e.\u0275fac=function(t){return new(t||e)(l.Lb(a.d),l.Lb(a.c))},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],decls:16,vars:3,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close","ngbmodDismiss","",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button","ngbmodDismiss","",1,"btn","btn-outline-danger"],["type","submit",1,"btn","btn-primary",3,"ngbmodResolve"],["type","submit","ngbmodAutoFocus","",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"h4",1),l.yc(2),l.Qb(),l.Rb(3,"button",2),l.Rb(4,"span",3),l.yc(5,"\xd7"),l.Qb(),l.Qb(),l.Qb(),l.Rb(6,"div",4),l.Rb(7,"p"),l.yc(8),l.Qb(),l.Qb(),l.Rb(9,"div",5),l.Rb(10,"button",6),l.yc(11,"Dismiss"),l.Qb(),l.Rb(12,"button",7),l.yc(13,"Resolve via directive"),l.Qb(),l.Rb(14,"button",8),l.bc("click",function(){return t.onCustomResolve()}),l.yc(15,"Resolve via modalRef"),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.zc(t.data.title),l.zb(6),l.zc(t.data.content),l.zb(4),l.ic("ngbmodResolve",t.directiveResolveValue))},directives:[a.b,a.g,a.a],encapsulation:2}),e})();var d=o("lJxs"),c=o("I/2r");const m=[{path:"",component:(()=>{class e{constructor(e){this.modals=e,this.examples=[{file:"example.component.ts",contents:o("Tf4E").default},{file:"example.modal.ts",contents:o("20VR").default},{file:"example.modal.html",contents:o("RUrC").default},{file:"app.module.ts",contents:o("1pU9").default}]}onOpenCustomModal(){const e=this.modals.open(i,{data:{title:"My custom modal",content:"This content is rendered from the modal data!"}});this.modalResolve$=e.onResolved.pipe(Object(d.a)(e=>e.result)),this.modalDismiss$=e.onDismissed.pipe(Object(d.a)(()=>"Modal was dismissed!")),this.modalComplete$=e.onComplete.pipe(Object(d.a)(()=>"Modal was completed!"))}}return e.\u0275fac=function(t){return new(t||e)(l.Lb(a.e))},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],decls:37,vars:10,consts:[[1,"container"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"d-flex","mb-3"],[1,"btn","btn-primary","mr-4",3,"click"],[1,"list-unstyled"],[1,"font-weight-bold"],[3,"examples"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"h1"),l.yc(2,"Custom modals"),l.Qb(),l.Rb(3,"p"),l.yc(4," Have any component be rendered in a modal-style pop-up. "),l.Qb(),l.Rb(5,"p"),l.yc(6," You can use Bootstrap's modal layout, like in "),l.Rb(7,"code"),l.yc(8,"example.modal.html"),l.Qb(),l.yc(9," below, or use your own component."),l.Mb(10,"br"),l.yc(11," Say for instance a file-browser, or another website, if you so please. "),l.Qb(),l.Rb(12,"div",1),l.Rb(13,"div",2),l.Rb(14,"h4"),l.yc(15,"Try it out!"),l.Qb(),l.Qb(),l.Rb(16,"div",3),l.Rb(17,"div",4),l.Rb(18,"button",5),l.bc("click",function(){return t.onOpenCustomModal()}),l.yc(19,"Open custom modal..."),l.Qb(),l.Rb(20,"ul",6),l.Rb(21,"li"),l.yc(22,"Resolved status: "),l.Rb(23,"span",7),l.yc(24),l.ec(25,"async"),l.Qb(),l.Qb(),l.Rb(26,"li"),l.yc(27,"Dismissed status: "),l.Rb(28,"span",7),l.yc(29),l.ec(30,"async"),l.Qb(),l.Qb(),l.Rb(31,"li"),l.yc(32,"Completed status: "),l.Rb(33,"span",7),l.yc(34),l.ec(35,"async"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Mb(36,"app-example-code",8),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(24),l.zc(l.fc(25,4,t.modalResolve$)),l.zb(5),l.zc(l.fc(30,6,t.modalDismiss$)),l.zb(5),l.zc(l.fc(35,8,t.modalComplete$)),l.zb(2),l.ic("examples",t.examples))},directives:[c.a],pipes:[n.b],encapsulation:2}),e})()}];let r=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(t){return new(t||e)},imports:[[s.c.forChild(m)],s.c]}),e})();var b=o("1kSV"),u=o("G7De");let p=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(t){return new(t||e)},imports:[[n.c,r,a.f,b.e,u.a]]}),e})()},RUrC:function(e,t,o){"use strict";o.r(t),t.default='<div class="modal-header">\n  <h4 class="modal-title">{{data.title}}</h4>\n  <button type="button" class="close" aria-label="Close" ngbmodDismiss>\n    <span aria-hidden="true">&times;</span>\n  </button>\n</div>\n<div class="modal-body">\n  <p>{{data.content}}</p>\n</div>\n<div class="modal-footer">\n  <button type="button" class="btn btn-outline-danger" ngbmodDismiss>Dismiss</button>\n  <button type="submit" class="btn btn-primary" [ngbmodResolve]="directiveResolveValue">Resolve via directive</button>\n  <button type="submit" class="btn btn-primary" ngbmodAutoFocus (click)="onCustomResolve()">Resolve via modalRef</button>\n</div>\n'},Tf4E:function(e,t,o){"use strict";o.r(t),t.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {ExampleModal, ExampleModalData, ExampleModalResult} from './example.modal';\n\n@Component({\n  templateUrl: './home.page.html',\n  styleUrls: ['./home.page.scss']\n})\nexport class HomePage {\n\n  constructor(\n    private readonly modals: Modals\n  ) {\n  }\n\n  onOpenCustomModal() {\n    const modalRef = this.modals.open<ExampleModalResult>(ExampleModal, {\n      data: {\n        title: 'My custom modal',\n        content: 'This content is rendered from the modal data!'\n      } as ExampleModalData\n    });\n\n    modalRef.onResolved\n      .subscribe(result => console.log(\"A value was resolved\", result));\n\n    modalRef.onDismissed\n      .subscribe(()) => console.log(\"The modal was dismissed\"));\n\n    modalRef.onComplete\n      .subscribe(()) => console.log(\"The modal was completed\"));\n\n    // modal.dismiss() will dismiss the modal\n    // modal.resolve(value) will resolve the modal, this is used internally\n  }\n}\n"}}]);