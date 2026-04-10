import { Component } from '@angular/core';
import { INTRO } from '../data/intro';
import { THIS_PAGE_REPO } from './constants/paths';
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ExternalLinkComponent } from './components/external-link/external-link.component';

@Component({
  selector: 'app-root',
  imports: [ProjectListComponent, ExternalLinkComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  readonly intro: string[] = INTRO;
  readonly repoURL: string = THIS_PAGE_REPO;
  
}
