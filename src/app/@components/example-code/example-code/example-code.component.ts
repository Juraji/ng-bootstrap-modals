import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-example-code',
  templateUrl: './example-code.component.html',
})
export class ExampleCodeComponent {

  @Input()
  public examples: ExampleCodeMap[] | null = [];
}
