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

  getGrid(): void {
    this.appGridService
      .getGrid()
      .then(list => {
        this.grid_list_f = list.items_f;
        this.grid_list_s = list.items_s;
      });
  }

  saveData(): void {
    let blob = new Blob([document.getElementById(this.exportId).innerHTML], {
      type: 'application/xls'
    });
    FileSaver.saveAs(blob, 'exportData.xls');
  }

  // setIdTable(id): void {
  //   this.exportId = id;
  // }

  ngOnInit(): void {
    this.getGrid();
  }
}
