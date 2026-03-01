import { Component, Signal, HostBinding, ViewChild, ElementRef, input, model, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { timer } from 'rxjs';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from 'body-scroll-lock';
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

  images = input.required<ImageData[]>();
  isInsideOverlay = input<boolean>(false);
  selectedIndex = model<number>(DEFAULT_INDEX);

  isMobile: Signal<boolean>;

  isOverlayActive: boolean = false;
  options: BodyScrollOptions = { reserveScrollBarGap: true };

  constructor(private layout: LayoutService) {
    this.isMobile = this.layout.isMobile;
    effect(() => {
      if (this.isMobile() && !this.isInsideOverlay() && this.isOverlayActive)
        disableBodyScroll(this.scrollTarget.nativeElement, this.options);
    });
  }

  nextImage(): void {
    const nextIndex = this.selectedIndex() + 1;
    this.selectImage(nextIndex >= this.images().length ? 0 : nextIndex);
  }

  previousImage(): void {
    const previousIndex = this.selectedIndex() - 1;
    this.selectImage(previousIndex < 0 ? this.images().length - 1 : previousIndex);
  }

  selectImage(index: number): void {
    if (index < 0 || index >= this.images().length || index === this.selectedIndex()) return;
    this.selectedIndex.set(NONE);
    timer(0).subscribe(() => this.selectedIndex.set(index));
  }

  toggleOverlay(): void {
    if (this.isInsideOverlay() || this.isMobile()) return;
    this.isOverlayActive = !this.isOverlayActive;
    if (this.isOverlayActive) disableBodyScroll(this.scrollTarget.nativeElement, this.options);
    else enableBodyScroll(this.scrollTarget.nativeElement);
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
  }

}
