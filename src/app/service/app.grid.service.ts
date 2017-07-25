import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Grid } from '../grid-item';

@Injectable()
export class AppGridService {
  private gridUrl = 'api/grid_items';

  constructor(private http: Http) { }

  getGrid(): Promise<Grid[]> {
    return this.http.get(this.gridUrl)
      .toPromise()
      // .then(response => response.json().data as Grid[])
      .then(response => console.log(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
