import { Component } from '@angular/core';
import { INTRO } from './constants/intro';
import { PROJECTS } from './constants/projects';
import { THIS_PAGE_REPO } from './constants/paths';
import { Project } from './types/project.interface';
import { ProjectComponent } from './components/project/project.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';

@Component({
  selector: 'app-root',
  imports: [ProjectComponent, ExternalLinkComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  readonly intro: string[] = INTRO;
  readonly projects: Project[] = PROJECTS;
  readonly repoURL: string = THIS_PAGE_REPO;
  
}
