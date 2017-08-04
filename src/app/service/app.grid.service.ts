import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppGridService {

  constructor(private http: Http) { }

  getGrid(): Promise<any> {
    return this.http.get('api/data_grid')
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
