import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
})
export class CharactersCardComponent {
  @Input() characters: any | undefined;
}
