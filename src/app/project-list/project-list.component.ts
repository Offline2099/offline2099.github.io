import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { WebsiteData } from '../interfaces';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() projects: WebsiteData[] = [];

  links = [
    {
      text: 'Website',
      iconName: 'world'
    },
    {
      text: 'Repository',
      iconName: 'github'
    }
  ];

  imageNames: string[][] = [];
  featuresShown: boolean[] = [];

  ngOnInit(): void {
    this.formImageNames();
    this.featuresShown = Array(this.projects.length).fill(false);
  }

  ngAfterViewInit(): void {
    this.loadFullSizeImages();
  }

  formImageNames(): void {
    this.projects.forEach((p, i) => {
      if (p.images) {
        this.imageNames[i] = Array(p.images.n).fill('');
        this.imageNames[i].forEach((name, j) => {
          this.imageNames[i][j] = p.images!.name + '-' + (j + 1);
        });
      }
    });
  }

  loadFullSizeImages(): void {
    this.imageNames.flat().forEach(src => {
      let img = new Image();
      let project: string = src.split('-').slice(0, -1).join('-');
      img.src = './assets/img/projects/' + project + '/' + src + '.png';
    });
  }

  toggleFeatures(index: number): void {
    this.featuresShown[index] = !this.featuresShown[index];
  }

}
