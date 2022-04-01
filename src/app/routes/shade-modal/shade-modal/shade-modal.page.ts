/* eslint-disable @typescript-eslint/no-var-requires */
import {Component} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {concat, EMPTY, interval, of} from 'rxjs';
import {delay, last, map, startWith, take} from 'rxjs/operators';

@Component({
  templateUrl: './shade-modal.page.html',
})
export class ShadeModalPage {
  public readonly defaultShadeExamples: ExampleCodeMap[] = [
    {
      file: 'default-shade-example.component.ts',
      contents: require(`!raw-loader!src/app/code/shade-modal/default-shade-example.component.ts.txt`).default
    },
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public readonly shadeWithObsMessageExamples: ExampleCodeMap[] = [
    {
      file: 'shade-with-observable-message-example.component.ts',
      contents: require(`!raw-loader!src/app/code/shade-modal/shade-with-observable-message-example.component.ts.txt`).default
    },
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public readonly indeterminateProgressShadeExamples: ExampleCodeMap[] = [
    {
      file: 'indeterminate-progress-shade-example.component.ts',
      contents: require(`!raw-loader!src/app/code/shade-modal/indeterminate-progress-shade-example.component.ts.txt`).default
    },
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public readonly progressShadeExamples: ExampleCodeMap[] = [
    {
      file: 'progress-shade-example.component.ts',
      contents: require(`!raw-loader!src/app/code/shade-modal/progress-shade-example.component.ts.txt`).default
    },
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public constructor(private readonly modals: Modals) {
  }

  public onBlockingShade() {
    const message = 'I am a blocking shade with HTML.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>';

    const shadeRef = this.modals.shade(message);

    of(1)
      .pipe(delay(10_000))
      .subscribe(() => shadeRef.dismiss());
  }

  public onBlockingWithObsMessageShade() {
    const timer$ = interval(1000)
      .pipe(startWith(-1), take(10));

    const message$ = timer$
      .pipe(map(i => `I am a blocking shade with HTML.<br/><span class="text-info font-italic">I will be dismissed in ${9 - i} seconds</span>`));

    const shadeRef = this.modals.shade(message$);

    timer$
      .pipe(last(), delay(1000))
      .subscribe(() => shadeRef.dismiss());
  }

  public onShadeWithIndeterminateProgress() {
    const message = 'I am a shade for a indeterminate task.<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>';

    const shadeRef = this.modals.shade(message, EMPTY);

    of(1)
      .pipe(delay(10_000))
      .subscribe(() => shadeRef.dismiss());
  }

  public onShadeWithProgress() {
    const message = 'I am a shade with a progressbar. Hold on while I load...';

    const progress = concat(
      of(0).pipe(delay(2000)),
      interval(50).pipe(take(100))
    );

    const ref = this.modals.shade(message, progress);

    progress.pipe(delay(1000)).subscribe({complete: () => ref.dismiss()});
  }
}
