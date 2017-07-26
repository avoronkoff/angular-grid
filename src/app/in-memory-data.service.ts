import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grid_items_f = [
      {Name: 'Eve', Surname: 'Jackson', Score: 94},
      {Name: 'John', Surname: 'Doe', Score: 80},
      {Name: 'Adam', Surname: 'Johnson', Score: 67},
      {Name: 'Max', Surname: 'Daniels', Score: 45},
      {Name: 'Jill', Surname: 'Smith', Score: 95}
    ];

    const grid_items_s = [
      {Name: 'Jill', Surname: 'Smith', Score: 95},
      {Name: 'Max', Surname: 'Daniels', Score: 45},
      {Name: 'Adam', Surname: 'Johnson', Score: 67},
      {Name: 'John', Surname: 'Doe', Score: 80},
      {Name: 'Eve', Surname: 'Jackson', Score: 94}
    ];
    return {grid_items_f, grid_items_s};
  }
}
