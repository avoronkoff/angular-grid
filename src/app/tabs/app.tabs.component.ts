import {Component, OnInit} from '@angular/core';

import { Grid } from '../grid-item';
import { AppGridService } from '../service/app.grid.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './app.tabs.component.html',
  styleUrls: ['./app.tabs.component.css']
})

export class AppTabsComponent implements OnInit{
  grid_list: Grid[];

  constructor(private appGridService: AppGridService) { }

  getGrid(): void {
    this.appGridService
      .getGrid()
      .then(heroes => this.grid_list = heroes);
  }

  ngOnInit(): void {
    this.getGrid();
  }
}
