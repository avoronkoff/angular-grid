import {Component, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';

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
  exportId = 'exportF';

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

  saveData(): void {
    let blob = new Blob([document.getElementById(this.exportId).innerHTML], {
      type: 'application/xls'
    });
    FileSaver.saveAs(blob, 'exportData.xls');
  }

  setIdTable(id): void {
    this.exportId = id;
  }

  ngOnInit(): void {
    this.getGridF();
    this.getGridS();
  }
}
