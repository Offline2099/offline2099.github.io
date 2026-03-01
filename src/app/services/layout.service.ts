import { Injectable, Signal, computed } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BREAKPOINTS, Screen } from '../constants/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  screen: Signal<Screen>;
  isMobile: Signal<boolean>;

  constructor(private observer: BreakpointObserver) {
    this.screen = toSignal(this.observer.observe(Object.values(BREAKPOINTS)).pipe(
      map(state => this.getScreen(state))
    ), { requireSync: true });
    this.isMobile = computed<boolean>(() => this.screen() === Screen.mobile);
  }

  private getScreen(state: BreakpointState): Screen {
    return Number(
      Object.entries(BREAKPOINTS).find(([_, value]) => state.breakpoints[value])![0]
    ) as Screen;
  }

}