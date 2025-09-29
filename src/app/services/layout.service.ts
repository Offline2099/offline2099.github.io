import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { BREAKPOINTS, Screen } from '../constants/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  screen$: Observable<Screen>;

  constructor(private observer: BreakpointObserver) {
    this.screen$ = this.observer.observe(Object.values(BREAKPOINTS)).pipe(
      map(breakpointState => this.getScreenWidthStatus(breakpointState))
    );
  }

  private getScreenWidthStatus(breakpointState: BreakpointState): Screen {
    return Number(
      Object.entries(BREAKPOINTS).find(([_, value]) => breakpointState.breakpoints[value])![0]
    ) as Screen;
  }

}