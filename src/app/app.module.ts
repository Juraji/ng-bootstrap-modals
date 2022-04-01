import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {MarkdownModule} from 'ngx-markdown';

import {ExampleCodeModule} from './@components/example-code';
import {MainNavbarModule} from './@components/main-navbar';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExampleCodeModule.forRoot(),
    ModalsModule.forRoot({
      windowClass: "shadow"
    }),
    MarkdownModule.forRoot(),
    MainNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
