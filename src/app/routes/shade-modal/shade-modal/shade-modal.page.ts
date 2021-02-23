import {Component} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {concat, EMPTY, interval, of} from 'rxjs';
import {delay, take} from 'rxjs/operators';

@Component({
  templateUrl: './shade-modal.page.html',
})
export class ShadeModalPage {
  readonly examples: ExampleCodeMap[] = [
    {file: 'example.component.ts', contents: require(`!raw-loader!src/app/code/shade-modal/example.component.ts.txt`).default},
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  constructor(
    private readonly modals: Modals
  ) {
  }

  onBlockingShade() {
    const message = 'I am a blocking shade with HTML.' +
      '<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>';

    const shadeRef = this.modals.shade(message);

    of(1)
      .pipe(delay(10_000))
      .subscribe(() => shadeRef.dismiss());
  }

  onShadeWithIndeterminateProgress() {
    const message = 'I am a shade for a indeterminate task.' +
      '<br/><span class="text-info font-italic">I will be dismissed in 10 seconds</span>';

    const shadeRef = this.modals.shade(message, EMPTY);

    of(1)
      .pipe(delay(10_000))
      .subscribe(() => shadeRef.dismiss());
  }

  onShadeWithProgress() {
    const message = 'I am a shade with a progressbar. Hold on while I load...';

    const progress = concat(
      of(0).pipe(delay(2000)),
      interval(50).pipe(take(100))
    );

    const ref = this.modals.shade(message, progress);

    progress.pipe(delay(1000)).subscribe({complete: () => ref.dismiss()});
  }
}
