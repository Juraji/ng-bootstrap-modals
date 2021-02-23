import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-code',
  templateUrl: './example-code.component.html',
})
export class ExampleCodeComponent implements OnInit {

  @Input()
  examples: ExampleCodeMap[] | null = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
