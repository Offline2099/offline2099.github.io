import { Component } from '@angular/core';

import { WebsiteData } from './interfaces';
import { Intro, Websites } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intro: string[] = Intro;
  websites: WebsiteData[] = Websites;

}
