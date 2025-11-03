import { Component, Signal } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
// Constants & Enums
import { Screen } from '../../constants/layout';
import { IMG_PATH, GH_PAGE_BASE, GH_REPO_BASE} from '../../constants/paths';
import { PROJECTS } from '../../../data/projects';
// Interfaces
import { Project } from '../../types/project.interface';
// Components
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
// Services
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-project-list',
  imports: [NgClass, NgTemplateOutlet, ImageCarouselComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  readonly Screen = Screen;

  projects: Project[];
  screen: Signal<Screen>;

  constructor(private layout: LayoutService) {
    this.projects = this.constructProjectList();
    this.screen = this.layout.screen;
  }

  ngAfterViewInit(): void {
    this.preloadAllImages();
  }

  constructProjectList(): Project[] {
    return PROJECTS.filter(project => !project.isHidden).map(project => ({
      ...project,
      site: project.site || `${GH_PAGE_BASE}/${project.id}`,
      repo: project.repo === null ? null : project.repo || `${GH_REPO_BASE}/${project.id}`,
      imageData: new Array(project.numberOfImages).fill('')
        .map((_, index) => ({
          fullSizeURL: `${IMG_PATH}/${project.id}/${project.id}-${index + 1}.webp`,
          smallSizeURL: `${IMG_PATH}/${project.id}/small/${project.id}-${index + 1}.webp`,
          altText: `${project.name} - Image ${index + 1}`
        })),
      areFeaturesCollapsed: true
    }));
  }

  preloadAllImages(): void {
    this.projects.forEach(project => {
      this.preloadImages(project.imageData.map(data => data.smallSizeURL).slice(1));
      if (this.screen() !== Screen.mobile)
        this.preloadImages(project.imageData.map(data => data.fullSizeURL));
    });
  }

  preloadImages(imageURLs: string[]): void {
    if (!imageURLs.length) return;
    const preload = (index: number) => {
      const image = new Image();
      image.src = imageURLs[index];
      if (index === imageURLs.length - 1) return;
      image.onload = () => { preload(index + 1) };
      image.onerror = () => { preload(index + 1) };
    }
    preload(0);
  }

  toggleFeatures(project: Project): void {
    project.areFeaturesCollapsed = !project.areFeaturesCollapsed;
  }

}
