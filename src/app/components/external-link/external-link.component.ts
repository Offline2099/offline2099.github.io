import { Component, computed, input } from '@angular/core';
import { ICONS } from '../../constants/paths';

@Component({
  selector: '[app-external-link]',
  host: { '[attr.target]': `'_blank'` },
  imports: [],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss',
})
export class ExternalLinkComponent {

  text = input.required<string>();
  icon = input<string>('');

  iconURL = computed<string | null>(() => this.getIconURL(this.icon()));
  externalLinkIcon: string = this.getIconURL('external-link') as string;

  getIconURL(name: string): string | null {
    return name ? `${ICONS}/${name}.svg` : null;
  }

}
