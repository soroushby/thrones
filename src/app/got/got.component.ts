import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters';

@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.scss'],
})
export class GotComponent implements OnInit {
  constructor(private dataService: DataService) {}
  characters$: Observable<Characters[]> | undefined;
  ngOnInit(): void {
    this.characters$ = this.dataService.getAllCharacters();
  }
}
