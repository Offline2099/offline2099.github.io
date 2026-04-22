import { Injectable } from '@angular/core';
import { GH_PAGE_BASE, GH_REPO_BASE, ICONS, PROJECT_IMAGES } from '../constants/paths';
import { Project } from '../types/project.interface';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  iconURL(name: string): string | null {
    return name ? `${ICONS}/${name}.svg` : null;
  }

  projectSiteURL(project: Project): string | null {
    return project.site !== null
      ? project.site || `${GH_PAGE_BASE}/${project.id}`
      : null;
  }

  projectRepoURL(project: Project): string | null {
    return project.repo !== null 
      ? project.repo || `${GH_REPO_BASE}/${project.id}`
      : null;
  }

  projectImageURL(project: Project, index: number, options?: { isSmall: boolean }): string {
    return (
      `${PROJECT_IMAGES}/${project.id}/` +
      `${options?.isSmall ? 'small/' : ''}` +
      `${project.id}-${index + 1}.webp`
    );
  }

}