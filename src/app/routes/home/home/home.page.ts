/* eslint-disable @typescript-eslint/no-var-requires */
import {Component} from '@angular/core';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage {
  public readonly readMeMd = require("!raw-loader!README.md").default
}
