import { Component, Input, HostBinding, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from 'body-scroll-lock';

import { Project } from '../interfaces';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {

  @HostBinding('class.inside-overlay') @Input() isOverlay: boolean = false;
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  @Input() images: Project['images'] = [];
  @Input() selectedImage: number = 0;

  @Output() imageChanged = new EventEmitter<number>();

  overlayActive: boolean = false;
  options: BodyScrollOptions = {reserveScrollBarGap: true}

  nextImage(): void {
    let newNumber: number = this.selectedImage + 1;
    if (newNumber >= this.images.length) newNumber = 0;
    this.selectImage(newNumber);
  }

  previousImage(): void {
    let newNumber: number = this.selectedImage - 1;
    if (newNumber < 0) newNumber = this.images.length - 1;
    this.selectImage(newNumber);
  }

  selectImage(n: number): void {
    if (n >= 0 && n < this.images.length && n != this.selectedImage) {
      this.selectedImage = n;
      this.imageChanged.emit(n);
    }
  }

  toggleOverlay(): void {
    this.overlayActive = !this.overlayActive;
    if (!this.isOverlay) {
      if (this.overlayActive) 
        disableBodyScroll(this.scrollTarget.nativeElement, this.options);
      else enableBodyScroll(this.scrollTarget.nativeElement);
    }    
  }

  ngOnDestroy() {
    clearAllBodyScrollLocks();
  }

}
