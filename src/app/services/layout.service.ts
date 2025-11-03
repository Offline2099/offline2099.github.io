import { Injectable, Signal } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BREAKPOINTS, Screen } from '../constants/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  screen: Signal<Screen>;

  constructor(private observer: BreakpointObserver) {
    this.screen = toSignal(this.observer.observe(Object.values(BREAKPOINTS)).pipe(
      map(breakpointState => this.getScreenWidthStatus(breakpointState))
    ), { requireSync: true });
  }

  private getScreenWidthStatus(breakpointState: BreakpointState): Screen {
    return Number(
      Object.entries(BREAKPOINTS).find(([_, value]) => breakpointState.breakpoints[value])![0]
    ) as Screen;
  }

}