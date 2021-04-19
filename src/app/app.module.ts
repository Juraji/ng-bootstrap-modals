import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {MainNavbarModule} from './@components/main-navbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExampleCodeModule} from './@components/example-code';
import {MarkdownModule} from 'ngx-markdown';

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
