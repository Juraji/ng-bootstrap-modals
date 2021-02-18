import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';

const NOOP: () => void = () => undefined;

export type CompensationReverter = () => void;

@Injectable({providedIn: 'root'})
export class ScrollBarAdjustService {
  private readonly renderer: Renderer2;
  private readonly document: Document;

  constructor(
    @Inject(DOCUMENT) document: any,
    rendererFactory: RendererFactory2
  ) {
    // Workaround for https://github.com/angular/angular/issues/20351
    this.document = document;
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public compensate(): CompensationReverter {
    const body = this.document.body;
    const rect = body.getBoundingClientRect();
    const scrollbarPresent = rect.left + rect.right < window.innerWidth;

    if (scrollbarPresent) {
      const userSetPadding = body.style.paddingRight;
      const userSetOverflow = body.style.overflow;
      const paddingAmount = parseFloat(window.getComputedStyle(body).paddingRight);

      const measurer = this.document.createElement('div');
      measurer.className = 'modal-scrollbar-measure';
      this.renderer.appendChild(body, measurer);
      const adjustWidth = measurer.getBoundingClientRect().width - measurer.clientWidth;
      this.renderer.removeChild(body, measurer);

      this.renderer.setStyle(body, 'paddingRight', `${paddingAmount + adjustWidth}px`);
      this.renderer.setStyle(body, 'overflow', `hidden`);

      return () => {
        this.renderer.setStyle(body, 'paddingRight', userSetPadding);
        this.renderer.setStyle(body, 'overflow', userSetOverflow);
      };
    } else {
      return NOOP;
    }
  }
}
