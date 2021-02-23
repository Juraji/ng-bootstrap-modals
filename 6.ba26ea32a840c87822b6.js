(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5SQL":function(e,o,n){"use strict";n.r(o),n.d(o,"ConfirmModalModule",function(){return b});var s=n("ofXK"),a=n("tyNb"),t=n("lJxs"),l=n("fXoL"),m=n("2Rjt"),i=n("I/2r");const c=[{path:"",component:(()=>{class e{constructor(e){this.modals=e,this.examples=[{file:"example.component.ts",contents:n("TxX8").default},{file:"app.module.ts",contents:n("1pU9").default}]}onOpenConfirmModal(){const e=this.modals.confirm('Are you sure you want to use a <span class="text-primary">confirm modal</span>?',"Sure!","No...");this.modalResolve$=e.onResolved,this.modalDismiss$=e.onDismissed.pipe(Object(t.a)(()=>"Modal was dismissed!")),this.modalComplete$=e.onComplete.pipe(Object(t.a)(()=>"Modal was completed!"))}}return e.\u0275fac=function(o){return new(o||e)(l.Lb(m.e))},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],decls:26,vars:10,consts:[[1,"container"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"d-flex","mb-3"],[1,"btn","btn-primary","mr-4",3,"click"],[1,"list-unstyled"],[1,"font-weight-bold"],[3,"examples"]],template:function(e,o){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"h4"),l.yc(4,"Confirm modal"),l.Qb(),l.Qb(),l.Rb(5,"div",3),l.Rb(6,"div",4),l.Rb(7,"button",5),l.bc("click",function(){return o.onOpenConfirmModal()}),l.yc(8,"Open confirm modal..."),l.Qb(),l.Rb(9,"ul",6),l.Rb(10,"li"),l.yc(11,"Resolved status: "),l.Rb(12,"span",7),l.yc(13),l.ec(14,"async"),l.Qb(),l.Qb(),l.Rb(15,"li"),l.yc(16,"Dismissed status: "),l.Rb(17,"span",7),l.yc(18),l.ec(19,"async"),l.Qb(),l.Qb(),l.Rb(20,"li"),l.yc(21,"Completed status: "),l.Rb(22,"span",7),l.yc(23),l.ec(24,"async"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Mb(25,"app-example-code",8),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(13),l.zc(l.fc(14,4,o.modalResolve$)),l.zb(5),l.zc(l.fc(19,6,o.modalDismiss$)),l.zb(5),l.zc(l.fc(24,8,o.modalComplete$)),l.zb(2),l.ic("examples",o.examples))},directives:[i.a],pipes:[s.b],encapsulation:2}),e})()}];let d=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(o){return new(o||e)},imports:[[a.c.forChild(c)],a.c]}),e})();var p=n("1kSV"),r=n("G7De");let b=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(o){return new(o||e)},imports:[[s.c,d,m.f,p.e,r.a]]}),e})()},TxX8:function(e,o,n){"use strict";n.r(o),o.default="import {Component} from '@angular/core';\nimport {Modals} from '@juraji/ng-bootstrap-modals';\nimport {ExampleModal, ExampleModalData, ExampleModalResult} from './example.modal';\n\n@Component({\n  templateUrl: './home.page.html',\n  styleUrls: ['./home.page.scss']\n})\nexport class HomePage {\n\n  constructor(\n    private readonly modals: Modals\n  ) {\n  }\n\n  onOpenCustomModal() {\n    const modalRef = this.modals.confirm(\n      'Are you sure you want to use a ' +\n        '<span class=\"text-primary\">confirm modal</span>?',  // Message body. HTML is allowed\n      'Sure!',                                               // Confirm button label (Optional, defaults to \"Yes\")\n      'No...'                                                // Cancel button label (Optional, defaults to \"Cancel\")\n    );\n\n    this.modalResolve$ = modalRef.onResolved;\n    this.modalDismiss$ = modalRef.onDismissed.pipe(map(() => 'Modal was dismissed!'));\n    this.modalComplete$ = modalRef.onComplete.pipe(map(() => 'Modal was completed!'));\n  }\n}\n"}}]);