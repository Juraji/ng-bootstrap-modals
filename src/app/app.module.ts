import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbmodModalsModule} from '@juraji/ng-bootstrap-modals';
import {MainNavbarModule} from './@components/main-navbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CodeHighlightingModule} from './@components/code-highlighting';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbmodModalsModule.forRoot(),
    CodeHighlightingModule.forRoot(),
    MainNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
