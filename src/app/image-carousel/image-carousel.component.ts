import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {

  constructor() { }

  @Input() folderPath: string = '';
  @Input() imageNames: string[] = [];
  @Input() selectedImage: number = 1;

  @HostBinding('class.inside-overlay') @Input() isOverlay: boolean = false;

  @Output() imageChanged = new EventEmitter<number>();

  currentImage: number = 1;
  overlayActive: boolean = false;

  ngOnChanges(): void {
    this.currentImage = this.selectedImage;
  }

  nextImage(): void {
    let newNumber: number = this.currentImage + 1;
    if (newNumber > this.imageNames.length) newNumber = 1;
    this.switchCurrentImage(newNumber);
  }

  previousImage(): void {
    let newNumber: number = this.currentImage - 1;
    if (newNumber <= 0) newNumber = this.imageNames.length;
    this.switchCurrentImage(newNumber);
  }

  switchCurrentImage(n: number): void {
    if (n > 0 && n <= this.imageNames.length && n != this.currentImage) {
      this.currentImage = n;
      this.imageChanged.emit(n);
    }
  }

  toggleOverlay(): void {
    this.overlayActive = !this.overlayActive;
  }

}
