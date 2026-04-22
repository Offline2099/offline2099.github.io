import { Component, Signal, input, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { Project } from '../../types/project.interface';
import { ImageData } from '../../types/image-data.interface';
import { ExternalLinkComponent } from '../external-link/external-link.component';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { LayoutService } from '../../services/layout.service';
import { URLService } from '../../services/url.service';

@Component({
  selector: 'app-project',
  imports: [NgClass, ExternalLinkComponent, ImageCarouselComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {

  project = input.required<Project>();

  siteURL = computed<string | null>(() => this.url.projectSiteURL(this.project()));
  repoURL = computed<string | null>(() => this.url.projectRepoURL(this.project()));
  imageData = computed<ImageData[]>(() => this.projectImageData(this.project()));
 
  isMobile: Signal<boolean>;
  areFeaturesShown: boolean = false;

  constructor(private layout: LayoutService, private url: URLService) {
    this.isMobile = this.layout.isMobile;
  }

  projectImageData(project: Project): ImageData[] {
    return Array.from({ length: project.numberOfImages }, (_, index) => ({
      fullSizeURL: this.url.projectImageURL(project, index),
      smallSizeURL: this.url.projectImageURL(project, index, { isSmall: true }),
      altText: `${project.name} - Image ${index + 1}`
    }));
  }

  toggleFeatures(): void {
    this.areFeaturesShown = !this.areFeaturesShown;
  }

}
