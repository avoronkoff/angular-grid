import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Grid } from '../grid-item';

@Injectable()
export class AppGridService {
  private gridUrlF = 'api/grid_items_f';
  private gridUrlS = 'api/grid_items_s';

  constructor(private http: Http) { }

  getGridF(): Promise<Grid[]> {
    return this.http.get(this.gridUrlF)
      .toPromise()
      .then(response => response.json().data as Grid[])
      .catch(this.handleError);
  }

  getGridS(): Promise<Grid[]> {
    return this.http.get(this.gridUrlS)
      .toPromise()
      .then(response => response.json().data as Grid[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
