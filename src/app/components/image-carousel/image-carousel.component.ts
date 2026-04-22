import { Component, Signal, ElementRef, viewChild, input, model, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import * as BodyScrollLock from 'body-scroll-lock';
import { ImageData } from '../../types/image-data.interface';
import { LayoutService } from '../../services/layout.service';

const NONE_SELECTED: number = -1;
const DEFAULT_INDEX: number = 0;

@Component({
  selector: 'app-image-carousel',
  host: { '[class.inside-overlay]': 'isInsideOverlay()' },
  imports: [NgClass],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {

  images = input.required<ImageData[]>();
  isInsideOverlay = input<boolean>(false);
  selectedIndex = model<number>(DEFAULT_INDEX);

  isMobile: Signal<boolean>;
  isOverlayActive: boolean = false;
  scrollTarget = viewChild.required<ElementRef>('scrollTarget');
  frameId: number | null = null;

  constructor(private layout: LayoutService) {
    this.isMobile = this.layout.isMobile;
    effect(() => {
      const isMobile: boolean = this.isMobile();
      if (this.isInsideOverlay() || !this.isOverlayActive) return;
      isMobile ? this.enableBodyScroll() : this.disableBodyScroll();
    });
  }

  ngAfterViewInit(): void {
    this.preloadAllImages(this.images());
  }

  preloadAllImages(images: ImageData[]): void {
    this.preloadImages(images.map(data => data.smallSizeURL), 1);
    if (!this.isMobile()) this.preloadImages(images.map(data => data.fullSizeURL));
  }

  preloadImages(URLs: string[], index: number = 0): void {
    const image = new Image();
    image.src = URLs[index];
    if (index === URLs.length - 1) return;
    image.onload = () => this.preloadImages(URLs, index + 1);
    image.onerror = () => this.preloadImages(URLs, index + 1);
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
    if (this.frameId != null) cancelAnimationFrame(this.frameId);
    this.selectedIndex.set(NONE_SELECTED);
    this.frameId = requestAnimationFrame(() => {
      this.selectedIndex.set(index);
      this.frameId = null;
    });
  }

  toggleOverlay(): void {
    if (this.isInsideOverlay() || this.isMobile()) return;
    this.isOverlayActive = !this.isOverlayActive;
    if (this.isOverlayActive) this.disableBodyScroll()
    else this.enableBodyScroll();
  }

  disableBodyScroll(): void {
    BodyScrollLock.disableBodyScroll(
      this.scrollTarget().nativeElement,
      { reserveScrollBarGap: true }
    );
  }

  enableBodyScroll(): void {
    BodyScrollLock.enableBodyScroll(this.scrollTarget().nativeElement);
  }

  ngOnDestroy(): void {
    BodyScrollLock.clearAllBodyScrollLocks();
    if (this.frameId != null) cancelAnimationFrame(this.frameId);
  }

}
