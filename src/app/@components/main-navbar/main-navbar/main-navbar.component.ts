import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavbarComponent implements OnInit {

  readonly opened$ = new BehaviorSubject(false);

  readonly links: Link[] = [
    {label: 'Custom Modal', url: '/custom-modal'},
    {label: 'Confirm', url: '/confirm-modal'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleNavigation() {
    const next = !this.opened$.value;
    this.opened$.next(next);
  }
}