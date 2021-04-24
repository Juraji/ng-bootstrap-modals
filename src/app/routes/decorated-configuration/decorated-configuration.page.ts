import {Component, OnInit} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {ExampleModal} from './example-modal/example.modal';

@Component({
  templateUrl: './decorated-configuration.page.html',
  styleUrls: ['./decorated-configuration.page.css']
})
export class DecoratedConfigurationPage implements OnInit {
  readonly examples: ExampleCodeMap[] = [
    {file: 'example.component.ts', contents: require(`!raw-loader!src/app/code/decorated-modal/example.component.ts.txt`).default},
    {file: 'example.modal.ts', contents: require(`!raw-loader!src/app/code/decorated-modal/example.modal.ts.txt`).default},
    {file: 'example.modal.html', contents: require(`!raw-loader!src/app/code/decorated-modal/example.modal.html.txt`).default},
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  constructor(
    private readonly modals: Modals
  ) {
  }

  ngOnInit(): void {
  }

  onOpenDecoratedModal() {
    this.modals.open(ExampleModal);
  }
}
