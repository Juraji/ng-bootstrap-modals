import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MODAL_BACKDROP_FADE_ANIMATION} from '../../animations/modal-backdrop-fade.animation';
import {buildClassList} from '../../util/build-class-list';

export const MODAL_BACKDROP_PROPS: (keyof ModalBackdropComponent)[] = ['backdropClass'];

@Component({
  template: '',
  animations: [MODAL_BACKDROP_FADE_ANIMATION]
})
export class ModalBackdropComponent implements OnInit, OnChanges {
  @HostBinding('class') public classList: string;
  @HostBinding('style.zIndex') @Input() public zIndex: number;
  @HostBinding('@modalFade') public readonly fadeAnimation = true;
  @Input() public backdropClass: string;

  public ngOnInit(): void {
    this.updateHostClassList();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('backdropClass')) {
      this.updateHostClassList();
    }
  }

  private updateHostClassList(): void {
    this.classList = buildClassList<ModalBackdropComponent>(this, 'modal-backdrop', {
      backdropClass: this.backdropClass
    });
  }
}
