import { Component, computed, input } from '@angular/core';
import { URLService } from '../../services/url.service';

@Component({
  selector: '[app-external-link]',
  host: { '[attr.target]': `'_blank'` },
  imports: [],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss'
})
export class ExternalLinkComponent {

  text = input.required<string>();
  icon = input<string>('');

  iconURL = computed<string | null>(() => this.url.iconURL(this.icon()));
  externalLinkIcon: string;

  constructor(private url: URLService) {
    this.externalLinkIcon = this.url.iconURL('external-link') as string;
  }

}
