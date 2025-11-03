import { Component, Signal, HostBinding, ViewChild, ElementRef, input, model, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { timer } from 'rxjs';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from 'body-scroll-lock';
import { Screen } from '../../constants/layout';
import { ImageData } from '../../types/image-data.interface';
import { LayoutService } from '../../services/layout.service';

const NONE: number = -1;
const DEFAULT_INDEX: number = 0;

@Component({
  selector: 'app-image-carousel',
  imports: [NgClass],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {

  @HostBinding('class.inside-overlay') get _isInsideOverlay() { return this.isInsideOverlay() };
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  readonly Screen = Screen;

  images = input.required<ImageData[]>();
  isInsideOverlay = input<boolean>(false);
  selectedIndex = model<number>(DEFAULT_INDEX);

  screen: Signal<Screen>;

  isOverlayActive: boolean = false;
  options: BodyScrollOptions = { reserveScrollBarGap: true };

  constructor(private layout: LayoutService) {
    this.screen = this.layout.screen;
    effect(() => {
      if (this.screen() !== Screen.mobile && !this.isInsideOverlay() && this.isOverlayActive)
        disableBodyScroll(this.scrollTarget.nativeElement, this.options);
    });
  }

  nextImage(): void {
    const newIndex = this.selectedIndex() + 1;
    this.selectImage(newIndex >= this.images().length ? 0 : newIndex);
  }

  previousImage(): void {
    const newIndex = this.selectedIndex() - 1;
    this.selectImage(newIndex < 0 ? this.images().length - 1 : newIndex);
  }

  selectImage(index: number): void {
    if (index < 0 || index >= this.images().length || index === this.selectedIndex()) return;
    this.selectedIndex.set(NONE);
    timer(0).subscribe(() => {
      this.selectedIndex.set(index);
    });
  }

  toggleOverlay(): void {
    if (this.isInsideOverlay() || this.screen() === Screen.mobile) return;
    this.isOverlayActive = !this.isOverlayActive;
    if (this.isOverlayActive) disableBodyScroll(this.scrollTarget.nativeElement, this.options);
    else enableBodyScroll(this.scrollTarget.nativeElement);
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
  }

}
