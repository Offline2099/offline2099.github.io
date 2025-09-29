import { Component, HostBinding, ViewChild, ElementRef, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from 'body-scroll-lock';
import { Screen } from '../../constants/layout';
import { ImageData } from '../../types/image-data.interface';
import { LayoutService } from '../../services/layout.service';

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

  imageChanged = output<number>();

  selectedIndex: number = 0;

  subscription: Subscription;
  screen!: Screen;

  isOverlayActive: boolean = false;
  options: BodyScrollOptions = { reserveScrollBarGap: true };

  constructor(private layout: LayoutService) {
    this.subscription = this.layout.screen$.subscribe(screen => this.screen = screen);
  }

  nextImage(): void {
    const newIndex = this.selectedIndex + 1;
    this.selectImage(newIndex >= this.images().length ? 0 : newIndex);
  }

  previousImage(): void {
    const newIndex = this.selectedIndex - 1;
    this.selectImage(newIndex < 0 ? this.images().length - 1 : newIndex);
  }

  selectImage(index: number): void {
    if (index < 0 || index >= this.images().length || index === this.selectedIndex) return;
    this.selectedIndex = -1;
    timer(0).subscribe(() => {
      this.selectedIndex = index;
      if (this.isInsideOverlay()) this.imageChanged.emit(index);
    });
  }

  toggleOverlay(): void {
    if (this.isInsideOverlay() || this.screen === Screen.mobile) return;
    this.isOverlayActive = !this.isOverlayActive;
    if (this.isOverlayActive) disableBodyScroll(this.scrollTarget.nativeElement, this.options);
    else enableBodyScroll(this.scrollTarget.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    clearAllBodyScrollLocks();
  }

}
