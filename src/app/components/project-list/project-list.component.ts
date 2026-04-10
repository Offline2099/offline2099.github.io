import { Component, Signal } from '@angular/core';
import { NgClass } from '@angular/common';
// Constants & Enums
import { PROJECT_IMAGES, GH_PAGE_BASE, GH_REPO_BASE } from '../../constants/paths';
import { PROJECTS } from '../../../data/projects';
// Interfaces
import { Project } from '../../types/project.interface';
// Components
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { ExternalLinkComponent } from "../external-link/external-link.component";
// Services
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-project-list',
  imports: [NgClass, ExternalLinkComponent, ImageCarouselComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  projects: Project[];
  isMobile: Signal<boolean>;

  constructor(private layout: LayoutService) {
    this.projects = this.constructProjectList();
    this.isMobile = this.layout.isMobile;
  }

  ngAfterViewInit(): void {
    this.preloadAllImages();
  }

  constructProjectList(): Project[] {
    return PROJECTS.filter(project => !project.isHidden).map(project => ({
      ...project,
      site: project.site || `${GH_PAGE_BASE}/${project.id}`,
      repo: project.repo === null ? null : project.repo || `${GH_REPO_BASE}/${project.id}`,
      imageData: Array.from({ length: project.numberOfImages }, (_, index) => ({
        fullSizeURL: this.projectImageURL(project.id, index),
        smallSizeURL: this.projectImageURL(project.id, index, true),
        altText: `${project.name} - Image ${index + 1}`
      })),
      areFeaturesCollapsed: true
    }));
  }

  projectImageURL(id: string, index: number, small: boolean = false): string {
    return `${PROJECT_IMAGES}/${id}/${small ? 'small/': ''}${id}-${index + 1}.webp`;
  }

  preloadAllImages(): void {
    this.projects.forEach(project => {
      this.preloadImages(project.imageData.map(data => data.smallSizeURL), 1);
      if (!this.isMobile()) this.preloadImages(project.imageData.map(data => data.fullSizeURL));
    });
  }

  preloadImages(URLs: string[], index: number = 0): void {
    const image = new Image();
    image.src = URLs[index];
    if (index === URLs.length - 1) return;
    image.onload = () => { this.preloadImages(URLs, index + 1) };
    image.onerror = () => { this.preloadImages(URLs, index + 1) };
  }

  toggleFeatures(project: Project): void {
    project.areFeaturesCollapsed = !project.areFeaturesCollapsed;
  }

}
