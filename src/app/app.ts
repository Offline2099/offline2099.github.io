import { Component } from '@angular/core';
import { INTRO } from '../data/intro';
import { ProjectListComponent } from "./components/project-list/project-list.component";

@Component({
  selector: 'app-root',
  imports: [ProjectListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  readonly intro: string[] = INTRO;
  
}
