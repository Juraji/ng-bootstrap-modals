import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavbarComponent implements OnInit {

  public readonly opened$ = new BehaviorSubject(false);

  public readonly links: Link[] = [
    {label: 'Home', url: '/home'},
    {label: 'Custom Modal', url: '/custom-modal'},
    {label: 'Confirm', url: '/confirm-modal'},
    {label: 'Blocking Shade', url: '/shade-modal'},
    {label: 'Sizing', url: '/modal-sizing'},
    {label: 'Decorators', url: '/decorated-configuration'},
  ];

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public onToggleNavigation() {
    const next = !this.opened$.value;
    this.opened$.next(next);
  }
}
