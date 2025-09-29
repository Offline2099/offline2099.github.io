import { Component } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Subscription } from 'rxjs';
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
  subscription: Subscription;
  screen!: Screen;

  constructor(private layout: LayoutService) {
    this.projects = this.constructProjectList();
    this.subscription = this.layout.screen$.subscribe(screen => this.screen = screen);
  }

  ngAfterViewInit(): void {
    if (this.screen !== Screen.mobile) this.loadFullSizeImages();
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

  loadFullSizeImages(): void {
    this.projects.forEach(project => {
      project.imageData.forEach(image => {
        const img = new Image();
        img.src = image.fullSizeURL;
      });
    });
  }

  toggleFeatures(project: Project): void {
    project.areFeaturesCollapsed = !project.areFeaturesCollapsed;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
