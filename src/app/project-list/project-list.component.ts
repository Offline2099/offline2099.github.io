import { Component, Input } from '@angular/core';

import { WebsiteData, Project } from '../interfaces';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  @Input() data: WebsiteData[] = [];

  projects: Project[] = [];

  ngOnInit(): void {
    this.fillProjectsData();
  }

  ngAfterViewInit(): void {
    this.loadFullSizeImages();
  }

  fillProjectsData(): void {
    this.projects = this.data.map(site => {
      return {
        name: site.name,
        links: [
          {icon: 'world', text: 'Website', url: site.urls.site},
          {icon: 'github', text: 'Repository', url: site.urls.repo || ''}
        ],
        images: this.formImageURLs(site),
        description: site.description,
        featuresShown: false
      }
    });
  }

  formImageURLs(site: WebsiteData): Project['images'] {

    let path: string = './assets/img/projects/';
    let project: string = site.images.nameTemplate;

    return Array.from(Array(site.images.number), (e, i) => ({
      full: `${path}${project}/${project}-${i + 1}.png`,
      small: `${path}${project}/small/${project}-${i + 1}.png`,
      alt: `${site.name} - Image ${i + 1}`
    }));
  }

  loadFullSizeImages(): void {
    this.projects.forEach(p => {
      p.images.forEach(image => {
        let img = new Image();
        img.src = image.full;
      });
    });
  }

  toggleFeatures(project: Project): void {
    project.featuresShown = !project.featuresShown;
  }

}
