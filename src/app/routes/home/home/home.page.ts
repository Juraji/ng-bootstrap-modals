import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {
  readonly readMeMd = require("!raw-loader!README.md").default

  constructor() { }

  ngOnInit(): void {
  }

}
