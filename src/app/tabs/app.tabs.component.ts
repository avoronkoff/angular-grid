import {Component, OnInit} from '@angular/core';

import { Grid } from '../grid-item';
import { AppGridService } from '../service/app.grid.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './app.tabs.component.html',
  styleUrls: ['./app.tabs.component.css']
})

export class AppTabsComponent implements OnInit {
  grid_list_f: Grid[];
  grid_list_s: Grid[];

  constructor(private appGridService: AppGridService) { }

  getGridF(): void {
    this.appGridService
      .getGridF()
      .then(list => this.grid_list_f = list);
  }

  getGridS(): void {
    this.appGridService
      .getGridS()
      .then(list => this.grid_list_s = list);
  }

  ngOnInit(): void {
    this.getGridF();
    this.getGridS();
  }
}
